function findHighestMarks(marks) {
    let highestMarks = marks[0];
    for (let i = 1; i < marks.length; i++) {
      highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }
    console.log("Highest Marks:", highestMarks);
  }
  
  // Example usage
  let marks = [85, 92, 78, 90, 88];
  findHighestMarks(marks); // Highest Marks: 92
  