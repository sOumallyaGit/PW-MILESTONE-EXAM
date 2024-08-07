function removeDuplicates(cart) {
    let uniqueCart = [...new Set(cart)];
    return uniqueCart;
  }
  
  // Example usage
  let cart = ["apple", "banana", "apple", "orange", "banana"];
  console.log(removeDuplicates(cart)); // ["apple", "banana", "orange"]
  