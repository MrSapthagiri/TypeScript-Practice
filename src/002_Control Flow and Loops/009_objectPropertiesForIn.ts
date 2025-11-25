const user = { name: "Alice", age: 25, city: "Delhi", active: true };

for (let key in user) {
    if (typeof user[key as keyof typeof user] === "string") {
        console.log(`${key}: ${user[key as keyof typeof user]}`);
    }
}
