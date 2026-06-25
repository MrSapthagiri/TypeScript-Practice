
<h1 align="center">
  <img
    src="https://miro.medium.com/1*J7gECiwJLh9ROpgyqMeLoA.gif"
    alt="TS Engineer Hub"
    width="full"
  />
  <br><br>
  <span style="font-size:48px;">🔬 TS Engineer Hub</span>
</h1>

<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Runtime-Node.js-green?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  </a>
  <a href="https://github.com/MrSapthagiri/TypeScript-Practice">
    <img src="https://img.shields.io/badge/Repository-TS_Engineer_Hub-lightgrey?style=for-the-badge" alt="Repository" />
  </a>
</p>

---

## 🎯 Purpose & Overview
Welcome to the **🔬 TS Engineer Hub**! This repository is a structured learning path and reference containing a wide range of hands-on exercises, interview prep tasks, advanced Object-Oriented Programming (OOP) concepts, asynchronous execution models, and automation framework simulations. 

It is designed to help you transition from JavaScript/basic coding to advanced TypeScript constructs with strict type safety, solid design principles, and custom execution setups.

---

## 📂 Deep Dive: Repository Structure & Details

Here is the complete breakdown of what this repository contains and what each module does:

| Folder / File Path | Topic | Focus & Key Concepts |
| :--- | :--- | :--- |
| 📁 [001_DataType](file:///c:/Users/Admin/Music/TypeScript-Practice/src/001_DataType) | **TypeScript Types & String Methods** | String methods, custom types, union types, intersection types, and typed data modeling across Easy, Medium, and High difficulty challenges. |
| 📁 [002_Control Flow and Loops](file:///c:/Users/Admin/Music/TypeScript-Practice/src/002_Control%20Flow%20and%20Loops) | **Control Flow & Dynamic Loops** | Switch-case, conditionals, complex looping patterns, dynamic menus, grid calculations, matrix traversal, flat array logic, and an advanced [Complex](file:///c:/Users/Admin/Music/TypeScript-Practice/src/002_Control%20Flow%20and%20Loops/Complex) subfolder (log parsers, gradebook curves, attendance, payroll). |
| 📁 [003_Function](file:///c:/Users/Admin/Music/TypeScript-Practice/src/003_Function) | **Function Typings & Signatures** | Named, arrow, anonymous, default/optional/rest parameters, void & boolean return types, recursion, higher-order functions, generic functions, and function overloading. |
| 📁 [004_Arrays](file:///c:/Users/Admin/Music/TypeScript-Practice/src/004_Arrays) | **Advanced Array Operations** | High-level data grouping, fraud detection, similarity scoring, geodistance math, percentiles, ranking, risk analysis, and sample exercises using map/filter/reduce. |
| 📁 [Async Programming](file:///c:/Users/Admin/Music/TypeScript-Practice/src/Async%20Programming) | **Asynchronous Runtime Concepts** | Deep dive into JavaScript/TypeScript runtime mechanics including the Call Stack, Event Loop, Web APIs, and sequential vs asynchronous code execution. |
| 📁 [Typescript-oops](file:///c:/Users/Admin/Music/TypeScript-Practice/src/Typescript-oops) | **Object-Oriented Programming (OOP)** | Robust enterprise patterns covering Base classes, Inheritance, Method Overriding, Encapsulation (Access modifiers), Abstraction (Abstract classes & Interfaces), and Polymorphism. Includes a nested [Abstract](file:///c:/Users/Admin/Music/TypeScript-Practice/src/Typescript-oops/Abstract) and [Polymorphism](file:///c:/Users/Admin/Music/TypeScript-Practice/src/Typescript-oops/Polymorphism) folder. |
| 📁 [Framework](file:///c:/Users/Admin/Music/TypeScript-Practice/src/Framework) | **Automation Framework Design** | Structured class-based automation simulation mimicking UI and smoke testing suites with a base test class, login test, and run-suite mechanisms. |
| 📁 [Into Practice Sheets](file:///c:/Users/Admin/Music/TypeScript-Practice/src/Into%20Practice%20Sheets) | **Algorithm & Logic Sheets** | Interview exercises: Prime checkers, array statistics, vowel count, and string reversals. |
| 📁 [TASk](file:///c:/Users/Admin/Music/TypeScript-Practice/src/TASk) | **Interview Preparation Exercises** | Getting started tasks, custom TypeScript data structures, and list filters. |
| 📄 [task.ts](file:///c:/Users/Admin/Music/TypeScript-Practice/task.ts) | **Core Task Sandbox** | Main scratch file containing 20 core programming tasks and Employee Management system challenges solved with detailed explanations. |
| 📄 [taskReview.ts](file:///c:/Users/Admin/Music/TypeScript-Practice/taskReview.ts) | **Task Review Solutions** | Supplementary review and alternate solutions to the core employee management tasks. |
| 📜 [run-all.ps1](file:///c:/Users/Admin/Music/TypeScript-Practice/run-all.ps1) | **Bulk Execution Runner** | Custom PowerShell automation script to recursively execute all `.ts` files inside the project while ignoring standard build outputs or specific file exclusions. |

---

## 🛠️ Prerequisites & Installation

To run the TypeScript code in this repository, ensure you have the following prerequisites installed:

1. **Node.js (LTS Version)**
   - Verify Node.js: `node -v`
   - Verify npm: `npm -v`
   - *Note: Node 14+ is recommended for modern APIs like BigInt and Symbol.*

2. **Project Setup (One-Time)**
   Install devDependencies locally to maintain environment isolation:
   ```powershell
   npm install --save-dev typescript ts-node @types/node
   ```

3. **Compiler Configuration**
   The project is configured via [tsconfig.json](file:///c:/Users/Admin/Music/TypeScript-Practice/tsconfig.json):
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "module": "CommonJS",
       "moduleResolution": "Node",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true
     }
   }
   ```

---

## 🚀 Execution Guide

You can execute files in three different ways depending on your use case:

### 1. Run a Single TypeScript File (Recommended)
You can run any `.ts` file directly without manual compilation steps using `ts-node` via `npx`. Be sure to wrap paths containing spaces in double quotes:
```powershell
npx ts-node "src/003_Function/001_namedFunction.ts"
```

### 2. Bulk Execute All Files Recursively (PowerShell)
This repository includes a custom automation script [run-all.ps1](file:///c:/Users/Admin/Music/TypeScript-Practice/run-all.ps1) which recursively discovers and runs all TypeScript files.

*   **Run everything recursively:**
    ```powershell
    .\run-all.ps1
    ```
*   **Exclude specific files from execution:**
    ```powershell
    .\run-all.ps1 -Exclude 'DataType.ts','Into .ts'
    ```

### 3. Compile and Then Run (Alternative)
Compile the entire project into JavaScript and run the output from the `dist` directory:
```powershell
# Compile the TypeScript files
npx tsc

# Run the compiled output
node dist/001_DataType/001_EasyLevel.js
```

---

## 💡 Common Pitfalls & Solutions

*   **Spaces in File Paths:** Always wrap your paths with quotes when executing in PowerShell, e.g. `npx ts-node "src/002_Control Flow and Loops/017_trianglePattern.ts"`.
*   **Missing Globals (e.g. `console`):** Ensure you have installed `@types/node` via `npm install --save-dev @types/node`.
*   **BigInt / modern JS feature support:** If you encounter compilation errors for modern ES features, verify that your [tsconfig.json](file:///c:/Users/Admin/Music/TypeScript-Practice/tsconfig.json) has `target` and `lib` set to `ES2020` or higher.
*   **Import Errors on Runtime:** For files that import shared helper files, running standalone via `ts-node` might fail. In this case, compile the project using `npx tsc` first and run the generated `.js` files using `node`.
