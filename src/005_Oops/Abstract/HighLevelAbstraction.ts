// ADVANCED ABSTRACTION — ENTERPRISE BANK SYSTEM


// INTERFACES — Defining contracts for core behaviors

interface IAccountOperations {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  transfer(target: BankAccount, amount: number): void;
  showDetails(): void;
}

interface IRepository<T> {
  save(entity: T): void;
  findById(id: string): T | null;
  findAll(): T[];
}

// ABSTRACT CLASS — Core structure for all accounts

abstract class BankAccountBase implements IAccountOperations {
  protected balance: number;
  protected readonly id: string;
  private transactions: string[] = [];

  constructor(
    protected holderName: string,
    initialBalance: number,
    protected accountType: string
  ) {
    this.id = crypto.randomUUID();
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  transfer(target: BankAccountBase, amount: number): void {
    if (amount <= 0) throw new Error("Transfer amount must be positive");
    if (amount > this.balance) throw new Error("Insufficient funds for transfer");

    this.balance -= amount;
    target.deposit(amount);
    this.logTransaction(`Transferred ₹${amount} to ${target.holderName}`);
  }

  protected logTransaction(details: string): void {
    const time = new Date().toLocaleString();
    this.transactions.push(`${time} — ${details}`);
  }

  showDetails(): void {
    console.log(
      `ID: ${this.id}\n👤 Holder: ${this.holderName}\n🏦 Type: ${this.accountType}\n💰 Balance: ₹${this.balance}\n`
    );
  }

  getId(): string {
    return this.id;
  }

  showTransactions(): void {
    console.log(`Transaction History for ${this.holderName}:`);
    this.transactions.forEach((t) => console.log("  •", t));
  }
}


// DERIVED CLASSES — Specialized Implementations


class SavingsAccount extends BankAccountBase {
  private interestRate = 4;

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("⚠️ Deposit must be positive");
    this.balance += amount;
    this.logTransaction(`Deposited ₹${amount}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) throw new Error(" Insufficient funds in Savings");
    this.balance -= amount;
    this.logTransaction(`Withdrew ₹${amount}`);
  }

  applyInterest(): void {
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
    this.logTransaction(`Interest ₹${interest.toFixed(2)} applied`);
  }
}

class CurrentAccount extends BankAccountBase {
  private overdraftLimit = 10000;

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("⚠️ Deposit must be positive");
    this.balance += amount;
    this.logTransaction(`Deposited ₹${amount}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance + this.overdraftLimit)
      throw new Error("🚫 Overdraft limit exceeded!");
    this.balance -= amount;
    this.logTransaction(`Withdrew ₹${amount}`);
  }
}

class BusinessAccount extends BankAccountBase {
  private transactionFee = 1.5; // %

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("⚠️ Deposit must be positive");
    this.balance += amount - (amount * this.transactionFee) / 100;
    this.logTransaction(`Deposited ₹${amount} (Fee ${this.transactionFee}%)`);
  }

  withdraw(amount: number): void {
    const total = amount + (amount * this.transactionFee) / 100;
    if (total > this.balance) throw new Error("Insufficient funds (after fee)");
    this.balance -= total;
    this.logTransaction(`Withdrew ₹${amount} (Fee ${this.transactionFee}%)`);
  }
}


// REPOSITORY LAYER — Abstracting data persistence


class InMemoryRepository<T extends { getId(): string }> implements IRepository<T> {
  private store = new Map<string, T>();

  save(entity: T): void {
    this.store.set(entity.getId(), entity);
  }

  findById(id: string): T | null {
    return this.store.get(id) || null;
  }

  findAll(): T[] {
    return Array.from(this.store.values());
  }
}


//  FACTORY PATTERN — Abstracting object creation


abstract class AccountFactory {
  abstract createAccount(holder: string, balance: number): BankAccountBase;
}

class SavingsFactory extends AccountFactory {
  createAccount(holder: string, balance: number): BankAccountBase {
    return new SavingsAccount(holder, balance, "Savings");
  }
}

class CurrentFactory extends AccountFactory {
  createAccount(holder: string, balance: number): BankAccountBase {
    return new CurrentAccount(holder, balance, "Current");
  }
}

class BusinessFactory extends AccountFactory {
  createAccount(holder: string, balance: number): BankAccountBase {
    return new BusinessAccount(holder, balance, "Business");
  }
}


//  SERVICE LAYER — Business Logic using abstraction


class BankService {
  constructor(private repo: IRepository<BankAccountBase>) {}

  openAccount(factory: AccountFactory, holder: string, balance: number): BankAccountBase {
    const acc = factory.createAccount(holder, balance);
    this.repo.save(acc);
    console.log(` Account opened for ${holder} (${acc.constructor.name})`);
    return acc;
  }

  transferFunds(senderId: string, receiverId: string, amount: number): void {
    const sender = this.repo.findById(senderId);
    const receiver = this.repo.findById(receiverId);

    if (!sender || !receiver) throw new Error(" Account not found!");
    sender.transfer(receiver, amount);
  }

  showAllAccounts(): void {
    console.log(" All Registered Accounts:");
    this.repo.findAll().forEach((a) => a.showDetails());
  }
}


//  EXECUTION / TESTING


const repo = new InMemoryRepository<BankAccountBase>();
const bankService = new BankService(repo);

// Factories
const savingsFactory = new SavingsFactory();
const currentFactory = new CurrentFactory();
const businessFactory = new BusinessFactory();

// Create accounts
const acc1 = bankService.openAccount(savingsFactory, "Sapthagiri", 20000);
const acc2 = bankService.openAccount(currentFactory, "Arjun", 15000);
const acc3 = bankService.openAccount(businessFactory, "Ravi", 30000);

// Perform operations
acc1.deposit(5000);
if (acc1 instanceof SavingsAccount) {
  acc1.applyInterest();
}

acc2.withdraw(5000);
acc3.withdraw(10000);
acc3.deposit(7000);

bankService.transferFunds(acc1.getId(), acc2.getId(), 4000);

bankService.showAllAccounts();

acc1.showTransactions();
acc2.showTransactions();
acc3.showTransactions();
