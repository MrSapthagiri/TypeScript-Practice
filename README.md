tscc "Into Practice Sheets/relativeCoding.ts"

# TypeScript Practice Project

This project contains TypeScript practice questions and example solutions, organized by topic in different folders under `src`.

## Folder Structure

```
src/
  Arrays/
    Array and object .ts
    Array Ceration.ts
    Automation Contex.ts
    Common Methods.ts
    High-Level Complex Array/
    Iterating Arrays .ts
    Map, filter, reduce, find.ts
    Multi-dimensional array.ts
    Sample Example code/
    Spread & Rest with Arrays.ts
    Tuple .ts
  Control Flow and Loops/
    2D Array Traversal.ts
    Character Frequency Counter.ts
    ...
  Function/
    Array_ Statistics.ts
    Combine.ts
    Creat Point.ts
    Employee_Class.ts
    function.ts
    Makeuser.ts
    String_Reverse.ts
  Into Practice Sheets/
    countVowels.ts
    findLargest.ts
    isPrime.ts
    relativeCoding.ts
    reverseString.ts
  TASk/
    Basics of TypeScript.ts
    functionsArrays.ts
    Getting Started.ts
    Main Entry point.ts
Into .ts         // Practice sheet with 25 TypeScript questions and answers
src/Into Practice Sheet.ts // Imports and runs all example files in one go
```

---

## How to Run the Code

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install TypeScript globally:
  ```powershell
  npm install -g typescript
  ```

---

### Running Example Files

1. Open your terminal and navigate to the project root:
   ```powershell
   cd "C:\Users\HP\Music\TypeScript Practice"
   cd src
   ```
2. Compile and run any `.ts` file (example for Arrays):
   ```powershell
   tsc "Arrays/Array and object .ts"
   node "Arrays/Array and object .js"
   ```
   Replace the filename with any file you want to run from any folder.

---

### Running All Example Files Together

1. Compile and run the main entry file:
   ```powershell
   tsc "Into Practice Sheet.ts"
   node "Into Practice Sheet.js"
   ```

---

## Notes
- Do **not** put terminal commands (like `tsc ...` or `node ...`) inside `.ts` files. Only TypeScript/JavaScript code should be in `.ts` files.
- If you add new `.ts` files, compile and run them using the steps above.

---

Happy coding!
