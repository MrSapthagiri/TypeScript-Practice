// abstract class className{
//     abstract methodName(): void;                 // no implementation

//     normalMethod() {                             // with Implementation
//         console.log("your comments")
//     }
// }


abstract class Payment {

    // Normal 
    paymentStarted(): void {
        console.log("Payment Process started");
    }

    // Abstract Method
    abstract pay(amount: number): void;     // no implementation
}

class CreditCardPayment extends Payment {

    pay(amount: number): void {
        console.log(`Paid ₹${amount} using Credit Card`);
    }
}

class UPI extends Payment {

    pay(amount: number): void {
        console.log(`Paid ₹${amount} using UPI`);
    }
}

//object 

const credit = new CreditCardPayment();
credit.paymentStarted();
credit.pay(1000);

console.log("----------------");

const upi = new UPI();
upi.paymentStarted();
upi.pay(500);
