// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
// second string by returning a boolean.

function Compare(anaOne, anaTwo){
    if (anaOne.length !== anaTwo.length) {
       return false
    }
  
   return anaOne.toLowerCase().split("").sort().join("") === anaTwo.toLowerCase().split("").sort().join("")
  }
  
  console.log(Compare("Friend", "Finder")) ;//true
  console.log(Compare("Dark", "Rock"))//false