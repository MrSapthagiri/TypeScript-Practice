interface PaymentGateway {
  pay(amount: number): void;
}

class PayPal implements PaymentGateway {
  pay(amount: number): void {
    console.log(`💰 Paying ${amount} using PayPal.`);
  }
}

class Stripe implements PaymentGateway {
  pay(amount: number): void {
    console.log(`💳 Paying ${amount} using Stripe.`);
  }
}

class Razorpay implements PaymentGateway {
  pay(amount: number): void {
    console.log(`🏦 Paying ₹${amount} using Razorpay.`);
  }
}

function processPayment(gateway: PaymentGateway, amount: number) {
  gateway.pay(amount);
}

// Polymorphism in action
const gateways: PaymentGateway[] = [
  new PayPal(),
  new Stripe(),
  new Razorpay()
];

for (const g of gateways) {
  processPayment(g, 1000);
}
