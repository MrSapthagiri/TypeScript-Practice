class Bank_Account {
    private balance: number = 600;

    public deposit(amount: number): void {
        this.balance += amount;   // 600 +100 = 700
        console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    }

    public withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    public getBalance(): number {
    return this.balance;
}

}

const account = new Bank_Account();
account.deposit(100);
account.withdraw(50000);
console.log(`Current balance: ${account.getBalance()}`);
