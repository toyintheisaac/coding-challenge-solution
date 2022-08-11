
// having the function CamelCase(str) take the str parameter being passed and return the string with the first letter of each word capitalized (excluding the first letter). The string will be lower cased except for the first letter of each word.

function camelCase(str){
        // using REGEXP, filter out non alphanumeric letter and replace with a space
        // trim the space from whitespaces and split to an array;
    let newStr= str.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase().trim().split(' ');
    let str2 = '';
    
    for(let i=0;i<newStr.length;i++){
            // filter out empty array due to extra spaces
        if(newStr[i]!=' ' && newStr[i] !=''){
            // concatenate the first array to the str2
            if(i==0){
                str2 += newStr[i];
            }else{
                // select the first character  
                let lower = newStr[i].charAt(0);
                // convert the first character to Uppercase
                let upper = newStr[i].charAt(0).toUpperCase();
                // replace with lower to upper and concatenate to str2
                str2 += newStr[i].replace(lower, upper); 
            }
        }
    }
    return str2;
}
console.log(camelCase("tTHis iS a sSTRing"));
console.log(camelCase("THIs -&^$iS a   5^stRINHg"));
console.log(camelCase("  TpaceTHIs -&^$iS a  &%$ 5^stRINHg"));

console.log();

function camelCase2(str){
    let newStr= str.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase().trim().split(' ');
    let str2 = [];
 
    for(let i=0;i<newStr.length;i++){  
        if(i==0 && newStr[i]!=''){
            str2.push(newStr[i]);
        }else{
            if(newStr[i] !='' ){
                let cap = newStr[i][0].toUpperCase()+newStr[i].slice(1);
                str2.push(cap);
           }else{
               str2.push(newStr[i]);
           }
        }
    }
    return str2.join('');
}

console.log(camelCase2("tTHis iS a sSTRing"));
console.log(camelCase2("THIs -&^$iS a   5^stRINHg"));
console.log(camelCase2("  TpaceTHIs -&^$iS a   5^stRINHg"));