/** 
 * Assignment Details:  
Given a string s consisting of words and spaces, return the length of the last word in the string. 
Example 1: 
Input: s = "Hello World" 
Output: 5 
 * Explanation: The last word is "World" with length 5. */

//Scenario 1 : Length of the word present after the space
let stringValue = "Hello Testing";
let newValue = stringValue.split(" ");
console.log(`Last word is : ${newValue[newValue.length-1]}`);
console.log(`Length of the Last word after space : ${newValue[newValue.length-1].length}`);

/**
Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 
 */
stringValue = "   fly me   to   the moon  ";
newValue = stringValue.trim().split(" ");
console.log(`Last word is : ${newValue[newValue.length-1]}`);
console.log(`Length of '${newValue[newValue.length-1]}' is : ${newValue[newValue.length-1].length}`);


/**
 * Example 3:  
Write a function to check if two strings are anagrams. 
Input: isAnagram('listen', 'silent') 
Output: true 
Input: isAnagram('hello', 'world')  
Output: false 
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. 
 */

let param1 = "ramya"
let param2 = "yaram"
param1 = param1.split("").sort();
param2 = param2.split("").sort();

if(param1.length === param2.length)
{
for (let index = 0; index < param1.length; index++) {
    if(param1[index]!==param2[index]){
    console.log(`Its not an Anagram : ${param1} and ${param2}`);
    return false;
    }
    
}
console.log(`Its an Anagram : ${param1} and ${param2}`);
return true;
}
 
