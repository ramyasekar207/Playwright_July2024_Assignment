
/**
 * Write a function to reverse the string. 
1. Convert the input into characters 
2. Loop them in reverse direction 
3. Concatenate the string 
4. Print the new string 
Write a function to check the given string is a palindrome 
[If the given string and reverse string are the same, it is a palindrome] 
1. Check if the reverse string and original string are the same 
 2. Return true if same, else the false.
 */

 function reverse(fname)
 {
    let temp = fname.split("");
    console.log(temp);
    let size = fname.length;
    let reversedValue = "";
    for(i=size-1;i>=0;i--)
    {
        reversedValue = reversedValue + fname[i];
    }
    return reversedValue;
 }

 function palindrome(fname)
 {
    let reversedValue = reverse(fname);
    if(reversedValue === fname)
    {
        console.log(`The given string is palindrome : ${reversedValue===fname}`);
    }
    else
    console.log(`Not Palindrome`);
 }

let fname = "civic"
palindrome(fname)
fname = "Diya"
palindrome(fname)

