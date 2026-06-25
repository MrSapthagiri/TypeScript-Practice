// 1. Create a named function to return grade A.
function gradeA(score: number): string {
    return score >= 90 ? "A" : "";
}
console.log("92 =>", gradeA(92) || "Not A");

// 2. Create a named function to return grade B.
function gradeB(score: number): string {
    return score >= 75 ? "B" : "";
}
console.log("78 =>", gradeB(78) || "Not B");

// 3. Create a named function to return grade C.
function gradeC(score: number): string {
    return score >= 60 ? "C" : "";
}
console.log("65 =>", gradeC(65) || "Not C");

// 4. Create a named function to return grade D.
function gradeD(score: number): string {
    return score >= 40 ? "D" : "";
}
console.log("45 =>", gradeD(45) || "Not D");

// 5. Create a named function to evaluate final score grade.
function evaluateScore(score: number): string {
    return gradeA(score) || gradeB(score) || gradeC(score) || gradeD(score) || "F";
}
console.log("30 =>", evaluateScore(30));
