const steps = ["1", "1", "3", "2", "4"]; // simulate user steps
let inventory: string[] = [];
let s = 0;
let option: string;

do {
    option = steps[s++];
    console.log(`Option: ${option}`);

    switch (option) {
        case "1":
            inventory.push("Item" + s);
            break;
        case "2":
            inventory.pop();
            break;
        case "3":
            console.log("Inventory:", inventory);
            break;
    }
} while (option !== "4");
console.log("Inventory program ended");
