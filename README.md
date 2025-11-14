**Project: TypeScript-Practice**

**Purpose:**
- Short reference for running the TypeScript example files in this repo on Windows (PowerShell).

**Prerequisites:**
- Node.js (LTS) installed. Verify with:
  - `node -v`
  - `npm -v`
- Recommended Node version: 14+ (BigInt and modern APIs require recent Node).

**Quick project setup (one-time)**
- From the project root (`C:\Your_Path\TypeScript-Practice`) run:
```
npm init -y
npm install --save-dev typescript ts-node @types/node
```
- (Optional) Add a `tsconfig.json` to set `target`/`lib` if your code uses BigInt / Symbol / modern APIs. Example `tsconfig.json`:
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist"
  },
  "include": ["*.ts"]
}
```

**Run a single TypeScript file (recommended, no compile step)**
- Use `npx ts-node` to execute a `.ts` file directly. Wrap paths with spaces in quotes.
PowerShell example:
```
cd "C:\Users\Your_Path\TypeScript-Practice"
npx ts-node "DataType.ts"
```
- If you prefer the global tool (not recommended), install globally and run:
```
npm install -g ts-node typescript
ts-node "DataType.ts"
```

**Compile then run (alternate)**
- Compile with `tsc` (uses `tsconfig.json` if present) and run the generated JS with `node`:
```
cd "C:\Users\Your_Path\TypeScript-Practice"
# compile
npx tsc
# run the compiled output (example)
node .\dist\DataType.js
```
- Or one-off compile with flags:
```
npx tsc "DataType.ts" --target ES2020 --lib ES2020 --outDir dist
node .\dist\DataType.js
```

**Run many files (PowerShell): examples**
- Run all `.ts` files in the current folder (non-recursive):
```
Get-ChildItem -Path . -Filter *.ts | ForEach-Object { npx ts-node $_.FullName }
```
- Run all `.ts` files recursively but exclude a specific file (example excludes `excludeFile.ts`):
```
Get-ChildItem -Path . -Recurse -Filter *.ts |
  Where-Object { $_.Name -ne 'excludeFile.ts' } |
  ForEach-Object { npx ts-node $_.FullName }
```
- If you want to exclude multiple file names, add more conditions to `Where-Object`.

**npm script shortcuts**
- Add these to your `package.json` `scripts` to simplify running:
```
"scripts": {
  "start": "npx ts-node DataType.ts",
  "run-file": "npx ts-node"
}
```
- Then run a specific file via npm:
```
npm run start
# or pass a path to the generic runner:
npm run run-file -- "Into Practice Sheets\arrays_basics.ts"
```

**Common pitfalls & tips**
- Filenames with spaces must be quoted in PowerShell: `"Data Type.ts"`.
- If you see errors about `BigInt` or `Symbol` when compiling, set `target` and `lib` to `ES2020` (or higher) in `tsconfig.json` or pass flags to `tsc`.
- If you see `Cannot find name 'console'`, ensure `@types/node` is installed and `lib` includes a runtime that defines `console` (the Node typing from `@types/node` covers it). Installing `@types/node` and using `npx tsc` will normally resolve this.
- Prefer local devDependencies (`npm install --save-dev ...`) and `npx` so the project is reproducible for other developers.

**If something fails**
- Copy the exact error text from your PowerShell window and paste it here. I will help you fix the specific issue.

**Contact / Next steps**
- If you want, I can add a helpful `package.json` script that runs every file except a list you provide, or create a small runner script `run-all.ps1` that takes exclude patterns — tell me which you prefer and I will add it.
