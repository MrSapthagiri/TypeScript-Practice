// 1. Create a named function to handle task start callback.
function onTaskStart(task: string): void {
    console.log(`Starting: ${task}`);
}
onTaskStart("Login Test");

// 2. Create a named function to handle task complete callback.
function onTaskComplete(task: string, index: number): void {
    console.log(`Finished #${index + 1}: ${task}`);
}
onTaskComplete("Regression", 1);

// 3. Create a named function to handle task failed callback.
function onTaskFailed(task: string): void {
    console.log(`Failed: ${task}`);
}
onTaskFailed("API Test");

// 4. Create a named function to handle task skipped callback.
function onTaskSkipped(task: string): void {
    console.log(`Skipped: ${task}`);
}
onTaskSkipped("Smoke Test");

// 5. Create a named function to process all QA tasks.
function processTasks(tasks: string[]): void {
    tasks.forEach((task, index) => {
        onTaskStart(task);
        onTaskComplete(task, index);
    });
}
processTasks(["Report"]);
