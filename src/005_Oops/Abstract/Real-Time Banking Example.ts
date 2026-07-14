
// 🏦= Abstract Class Example — Banking System (with User Data)


// Abstract base class — hides implementation details
abstract class BankAccount {
  protected accountHolder: string;
  protected balance: number;

  constructor(accountHolder: string, initialBalance: number) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  // Abstract method (must be implemented by subclasses)
  abstract calculateInterest(): number;

  // Common method (shared by all account types)
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`💰 ${this.accountHolder} deposited ₹${amount}. Current Balance: ₹${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log(`⚠️ ${this.accountHolder}, insufficient balance!`);
      return;
    }
    this.balance -= amount;
    console.log(`💸 ${this.accountHolder} withdrew ₹${amount}. Remaining Balance: ₹${this.balance}`);
  }

  getBalance(): number {
    return this.balance;
  }

  getUserInfo(): void {
    console.log(`👤 Account Holder: ${this.accountHolder}`);
    console.log(`💼 Current Balance: ₹${this.balance}`);
  }
}


// 💼 Savings Account

class SavingsAccount extends BankAccount {
  private interestRate: number = 4; // 4% interest

  calculateInterest(): number {
    const interest = (this.balance * this.interestRate) / 100;
    console.log(`📈 ${this.accountHolder}'s Savings Interest: ₹${interest}`);
    return interest;
  }
}


// 🏧 Current Account

class CurrentAccount extends BankAccount {
  private overdraftLimit: number = 5000;

  calculateInterest(): number {
    console.log(`ℹ️ ${this.accountHolder}'s Current Account has no interest.`);
    return 0;
  }

  withdraw(amount: number): void {
    if (amount > this.balance + this.overdraftLimit) {
      console.log(`⚠️ ${this.accountHolder}, withdrawal exceeds overdraft limit!`);
      return;
    }
    this.balance -= amount;
    console.log(`💸 ${this.accountHolder} withdrew ₹${amount}. Remaining Balance: ₹${this.balance}`);
  }
}


// 🧠 Bank System Functions


// Function to create account dynamically
function createAccount(type: string, name: string, initialBalance: number): BankAccount {
  if (type.toLowerCase() === "savings") {
    return new SavingsAccount(name, initialBalance);
  } else if (type.toLowerCase() === "current") {
    return new CurrentAccount(name, initialBalance);
  } else {
    throw new Error("❌ Invalid account type!");
  }
}

// Function to simulate user actions
function simulateUserActions() {
  // Simulated user input (you can replace this with prompt() in a real app)
  const users = [
    { type: "savings", name: "Giri", balance: 10000 },
    { type: "current", name: "Arun", balance: 5000 },
  ];

  users.forEach((user) => {
    console.log("\n==============================");
    console.log(`🏦 Welcome, ${user.name}! Creating your ${user.type} account...`);
    const account = createAccount(user.type, user.name, user.balance);

    account.getUserInfo();

    // User actions
    account.deposit(2000);
    account.withdraw(3000);
    account.calculateInterest();
    console.log(`✅ Final Balance for ${user.name}: ₹${account.getBalance()}`);
  });
}


// 🚀 Run Simulation

simulateUserActions();
