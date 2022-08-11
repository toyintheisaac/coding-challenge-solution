// largestFour Challenge
// Write a function that takes an array of numbers and returns the largest four numbers in the array.
 
function largestFour(arr){
  //  let sum = 0;
    // Sort the array in descending order and slice the first 4
    let newArr = arr.sort(function(a,b){
        return b-a;
    }).slice(0,4);
    // sum the array together using reduce method
    let sum = newArr.reduce((accumulator, currentValue)=> accumulator +currentValue );
        return sum;
} 

console.log(largestFour([10,5,2,4,6,4,-1,9,2,8,4]));
console.log(largestFour([10,50,2,4,6,4,-1,9,2,8,4,1,2,3,4,5,6,7,8,9,10]));
console.log(largestFour([24,34,45,4,60,4,46,9,2,8,50]));