/**
 * 
1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer, 
and returns its factorial. 
2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative 
number is passed, the function should throw an error. 
3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer 
from 2 up to `n`. 
4. Include example calls to the `factorial` function with different integers to demonstrate the 
function’s functionality. Include at least one example where an error is thrown due to a negative 
input.
 */


factorial(5);
factorial(0);
factorial(-1);
factorial(2.2);

function factorial(num:number) {
    let count = 1;
    if(num<0)
    {
        console.error(`Given Value is negative`);
        
    }
    else
    {        
        let deci = num.toString().split(".").length;
        if(deci>1)
        {
            console.error(`Please provide a whole number`);
        }
        else { 
        for (let index = 1; index <= num; index++) {
            
          count *= index;  
        }
        console.log(`Factorial of the given number is : ${count}`);}
        
    }
}


