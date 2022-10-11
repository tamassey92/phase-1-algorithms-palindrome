function isPalindrome(word) {
  var ccount = 0; 
  if(word === "") {
    return false;
  }
if ((word.length) % 2 === 0) {
  ccount = (word.length) / 2;
} else {
  if (word.length === 1) {
return true;
  } else {
    ccount = (word.length - 1) / 2;
  }
}
for (var x = 0; x < ccount; x++) {
  if (word[x] != word.slice(-1-x)[0]) {
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
