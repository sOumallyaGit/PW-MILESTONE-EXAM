function countVowels(name) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of name) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    console.log("Number of vowels:", count);
  }
  
  // Example usage
  countVowels("Jonathan"); // Number of vowels: 3
  countVowels("Alice");    // Number of vowels: 2
  