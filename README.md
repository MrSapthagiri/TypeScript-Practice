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
```
# Top-level files
npx ts-node "Into .ts"

# Function folder
npx ts-node "src\Function\String_Reverse.ts"
npx ts-node "src\Function\Makeuser.ts"
npx ts-node "src\Function\function.ts"
npx ts-node "src\Function\Employee_Class.ts"
npx ts-node "src\Function\Creat Point.ts"
npx ts-node "src\Function\Combine.ts"
npx ts-node "src\Function\Array_ Statistics.ts"

# Framework Automation
npx ts-node "src\Framework\Automation\ui test .ts"
npx ts-node "src\Framework\Automation\smoke suite.ts"
npx ts-node "src\Framework\Automation\runtest.ts"
npx ts-node "src\Framework\Automation\login test.ts"
npx ts-node "src\Framework\Automation\basetest.ts"

# TASk folder
npx ts-node "src\TASk\Basics of TypeScript.ts"
npx ts-node "src\TASk\Main Entry point.ts"
npx ts-node "src\TASk\Getting Started.ts"
npx ts-node "src\TASk\functionsArrays.ts"

# Control Flow and Loops (top-level examples)
npx ts-node "src\Control Flow and Loops\Triangle Pattern.ts"
npx ts-node "src\Control Flow and Loops\switchCalculator.ts"
npx ts-node "src\Control Flow and Loops\reverseArray.ts"
npx ts-node "src\Control Flow and Loops\primeNumberRange.ts"
npx ts-node "src\Control Flow and Loops\positiveNegativeCounter.ts"
npx ts-node "src\Control Flow and Loops\Password Strength Checker.ts"
npx ts-node "src\Control Flow and Loops\objectPropertiesForIn.ts"
npx ts-node "src\Control Flow and Loops\Object Properties with For…in.ts"
npx ts-node "src\Control Flow and Loops\Inventory Management Simulation.ts"
npx ts-node "src\Control Flow and Loops\Flatten a Nested Array.ts"
npx ts-node "src\Control Flow and Loops\fizzBuzz.ts"
npx ts-node "src\Control Flow and Loops\Find Second Largest Number.ts"
npx ts-node "src\Control Flow and Loops\evenNumbersWhile.ts"
npx ts-node "src\Control Flow and Loops\dynamicMenuSystem.ts"
npx ts-node "src\Control Flow and Loops\doWhileUserPrompt.ts"
npx ts-node "src\Control Flow and Loops\countVowels.ts"

# Into Practice Sheets
npx ts-node "src\Into Practice Sheets\relativeCoding.ts"
npx ts-node "src\Into Practice Sheets\reverseString.ts"
npx ts-node "src\Into Practice Sheets\isPrime.ts"
npx ts-node "src\Into Practice Sheets\findLargest.ts"
npx ts-node "src\Into Practice Sheets\countVowels.ts"

# Arrays folder
npx ts-node "src\Arrays\Spread & Rest with Arrays.ts"
npx ts-node "src\Arrays\Multi-dimensional array.ts"
npx ts-node "src\Arrays\Map, filter, reduce, find.ts"
npx ts-node "src\Arrays\Iterating Arrays .ts"
npx ts-node "src\Arrays\Common Methods.ts"
npx ts-node "src\Arrays\Automation Contex.ts"
npx ts-node "src\Arrays\Array Ceration.ts"
npx ts-node "src\Arrays\Array and object .ts"

# Arrays Sample Example code
npx ts-node "src\Arrays\Sample Example code\index.ts"
npx ts-node "src\Arrays\Sample Example code\arrays_realworld.ts"
npx ts-node "src\Arrays\Sample Example code\arrays_intermediate.ts"
npx ts-node "src\Arrays\Sample Example code\arrays_basics.ts"
npx ts-node "src\Arrays\Sample Example code\arrays_advanced.ts"

# Arrays High-Level Complex Array
npx ts-node "src\Arrays\High-Level Complex Array\Nested-Arrays-Grouping-Alerts.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Nested-Arrays-Filtering.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Nest-Arrays-Map-Filter-Reduce.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Multi-DimensionalArrays-Ranking-Percentiles.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Multi-Dimensional-Arrays-Sorting.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Complex Array.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Arrays-Tax-Calculation-Sorting.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Arrays-Similarity-Scoring.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Arrays-Reduce-Alerts.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Arrays-Map-Fraud-Detection.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Arrays-GeoDistance-Efficiency.ts"
npx ts-node "src\Arrays\High-Level Complex Array\Arrays-Analytics-Ranking.ts"
npx ts-node "src\Arrays\High-Level Complex Array\ArrayAggregation-RiskAnalysis.ts"

# Control Flow Complex folder
npx ts-node "src\Control Flow and Loops\Complex\shoppingCartComplex.ts"
npx ts-node "src\Control Flow and Loops\Complex\payrollEvaluator.ts"
npx ts-node "src\Control Flow and Loops\Complex\matrixPathFinder.ts"
npx ts-node "src\Control Flow and Loops\Complex\logParserAndAggregator.ts"
npx ts-node "src\Control Flow and Loops\Complex\inventoryReorderSystem.ts"
npx ts-node "src\Control Flow and Loops\Complex\gradebookWithCurving.ts"
npx ts-node "src\Control Flow and Loops\Complex\attendanceCalculatorAdvanced.ts"

# Typescript-oops
npx ts-node "src\Typescript-oops\classes_objects.ts"
npx ts-node "src\Typescript-oops\TypeScript OOP.ts"
npx ts-node "src\Typescript-oops\inheritance.ts"
npx ts-node "src\Typescript-oops\Base Class.ts"
npx ts-node "src\Typescript-oops\abstract_interface.ts"

# Typescript-oops - Abstract examples
npx ts-node "src\Typescript-oops\Abstract\Real-Time Banking Example.ts"
npx ts-node "src\Typescript-oops\Abstract\HighLevelAbstraction.ts"
npx ts-node "src\Typescript-oops\Abstract\EnterpriseBankSystem.ts"
npx ts-node "src\Typescript-oops\Abstract\Complex.ts"
npx ts-node "src\Typescript-oops\Abstract\Abstraction in typeScript.ts"

# Typescript-oops - Polymorphism and Encapsulation
npx ts-node "src\Typescript-oops\Polymorphism\Basic Polymorphism.ts"
npx ts-node "src\Typescript-oops\Polymorphism\transport-polymorphism.ts"
npx ts-node "src\Typescript-oops\Polymorphism\Real-World Polymorphism.ts"
npx ts-node "src\Typescript-oops\Polymorphism\Method Overriding.ts"
npx ts-node "src\Typescript-oops\Polymorphism\Interface-based Polymorphism.ts"
npx ts-node "src\Typescript-oops\Polymorphism\Method Overriding.ts"
npx ts-node "src\Typescript-oops\Polymorphism\Real-World Polymorphism.ts"
npx ts-node "src\Typescript-oops\Polymorphism\transport-polymorphism.ts"
npx ts-node "src\Typescript-oops\Encapsulation\medium level.ts"
npx ts-node "src\Typescript-oops\Encapsulation\low level.ts"
npx ts-node "src\Typescript-oops\Encapsulation\High level.ts"

# Typescript-oops - Inheritance examples
npx ts-node "src\Typescript-oops\Inheritance\Method Overriding.ts"
npx ts-node "src\Typescript-oops\Inheritance\Multi-Level Inheritance.ts"
npx ts-node "src\Typescript-oops\Inheritance\Basic Inheritance.ts"
npx ts-node "src\Typescript-oops\Inheritance\Sampletest\runTests.ts"
npx ts-node "src\Typescript-oops\Inheritance\Sampletest\productTest.ts"
npx ts-node "src\Typescript-oops\Inheritance\Sampletest\loginTest.ts"
npx ts-node "src\Typescript-oops\Inheritance\Sampletest\baseTest.ts"

# Misc
npx ts-node "src\Control Flow and Loops\Character Frequency Counter.ts"

```

Notes
- If a file imports another file (shared modules), running it standalone with `ts-node` may require relative paths to match runtime expectations. If you see import errors, prefer compiling the project with `npx tsc` and running the compiled output under `dist`.
- To run everything automatically and print comments for each file, use the included `run-all.ps1` script:
```
.\run-all.ps1
```
or to exclude specific filenames:
```
.\run-all.ps1 -Exclude 'DataType.ts','Into .ts'
```

If you want, I can also add a `package.json` script to call `run-all.ps1` so you can run `npm run run-all` — tell me if you want that and any filenames to exclude.
**Project: TypeScript-Practice**

**Purpose:**
**Common pitfalls & tips**
- Filenames with spaces must be quoted in PowerShell: `"Data Type.ts"`.
- If you see errors about `BigInt` or `Symbol` when compiling, set `target` and `lib` to `ES2020` (or higher) in `tsconfig.json` or pass flags to `tsc`.
- If you see `Cannot find name 'console'`, ensure `@types/node` is installed and `lib` includes a runtime that defines `console` (the Node typing from `@types/node` covers it). Installing `@types/node` and using `npx tsc` will normally resolve this.
- Prefer local devDependencies (`npm install --save-dev ...`) and `npx` so the project is reproducible for other developers.

**If something fails**
- Copy the exact error text from your PowerShell window and paste it here. I will help you fix the specific issue.

**Contact / Next steps**
- If you want, I can add a helpful `package.json` script that runs every file except a list you provide, or create a small runner script `run-all.ps1` that takes exclude patterns — tell me which you prefer and I will add it.
