// 1. Create a named function with void return type to log a message.
function logMessage(msg: string): void {
    console.log("Log:", msg);
}
logMessage("Application started");

// 2. Create a named function with void return type to log an error.
function logError(error: string): void {
    console.log("Error:", error);
}
logError("Invalid input");

// 3. Create a named function with void return type to log a warning.
function logWarning(warning: string): void {
    console.log("Warning:", warning);
}
logWarning("Low disk space");

// 4. Create a named function with void return type to log success.
function logSuccess(message: string): void {
    console.log("Success:", message);
}
logSuccess("Test passed");

// 5. Create a named function with void return type to log info.
function logInfo(info: string): void {
    console.log("Info:", info);
}
logInfo("User logged in");
