function balanceBrackets(array) {
    // TODO: check for balanced brackets!
  }
  
  console.log("Test case 1:");
  console.log(balanceBrackets(["{", "}"]).toString());

  console.log("Test case 2:");
  console.log(balanceBrackets(["[", "(", "]", ")"]).toString());
  
  console.log("Test case 3:");
  console.log(balanceBrackets([]).toString());
  
  console.log("Test case 4:");
  console.log(balanceBrackets(["{", "[", "}"]).toString());
  
  console.log("Test case 5:");
  console.log(balanceBrackets(["]", "(", ")", "["]).toString());

  console.log("Test case 6:");
  console.log(balanceBrackets(["(", ")", "[", "(", "{", "}", ")", "]"]).toString());