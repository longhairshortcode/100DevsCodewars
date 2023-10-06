//CODEWARS FOR 100DEVS CLASSES!!


//Class 36 - 9/26/23

//Task (7kyu)
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

//Answer
function stray(numbers) {
    for(let i = 0; i < numbers.length; i++)
      if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){
        return numbers[i];
      }
   }


// someone else's answer I get now

function strayDos = nums => nums.reduce((a, b) => a ^ b);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Class 36 - 9/26/23 

//Task (8kyu)
//     Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.



//Answer

function twiceAsOld(dad, son){
    return Math.abs(dad - son * 2);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Class 36 - 9/26/23 

//Task (8kyu)
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


//Answer
function testEven(n) {
    return n % 2 === 0
   }


//Class 36 - 9/27/23 
//Task (8kyu)

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//Answer:

let isItNeg = num => num < 0 ? num : num * -1





//Class 36 - 9/27/23 
//Task (8kyu)

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


//Answer

function between(a, b) {
  let theArr = []
  for (let i = a; i <= b; i++){
  theArr.push(i)
} return theArr;
}



//Task
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//Answer

const reverseSeq = n => {
  let myArr = []
  for (let i = n; i > 0; i--){
    myArr.push(i)
  }
  return myArr;
}

//class 37
//sept 28 2023

//task
//Timmy & Sarah think they are in love, but around where they live, 
//they will only know once they pick a flower each. If one of the 
//flowers has an even number of petals and the other has an odd 
//number of petals it means they are in love.

//Write a function that will take the number of petals of each 
//flower and return true if they are in love and false if they aren't.

//myanswer

function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 !== 0){
    return true;
  }else if (flower2 % 2 === 0 && flower1 % 2 !== 0){
    return true;
  }else{
    return false;
  }
  }

  // someone else's code that I get:

  function lovefunc(flower, flowerSecond){
    return flower % 2 !== flowerSecond % 2;
  }

  // s1 elses that  I get, very creative!
  function lovefunc(flower, flower2){
    return (flower + flower2) % 2 === 1
  }

  //Class 38 10/2

  //Task:
//   Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.


//Answer:

function past(h, m, s){
  let result = 0
  let hToMi = h * 60 * 60000
  let mToMi = m * 60000
  let sToMi = s * 1000
  results = hToMi + mToMi + sToMi
    return results 
  }


//Class 38 10/3

//Task:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the 

// same backwards as forwards, such as madam or racecar.
//Answer:

function isPalidrome(x){
  let xLower = x.toLowerCase()
  let xReverse = xLower.split("").reverse().join("")
  return xLower === xReverse
}


//Class 38 10/3

//Task:
//Create a function that takes 2 integers in form of a string as an input, 
//and outputs the sum (also as a string):

//Answer:
function sumStr(a,b) {
  return (Number(a) + Number(b)).toString()
  }


//Class 39 10/5

//Task:
//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels 
//from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a 
//new string with all vowels removed. For example, the string "This website 
//is for losers LOL!" would become "Ths wbst s fr lsrs LL!". Note: for this kata y isn't considered a vowel.

// My Answer:
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '')
}

//Other answer from ChatGPT that I studied / get
function disemvowel(str) {
  let vowels = 'aeiouAEIOU'
  let splitStr = str.split('')
  let filteredStr = splitStr.filter(char => vowels.indexOf(char) === -1)
  return filteredStr.join('')
 }

 //edit from above
function disemvowel(str) {
  let vowels = 'aeiouAEIOU'
  let splitAnddFilter = str.split('').filter(char => vowels.indexOf(char) === -1)
  return splitAndFilter.join('')
 }

//Class 38 10/6 friday

//Redo Answer from yesterday's last one:
function disemvowel(str) {
  let vowels = 'AEIOUaeiou'
  let strArr = str.split('')
  let result = strArr.filter(char => vowels.indexOf(char) === -1)
  return result.join('')
}

//Task
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) 
// and After Earth (2013). Jaden is also known for some of his philosophy that he delivers 
// via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
// For simplicity, you'll have to capitalize each word, check out how contractions are expected 
// to be in the example below. Your task is to convert strings to how they would be written by 
// Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in 
// the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//Answer:

String.prototype.toJadenCase = function () {
  // Split the string into words
  let splitStr = this.split(' ')
  
  // Capitalize the first letter of each word and make the rest lowercase
  let strCap = splitStr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  
   // Join the words back together with spaces
  let result = strCap.join(' ')
  return result
}