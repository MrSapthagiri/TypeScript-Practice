// class Employee {
//     private salary: number;

//     constructor(salary: number) {
//         this.salary = salary;
//     }

//     public getSalary(): number {
//         return this.salary;
//     }

//     public setSalary(newSalary: number): void {
//         if (newSalary >= 50000) {  // 1>=0
//             this.salary = newSalary;
//         } else {
//             console.error("Invalid salary. Please enter a value of at least 50000.");
//         }
//     }
// }

// const employee = new Employee(50000);
// console.log(employee.getSalary());

// employee.setSalary(6000);
// // console.log(employee.getSalary());

// // console.log(employee.Salary()); // Output: 60000

// Constructor
// class Employee {
//     name: string;
//     id: number;
//     salary: number;

//     constructor(name: string, id: number, salary: number) {
//         this.name = name;
//         this.id = id;
//         this.salary = salary;
//     }

//     display(): void {
//         console.log(`Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`);
//     }
// }

// const employee = new Employee("John Doe", 123, 50000);
// employee.display();

// // Public - No resrictions
// class IBM_Employee {
//     public name: string;
//     public id: number;

// }
// const IBM_employee = new IBM_Employee();
// IBM_employee.name = "John Doe";
// IBM_employee.id = 123;

// console.log(IBM_employee.name); // Accessible

// // Private - Accessible only within the class
// class PrivateEmployee {
//         private salary: 50000;

//         showSarlary(): void {
//             console.log(`Salary: ${this.salary}`);
//         }
//     }
//     const privateEmployee = new PrivateEmployee();
//     privateEmployee.showSarlary();

// PROTECTED

class empolyee {                     
    protected id: number = 1002;
}

class Manager extends empolyee {
    showId() {
        console.log(`Emp_MangerID: ${this.id}`);
    }
}

const Emp_manger = new Manager();
Emp_manger.showId();
