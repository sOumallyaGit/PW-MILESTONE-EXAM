function calculateRentalCost(daysRented, carType) {
    let costPerDay;
    switch (carType.toLowerCase()) {
      case 'economy':
        costPerDay = 4000;
        break;
      case 'midsize':
        costPerDay = 10000;
        break;
      case 'luxury':
        costPerDay = 20000;
        break;
      default:
        console.log("Invalid car type");
        return;
    }
    return daysRented * costPerDay;
  }
  
  // Example usage
  let daysRented = 3;
  let carType = 'midsize';
  console.log(`Total rental cost for ${daysRented} days with a ${carType} car is Rs. ${calculateRentalCost(daysRented, carType)}`);
  // Total rental cost for 3 days with a midsize car is Rs. 30000
  