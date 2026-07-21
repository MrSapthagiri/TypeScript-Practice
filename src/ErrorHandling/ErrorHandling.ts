class ErrorHandlingDemo {

    // 1. Division Example
    static divide(a: number, b: number): void {

        try {

            if (b === 0) {
                throw new Error("Division by Zero is not allowed.");
            }

            const result = a / b;

            console.log("Division Result :", result);

        }
        catch (error) {

            console.log("Error :", (error as Error).message);

        }
        finally {

            console.log("Division Operation Completed");
            console.log("-----------------------------------");

        }

    }

    // 2. Login Validation
    static login(username: string, password: string): void {

        try {

            if (username.trim() === "") {
                throw new Error("Username cannot be empty.");
            }

            if (password.trim() === "") {
                throw new Error("Password cannot be empty.");
            }

            console.log("Login Successful");

        }
        catch (error) {

            console.log("Login Error :", (error as Error).message);

        }
        finally {

            console.log("Login Validation Completed");
            console.log("-----------------------------------");

        }

    }

    // 3. Age Validation
    static validateAge(age: number): void {

        try {

            if (age < 18) {
                throw new Error("Age must be 18 or above.");
            }

            console.log("Eligible for Registration");

        }
        catch (error) {

            console.log("Validation Error :", (error as Error).message);

        }
        finally {

            console.log("Age Validation Completed");
            console.log("-----------------------------------");

        }

    }

    // 4. Array Validation
    static arrayExample(): void {

        try {

            const numbers = [10, 20, 30];

            const index = 5;

            if (index >= numbers.length) {
                throw new Error("Array Index Out of Range.");
            }

            console.log(numbers[index]);

        }
        catch (error) {

            console.log("Array Error :", (error as Error).message);

        }
        finally {

            console.log("Array Operation Completed");
            console.log("-----------------------------------");

        }

    }

    // 5. JSON Parsing
    static jsonExample(): void {

        try {

            const jsonData = '{"name":"Surya","age":25}';

            const data = JSON.parse(jsonData);

            console.log("JSON Data :", data);

        }
        catch (error) {

            console.log("JSON Error :", (error as Error).message);

        }
        finally {

            console.log("JSON Parsing Completed");
            console.log("-----------------------------------");

        }

    }

    // 6. Bank Withdrawal
    static withdraw(balance: number, amount: number): void {

        try {

            if (amount > balance) {
                throw new Error("Insufficient Balance.");
            }

            balance -= amount;

            console.log("Withdrawal Successful");

            console.log("Remaining Balance :", balance);

        }
        catch (error) {

            console.log("Bank Error :", (error as Error).message);

        }
        finally {

            console.log("Transaction Completed");
            console.log("-----------------------------------");

        }

    }

}

// ------------------------------
// Main Program
// ------------------------------

console.log("===== TypeScript Error Handling Demo =====");
console.log();

// Division
ErrorHandlingDemo.divide(100, 20);
ErrorHandlingDemo.divide(100, 0);

// Login
ErrorHandlingDemo.login("admin", "admin123");
ErrorHandlingDemo.login("", "admin123");

// Age
ErrorHandlingDemo.validateAge(25);
ErrorHandlingDemo.validateAge(15);

// Array
ErrorHandlingDemo.arrayExample();

// JSON
ErrorHandlingDemo.jsonExample();

// Bank
ErrorHandlingDemo.withdraw(5000, 3000);
ErrorHandlingDemo.withdraw(5000, 7000);

console.log("===== Program Finished =====");