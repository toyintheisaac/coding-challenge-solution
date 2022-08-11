// Have the function MissingDigit(str) take the str parameter, which will be a simple mathematical expression containing +, -, /, and * and at least one digit, and return the missing digit. For example: if str is "2x + 3" then your program should return the number 5. The expression will contain only one digit and one operator. The operators will always be either +, -, /, or *.
 


function MissingDigit(str) {
        // split the equation into array
    let arr = str.split(' '); 
    let first = arr[0];
    let operator = arr[1];
    let second = arr[2];
    let result = arr[arr.length-1];
    
    let missing = 0; 
    let newVal = 0;
    if(first.indexOf('x') !== -1){
        second = Number(second);
        result = Number(result);

        for(let i=0;i<first.length;i++){
            if(first[i] === 'x'){
                for(let j=0;j<10;j++){
                    missing = first.replace('x', j);
                    missing = Number(missing);
                    if(operator =='*'){
                        if(missing * second == result){ newVal = j; break;}
                    }else if(operator=='-'){
                        if(missing - second == result){  newVal = j; break;}
                    }else if(operator=='+'){
                        if(missing + second == result){  newVal = j; break;}
                    }else{
                        if(missing / second == result){
                            newVal = j;
                            break;
                        }
                    }
                }
            }
        }

    }else if(second.indexOf('x') !== -1){
        first = Number(first);
        result = Number(result);

        for(let i=0;i<second.length;i++){
            if(second[i] === 'x'){
                for(let j=0;j<10;j++){
                    missing = second.replace('x', j);
                    missing = Number(missing); 
                        if(operator =='*'){
                            if(first * missing == result){ newVal = j; break;}
                        }else if(operator=='-'){
                            if(first - missing == result){  newVal = j; break;}
                        }else if(operator=='+'){
                            if(first + missing == result){  newVal = j; break;}
                        }else{
                            if(first / missing == result){
                                newVal = j;
                                break;
                            }
                        }
                }
            }
        }

    }else if(result.indexOf('x') !== -1){
        first = Number(first);
        second = Number(second);

            for(let i=0;i<result.length;i++){
                if(result[i] === 'x'){
                    for(let j=0;j<10;j++){
                        missing = result.replace('x', j);
                        missing = Number(missing);
                            if(operator =='*'){
                                if(first * second == missing){ newVal = j; break;}
                            }else if(operator=='-'){
                                if(first - second == missing){  newVal = j; break;}
                            }else if(operator=='+'){
                                if(first + second == missing){  newVal = j; break;}
                            }else{
                                if(first / second == missing){
                                    newVal = j;
                                    break;
                                }
                            }
                    }
                }
            } 
    }

    return newVal;
}

console.log(MissingDigit('4x0 + 3 = 433')) // 3
console.log(MissingDigit('4 - 2 = x')) //2
console.log(MissingDigit('5 * x = 25')) // 5
console.log(MissingDigit('2 + 3x = 33')) //1
console.log(MissingDigit('230 / 2x = 10')) // 3
console.log(MissingDigit('50 / 1x = 5')) // 3