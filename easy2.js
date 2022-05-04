// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example 1:                                                                                                                                       
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

numArray = [1,2,3,4,5,6,7,8,9,10]
 numArray2 = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
 let result =[];
 let result2 =[];
function isPrime(numArray) {
    for (let i = 2; i * i <= numArray; i++)
        if (numArray % i === 0)
          return false; 
    return numArray > 1;
}
numArray.forEach(function (element) {
    const item = isPrime(element);
    if (item) {
      result.push(element);
    }
  });

  function isPrime(numArray2) {
    for (let i = 2; i * i <= numArray2; i++)
        if (numArray2 % i === 0)
          return false; 
    return numArray2 > 1;
}
numArray2.forEach(function (element) {
    const item = isPrime(element);
    if (item) {
      result2.push(element);
    }
  });
  
console.log ("result Output:  result2 Output: ")
console.log(result,result2)