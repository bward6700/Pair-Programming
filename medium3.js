// Write a function that takes in two numbers and determines the largest positive integer that divides the two 
// numbers without a remainder. 



function divide(a,b){
    let c=a%b;
    while(c!=0){
        a=b;
        b=c;
        c=a%b;
    }
    return b;
}

console.log(divide(196,12));