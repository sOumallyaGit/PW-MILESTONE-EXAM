const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    return ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(2);
  };
  
  // Example usage
  const originalPrice = 1000;
  const discountedPrice = 800;
  console.log(`Discount Percentage: ${calculateDiscountPercentage(originalPrice, discountedPrice)}%`); // Discount Percentage: 20.00%
  