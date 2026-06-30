// What is the output of the following code?

var name = "John";

function display() {
    console.log(name);
    if (true) {
        var name = "David";
        console.log(name);
    }
    console.log(name);
}
display();
console.log(name);

/*
Options:

A)

John
David
David
John

B)

undefined
David
David
John

C)

John
David
David
David

D)

Compilation Error

Correct Answer: B

Explanation:

var is function-scoped.

Inside display(), the declaration

var name;

is hoisted to the top.

It becomes

function display(){

   var name;

   console.log(name);

   name="David";

}

Initially it is undefined.

Global variable remains unchanged.
*/

// What is the output?

let total = 500;

function calculate() {

    console.log(total);

    if (true) {

        let total = 1000;

        console.log(total);

    }

}

calculate();

/*
Options

A)

500
1000

B)

1000
1000

C)

ReferenceError

D)

undefined
1000

Correct Answer : C

Explanation

The local variable "total"
exists from the beginning of
the block but stays inside
Temporal Dead Zone.

Accessing it before initialization
throws ReferenceError.
*/