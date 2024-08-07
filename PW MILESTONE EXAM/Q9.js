function printInvertedTriangle(rows) {
    for (let i = rows; i > 0; i--) {
      console.log('*'.repeat(i));
    }
  }
  
  // Example usage
  printInvertedTriangle(6);
  /*
  ******
  *****
  ****
  ***
  **
  *
  */
  