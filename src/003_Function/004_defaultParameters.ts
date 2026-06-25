// 1. Create a named function with default name as Guest.
function greet_User(name: string = "Guest"): string {
    return `Welcome, ${name}!`;
}
console.log(greetUser());

// 2. Create a named function with default city as Chennai.
function setCity(city: string = "Chennai"): string {
    return `City: ${city}`;
}
console.log(setCity());

// 3. Create a named function with default role as Engineer.
function setRole(role: string = "Engineer"): string {
    return `Role: ${role}`;
}
console.log(setRole());

// 4. Create a named function with default language as English.
function setLanguage(lang: string = "English"): string {
    return `Language: ${lang}`;
}
console.log(setLanguage());

// 5. Create a named function with default status as Active.
function setStatus(status: string = "Active"): string {
    return `Status: ${status}`;
}
console.log(setStatus());
