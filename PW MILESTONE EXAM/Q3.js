function mixColors(color1, color2) {
    let resultColor;
    switch (true) {
      case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
        resultColor = "purple";
        break;
      case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
        resultColor = "orange";
        break;
      case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
        resultColor = "green";
        break;
      default:
        resultColor = "Invalid color combination";
    }
    console.log(resultColor);
  }
  
  // Example usage
  mixColors("red", "blue");    // purple
  mixColors("red", "yellow");  // orange
  mixColors("blue", "yellow"); // green
  mixColors("blue", "green");  // Invalid color combination
  