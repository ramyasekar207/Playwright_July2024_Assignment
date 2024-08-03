/**
Assignment Requirements: 
1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative 
integer, and returns the nth Fibonacci number. 
2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two 
Fibonacci numbers and update these iteratively up to `n`. 
3. Provide example calls to the `fibonacci` function with different integers to demonstrate the 
 */


fibonacci(6);

function fibonacci(num:number) {
    let a:number=0;
    let b:number=1; 
    let total:number=0;
    let arr = new Array();
    if(num<0){
        console.error("Please enter the Positive number");
    }
    else{
    for (let i = 1; i <= num; i++) {  
        total = a+b;//0+1=1
        a=b;//a=1
        b=total;   //b=1
        arr.push(total); // Store it in Array
    }
    console.log(`Array : ${arr}`);
}   
}

