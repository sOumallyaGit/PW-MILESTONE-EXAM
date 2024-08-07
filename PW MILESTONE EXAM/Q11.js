function correctCartQuantities(cart) {
    return cart.map(quantity => quantity * 2);
  }
  
  // Example usage
  let cartQuantities = [1, 2, 3, 4];
  console.log(correctCartQuantities(cartQuantities)); // [2, 4, 6, 8]
  