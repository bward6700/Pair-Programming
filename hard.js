// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of
// matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True
// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False

function validBraces(braces) {

    let parenCount = 0;
    let squareBracketCount = 0;
    let curlyBraceCount = 0;
  
      for (let i =0; i < braces.length; i++) {
        let character = braces[i];
          if (character === "(") {
            parenCount -= 1;
            }
          if (character === ")") {
            parenCount += 1;
            }
          if (character === "[") {
            squareBracketCount -= 1;
            }
          if (character === "]") {
            squareBracketCount += 1;
          }
          if (character === "{") {
            curlyBraceCount -= 1;
          }
          if (character === "}") {
            curlyBraceCount += 1;
          }
        }
        if (parenCount === 0 && squareBracketCount === 0 && curlyBraceCount === 0) {
          return true;
        } 
        else {
          return false;
        }
  }


  console.log(validBraces("(Hello)"))