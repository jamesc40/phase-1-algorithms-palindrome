
// function getReverse(word){

//   let reverse = '';

//   for(let i = word.length - 1; i >= 0; i--){
//     reverse += word.charAt(i);
//   }

//   return reverse;

// }

// function isPalindrome(word) {

//   if(word === word.split("").reverse().join("")){
//     return true;
//   } else {
//     return false;
//   }

  // let reverse = getReverse(word)

  // if(word === reverse){
  //   return true
  // } else {
  //   return false
  // }

// }

function isPalindrome(word){
  for(let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 - i;
    if (word[i] !== word[j]){
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  is Palindrome uses a function to reverse a word then checks if that word is equal to the word passed in as an argument
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
