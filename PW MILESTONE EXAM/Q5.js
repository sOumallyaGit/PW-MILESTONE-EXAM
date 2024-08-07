function capitalizeName(name) {
    let modifiedName = (name[0] === name[0].toLowerCase()) ? name[0].toUpperCase() + name.slice(1) : name;
    return modifiedName;
  }
  
  // Example usage
  console.log(capitalizeName("alice")); // Alice
  console.log(capitalizeName("Alice")); // Alice
  