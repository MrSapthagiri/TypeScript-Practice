// 1. Create a named function to make a user object.
function makeUser(name: string, age: number, city: string) {
    return { id: 1, name, age, city, active: true };
}
console.log(makeUser("Arun", 22, "Chennai"));

// 2. Create a named function to make a guest object.
function makeGuest(name: string) {
    return { id: 0, name, role: "Guest", active: false };
}
console.log(makeGuest("Visitor"));

// 3. Create a named function to make an admin object.
function makeAdmin(name: string, department: string) {
    return { id: 100, name, department, role: "Admin", active: true };
}
console.log(makeAdmin("Meena", "QA"));

// 4. Create a named function to make an employee object.
function makeEmployee(name: string, role: string, salary: number) {
    return { name, role, salary, active: true };
}
console.log(makeEmployee("John", "Developer", 70000));

// 5. Create a named function to make a student object.
function makeStudent(name: string, course: string, year: number) {
    return { name, course, year, active: true };
}
console.log(makeStudent("Kavi", "TypeScript", 2));
