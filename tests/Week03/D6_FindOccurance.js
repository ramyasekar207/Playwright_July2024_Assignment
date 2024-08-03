/**
Assignment Details:  
Find the number of occurrences. 
Given the array, const nums = [2,4,5,2,1,2]; 
if const k = 2, then output >> 3 
 
Assignment Requirements:  
1. Initialize count to 0. 
2. Loop through the array `nums`. 
3. If the element equals `k`, increment count. 
4. Return the count of `k` in `nums`.
 */

const num = [5,8,7,8,7];
let count = 1;
let result = {};

for (let i = 0; i < num.length; i++) {
       
    if(!result[num[i]])
        result[num[i]] = 0;
    // ++result[num[i]];
    result[num[i]]++;
    
    
    
    // if(num.includes(num[i])){
    //     result[num[i]] = 1
    //     ++result[num[i]];
    //       }
    // else{
    //     result[num[i]] = 1;
    // }
    
}

console.log(result);

