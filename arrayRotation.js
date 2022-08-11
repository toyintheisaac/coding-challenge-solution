// have the function ArrayRotation(arr) take the arr parameter being passed which will be an array of non negative integer and circularly rotate the array starting from the Nth element where N is the first element in the array. for example if the input is [1,2,3,4,5] and N is 3 then your program should return [3,4,5,1,2].

function arrayRotation(arr){
        // get the first element of the array as a Number
    let firstIndex =  arr[0] ; // Number(arr.slice(0,1)); 
    let newArr = []
    let newArr2 = []
        // store the item starting from the firstIndex to the end in an array
    for(let i= firstIndex; i<arr.length;i++){  
        newArr.push(arr[i]);
    }
    // store the item starting from the 0 to the firstIndex array
    for(let i= 0; i<firstIndex;i++){
        newArr2.push(arr[i]);
    }
    
        // Concat the two array as one and convert to a string
        return newArr.concat(newArr2).join('');  
}


console.log(arrayRotation([2,3,4,1,6,10]));
console.log(arrayRotation([5,1,5,7,6,10,3]));
console.log(arrayRotation([4,3,4,1,6]));