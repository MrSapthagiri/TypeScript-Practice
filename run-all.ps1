<#
run-all.ps1

Usage:
  .\run-all.ps1                 # run all .ts files recursively
  .\run-all.ps1 -Exclude 'DataType.ts','Into .ts'   # exclude specific filenames

What it does:
  - Finds all `.ts` files under the current directory (recursively)
  - Skips `node_modules`, `dist`, and files listed in -Exclude
  - Prints a header/comment before running each file
  - Runs each file with `npx ts-node` and reports success or error
#>

param(
  [string[]] $Exclude = @()
)

$cwd = Get-Location
Write-Host "Running TypeScript files from: $cwd" -ForegroundColor Cyan

$files = Get-ChildItem -Path $cwd -Recurse -Filter "*.ts" -File `
  | Where-Object { $_.FullName -notmatch "\\node_modules\\" -and $_.FullName -notmatch "\\dist\\" }

if ($Exclude.Count -gt 0) {
  $excludeSet = $Exclude | ForEach-Object { $_.ToLowerInvariant() }
  $files = $files | Where-Object { $excludeSet -notcontains $_.Name.ToLowerInvariant() }
}

if (-not $files) {
  Write-Host "No .ts files found to run." -ForegroundColor Yellow
  exit 0
}

foreach ($f in $files) {
  Write-Host ""
  Write-Host "==============================================" -ForegroundColor DarkGray
  Write-Host "Running file: $($f.FullName)" -ForegroundColor Green
  Write-Host "---> Comment: About to execute $($f.Name) using npx ts-node" -ForegroundColor Gray

  try {
    # Use Start-Process to allow streaming output; use -NoNewWindow to keep output in current terminal
    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = "npx"
    $psi.Arguments = "ts-node `"$($f.FullName)`""
    $psi.RedirectStandardOutput = $true
    $psi.RedirectStandardError = $true
    $psi.UseShellExecute = $false
    $psi.CreateNoWindow = $true

    $proc = [System.Diagnostics.Process]::Start($psi)
    $stdout = $proc.StandardOutput.ReadToEnd()
    $stderr = $proc.StandardError.ReadToEnd()
    $proc.WaitForExit()

    if ($stdout) { Write-Host $stdout }
    if ($stderr) { Write-Host $stderr -ForegroundColor Red }

    if ($proc.ExitCode -eq 0) {
      Write-Host "Result: Success (exit code 0)" -ForegroundColor Cyan
    } else {
      Write-Host "Result: Failed (exit code $($proc.ExitCode))" -ForegroundColor Red
    }
  }
  catch {
    Write-Host "Exception while running $($f.Name): $_" -ForegroundColor Red
  }

  Write-Host "==============================================" -ForegroundColor DarkGray
}

Write-Host "Finished running files." -ForegroundColor Cyan
