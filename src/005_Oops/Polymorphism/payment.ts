class Payment{

    processPayment(amount: number): void {
        console.log("Processing payment: "); 
    }

}

class CashPayment extends Payment{

    processPayment(amount: number): void {
        console.log(`Processing Cash payment of amount: ${amount}`);
    }
}

class CreditCardPayment extends Payment{

    processPayment(amount: number): void {
        console.log(`Processing Credit Card payment of amount: ${amount}`);
    }
}

class InsurancePayment extends Payment{

    processPayment(amount: number): void {

        if (amount > 50000) {
            console.log(`Insurance payment of amount: ${amount} requires additional approval.`);
        } else {
            console.log(`Processing Insurance payment of amount: ${amount}`);
        }
        
    }
}

const payments = [
    new CashPayment(),
    new CreditCardPayment(),
    new InsurancePayment()
];

const billAmount = 40000;

for(const Payment of payments){

    Payment.processPayment(billAmount);
}