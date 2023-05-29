function isPalindrome(word) {
  // Write your algorithm here
  const wordToLower = word.toLowerCase();
  const reversedOrder = wordToLower.split("").reverse().join("");
  console.log(wordToLower)
  console.log(reversedOrder)
  return wordToLower === reversedOrder
  
}

/* 
  Add your pseudocode here
  first we need to take the word and parse it all to lower case, then
  split the string into its component letters, then
  reversed the order of the letters on the string, then
  consolidated each letter back into 1 string, then
  check for palindrome ===
*/

/*
  Add written explanation of your solution here
First we create a constant that parses the arg to lower case using .ToLowerCase
then we create a separate constant that will utilized the lowercased arg and will .split
the string into its component letters by leaving the function argument blank. 
then we reversed the order of the letters by using the function .reverse 
and then combined them back together using function .join

at the end we check for palindrome by comparing wordToLower === reversedOrder


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
