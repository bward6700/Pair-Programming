// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
// numbers.

function OddnEven (numbers){
    const odd = numbers.filter((number) => number % 2 === 1);

    const even = numbers.filter((number) => number % 2 === 0);

    returnObject = {
        odd,
        even,

    };

    return returnObject;
}

console.log(OddnEven([1,2,3,4,5,6,7,8]));