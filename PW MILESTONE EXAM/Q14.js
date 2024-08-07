function splitBill(costs, numberOfPeople) {
    const totalBill = costs.reduce((total, cost) => total + cost, 0);
    const billPerPerson = totalBill / numberOfPeople;
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  
  // Example usage
  const costs = [200, 300, 150, 350];
  const numberOfPeople = 4;
  const result = splitBill(costs, numberOfPeople);
  console.log(`Total Bill: Rs. ${result.totalBill}`); // Total Bill: Rs. 1000
  console.log(`Bill per Person: Rs. ${result.billPerPerson}`); // Bill per Person: Rs. 250
  