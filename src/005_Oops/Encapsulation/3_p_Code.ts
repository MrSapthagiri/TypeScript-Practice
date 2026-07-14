class Employee {                     // Parent Class

    public name: string;            // public access modifier
    protected age: number;          // protected access modifier
    private salary: number;         // private access modifier

    //Constructor
    constructor (name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    //Public method
    displayEmployee() {
        console.log("Employee_Name:" , this.name);
        console.log("Employee_Age:" , this.age);
        console.log("Employee_Salary:" , this.salary);
    }

    // Getter Method
    getSalary() { 
        return this.salary
    }
}
    // child class

    class HR_Dep extends Employee {

        public department: string;

        constructor(
            name: string, 
            employeeAge: number, 
            employeeSalary: number, 
            department: string
        ){
            super(name,employeeAge, employeeSalary);
            this.department = department
        }

        displayHR_Dep() {
            console.log("Employee_Name:" , this.name);                  // public
            console.log("Employee_Age:" , this.age);                    // protected
            console.log("Employee_Salary:" , this.getSalary);
            console.log("Employee_Department:" , this.department);
        }
    }

    // object Creation

    const employee = new HR_Dep(
        "Dipp", 
        30, 
        500000,
        "QA Automation"
    );

    hr.displayHR_Dep()

    // Method call

    employee.displayEmployee();
    console.log("========================================");

    employee.displayHR_Dep()
    console.log("========================================");


    // public var

    // console.log(employee.name);
    // console.log(employee.age);
    // console.log(employee.salary);

    // // private var
    
    // console.log(employee.getSalary());

