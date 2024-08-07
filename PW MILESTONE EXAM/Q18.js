const bankAccount = {
    name: 'John Doe',
    balance: 5000,
    deposit(amount) {
      this.balance += amount;
      return this.balance;
    },
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        return this.balance;
      } else {
        return 'Insufficient funds';
      }
    }
  };
  
  // Example usage
  console.log(`Balance after deposit: Rs. ${bankAccount.deposit(2000)}`); // Balance after deposit: Rs. 7000
  console.log(`Balance after withdrawal: Rs. ${bankAccount.withdraw(3000)}`); // Balance after withdrawal: Rs. 4000
  console.log(`Attempted withdrawal: ${bankAccount.withdraw(5000)}`); // Attempted withdrawal: Insufficient funds
  