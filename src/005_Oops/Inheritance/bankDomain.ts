class BankAccount {

    public accountHolder: string;
    protected accountNumber: number;
    protected balance: number;


    constructor(accountHolder: string, accountNumber: number, balance: number) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }


    displayAccountDetails(){
        console.log("Account Holder:" ,this.accountHolder);
        console.log("Account Number:" ,this.accountNumber);
        console.log("Balance:" ,this.balance);
    }
}


class SavingsAccount extends BankAccount {

    interestRate: number;

    constructor(accountHolder: string, accountNumber: number, balance: number, interestRate: number) {
        super(accountHolder, accountNumber, balance);
        this.interestRate = interestRate;
    }


displaySavingDetails(){
    console.log("Account Holder:" ,this.accountHolder);
    console.log("Account Number:" ,this.accountNumber);
    console.log("Balance:" ,this.balance);
    console.log("Interest Rate:" ,this.interestRate + "%");
    }
}


const saving = new SavingsAccount("John Doe", 123456789, 10000, 5);

saving.displayAccountDetails();

console.log ("_________________________________")
saving.displaySavingDetails();