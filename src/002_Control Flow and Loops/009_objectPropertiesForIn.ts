const person = { name: "Alice", age: 25, city: "Delhi", active: true };

for (let key in person) {
    if (typeof person[key as keyof typeof person] === "string") {
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }
}
