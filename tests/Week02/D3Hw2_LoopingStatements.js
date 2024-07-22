/**
 * Assignment Requirements:  
 1. Create a function - print odd numbers (from 1 to 25) and execute in debug mode 
 2. Call that function from the javascript
 */

 function printOddNumber()
 {
    for(i=0; i<=25; i++) {
    if(i%2!=0)
    {
        console.log(`${i} : is odd Number`);
    }
}
 }

 printOddNumber();