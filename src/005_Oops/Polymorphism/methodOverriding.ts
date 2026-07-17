// Parent Class
class Payment {

    pay(): void {
        console.log("Payment Started");
    }
}

// Child Class 1
class CreditCard extends Payment {

    override pay(): void {
        console.log("Paid using Credit Card");
    }
}

// Child Class 2
class UPI extends Payment {

    override pay(): void {
        console.log("Paid using UPI");
    }
}

// Child Class 3
class NetBanking extends Payment {

    override pay(): void {
        console.log("Paid using Net Banking");
    }
}

// Parent Reference holding Child Objects
const payments: Payment[] = [

    new CreditCard(),
    new UPI(),
    new NetBanking()

];

// Loop through each payment object
for (const payment of payments) {

    payment.pay();

}