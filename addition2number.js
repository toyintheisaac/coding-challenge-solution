/* having the function TwoSum(arr) take the array of integers stored in arr, and determined if any two numbers (excluding the first element) in the array can sum up to the first element in the array.
eg [7,3,5,2,-4,8,11} the answer is [5,2] and [-4,11]
 */

function TwoSum(arr){
    let sum = []; 
    // loop through the array in rows
    for(let i=1;i<arr.length;i++){
    // loop through the array in column starting from the second value the the first column
        for(j=i+1; j<arr.length;j++){
    // if the sum of the two values is equal to the first value then push the values to the sum array
            if(arr[i]+arr[j]===arr[0]){
                sum.push([arr[i], arr[j]].join());
            }
        }
    }
    return sum;
}
 console.log(TwoSum([10,5,2,4,6,4,-1,9,2,8,4]));
 console.log(TwoSum([20,5,15,4,10,3,25,9,-5,8,17]));
 

function TwoSum2(arr){
    // get the first index
    let first = arr[0];
    // remove the first index from the array
        arr.splice(0,1);
    let sum = [];
    // loop through the array in rows
    for(let i=0;i<arr.length;i++){
        // loop through the array in column starting from the second value the the first column
        for(j=i+1; j<arr.length;j++){
            // if the sum of the two values is equal to the first value then push the values to the sum array 
            if(arr[i]+arr[j]===first){
                sum.push([arr[i], arr[j]].join());
            }
        }
    }
    return sum;
}
 console.log(TwoSum2([10,5,2,4,6,4,-1,9,2,8,4]));
 console.log(TwoSum2([20,5,15,4,10,3,25,9,-5,8,17]));
 