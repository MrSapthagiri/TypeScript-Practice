class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


const new_student = new Student("Mr SAPTHAGIRI", 24);
new_student.display();