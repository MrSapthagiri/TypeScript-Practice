// 1. Create a named function to get task count.
function getTaskCount(tasks: string[]): number {
    return tasks.length;
}
console.log("Task Count:", getTaskCount(["A", "B", "C", "D", "E"]));

// 2. Create a named function to get user line in report.
function getUserLine(user: string): string {
    return `User: ${user}`;
}
console.log(getUserLine("John"));

// 3. Create a named function to get remarks line in report.
function getRemarksLine(remarks?: string): string {
    return `Remarks: ${remarks ?? "No remarks"}`;
}
console.log(getRemarksLine("Completed on time"));

// 4. Create a named function to get report header.
function getHeader(): string {
    return "===== TASK REPORT =====";
}
console.log(getHeader());

// 5. Create a named function to generate full task report.
function generateTaskReport(user: string, tasks: string[], remarks?: string): string {
    return `
${getHeader()}
${getUserLine(user)}
Task Count: ${getTaskCount(tasks)}
${getRemarksLine(remarks)}
========================`;
}
console.log(generateTaskReport("John", ["Write Test Cases", "Execute Regression"], "Done"));
