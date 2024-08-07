const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  };
  
  // Example usage
  const cart = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 200, quantity: 1 },
    { unitPrice: 150, quantity: 3 }
  ];
  console.log(`Total Order Price: Rs. ${calculateTotalCost(cart)}`); // Total Order Price: Rs. 850
  