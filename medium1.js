// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input 
// is a vowel

let vowelChecker = function(letter) {

    let vowels = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < vowels.length; i++){ 
        if(letter === vowels[i]){
            return "This is a Vowel.";
         }
         else {
             return "This is not a Vowel.";
         }
    }

};

console.log(vowelChecker("a"));




