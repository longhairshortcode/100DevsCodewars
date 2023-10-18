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

//Task Class 38 Fri 10/6   8kytu
//Create a function finalGrade, which calculates the final grade of a student depending 
//on two parameters: a grade for the exam and a number of completed projects. This function 
//should take two arguments: exam - grade for exam (from 0 to 100); projects - number of 
//completed projects (from 0 and above); This function should return a number (final grade). 
//There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

//Answer
function finalGrade (exam, projects) {
  let final = 0
  if (exam > 90 || projects > 10){
    final = 100
  }else if (exam > 75 && projects >= 5){
    final = 90
  }else if (exam > 50 && projects >= 2){
    final = 75
   }else{
     final = 0
   }
  return final
}


//Class 38 10/7 CW

//Task
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
  //Correct Answer:

  function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3
      if (avg >= 90){
        return 'A';
      } else if (avg >= 80){
        return 'B';
      } else if (avg >= 70){
        return 'C';
      } else if (avg >= 60){
        return 'D';
      } else{
        return 'F';
    }
      }

// class 39 Monday 10/9

//task:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//answer:
const rps = (p1, p2) => {
  if (p1 === 'rock' && p2 === 'scissors'){
    return "Player 1 won!"
  }else if (p1 === 'paper' && p2 === 'rock'){
    return "Player 1 won!"
  }else if (p1 === "scissors" && p2 === 'paper'){
    return "Player 1 won!"
   }else if (p1 === p2 ){
    return "Draw!"
  }else{
    return "Player 2 won!"
  } 
  };
  

// second for 39 10/9
//task was written poorly so just answer
function square(num) {
  return num * num;
  }


  //third task:
  // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

  // Example
  // filter_list([1,2,'a','b']) == [1,2]
  // filter_list([1,'a','b',0,15]) == [1,0,15]
  // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

  //answer:
  function filter_list(l) {
    // Use the filter method to filter out non-number elements
    return l.filter(element => typeof element === 'number');
  }

  //task class 40 10/10
  //Make a function that will return a greeting statement that uses an input; 
  //your program should return, "Hello, <name> how are you doing today?".

  //answer
  function greet(name){
    return `Hello, ${name} how are you doing today?`
    }

  //task class 40 10/10
  
  //Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//answer
function hoopCount (n) {
  if(n >= 10){
    return "Great, now move on to tricks"
  }else{
    return "Keep at it until you get it"
  }    
  }

  // other answer I get
  function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }

  // class 44 10/11

  //task from right before this

//answer did it again but from memory
function hoopCount(n) {
  return n < 10 ? "Keep at it until you get it." : "Great, now move on to tricks."
}


//task class 40 10/11
//Complete the function that takes a non-negative integer n as input, 
//and returns a list of all the powers of 2 with the exponent ranging 
//from 0 to n ( inclusive ).

//answer
function powersOfTwo(n){
  let powers = []
  for (let i = 0; i <= n; i++){
    powers.push(2 ** i)
    }return powers;
  }


  //task class 40 10/11
  //Write a function that removes the spaces from the string, then return the resultant string.

  //answer:
  function noSpace(x){
    return x.replace(/\s/g, '');
    }

// task class 40 10/11
//Given a string of digits, you should replace any digit below 5 
//with '0' and any digit 5 and above with '1'. Return the resulting string.
//Note: input will never be an empty string

//answer:
function fakeBin(x){
  let results = ''
for (let i = 0; i < x.length; i++){
  if (parseInt(x[i]) < 5){
    results += '0';
  }else{
    results += '1';
  } 
}return results;
}

//Given a string of digits, you should replace any digit below 5 
//with '0' and any digit 5 and above with '1'. Return the resulting string.
//Note: input will never be an empty string

//other answer I learned:
function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//class 44 10/12
//task 
//Complete the solution so that it returns true if the first argument(string) passed in 
//ends with the 2nd argument (also a string).
//Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//answer
function solution(str, ending){
  return str.endsWith(ending);
}

//task
//Write a function that takes an array of numbers and returns 
//the sum of the numbers. The numbers can be negative or non-integer. 
//If the array does not contain any numbers then you should return 0.

//answer
// Sum Numbers
function sum (numbers) {
  if (numbers.length === 0){
    return 0
  }
 
 let sum = numbers.reduce((acc, cur) => acc + cur, 0)
 return sum;
};

//class 44 10/13
//task
// The museum of incredible dull things wants to get rid of some exhibitions. 
// Miriam, the interior architect, comes up with a plan to remove the most boring 
// exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important 
// fair, so she asks you to write a program that tells her the ratings of the items 
// after one removed the lowest one. Fair enough.
//Given an array of integers, remove the smallest value. Do not mutate the original 
//array/list. If there are multiple elements with the same value, remove the one with 
//a lower index. If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.


//Answer - from chatGPT, needed it and studied it, get it but advanced
function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  // Find the minimum value and its index
  let min = numbers[0];
  let minIndex = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
      minIndex = i;
    }
  }
  const result = [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
  return result;
}

//Rewrite it for practice, and did it all on my own basically:

function removeSmallest(numbers){
  if (numbers.length === 0){
    return [];
  }

  let min = numbers[0]
  let minIndex = 0
  for (let i = 1; i < numbers.length; i++){
    if (numbers[i] < min){
      min = numbers[i]
      minIndex = i
    }
  } const newNums = [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)]
  return newNums;
} 

// another solution from CW that I need to learn:
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

//trying above on my own for practice and I get it / could do it on my own
function removeSmallest(numbers){
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]
}


//task 3rd for 10/13

// answer
function invert(array) {
  if (array.length === 0){
    return [];
  }
  const inverseArr = array.map(num => -num)
  return inverseArr;
}

// task 1st for 10/14
//In this kata you will create a function that takes in a list and returns a list with the reverse order.

//answer:
function reverseList(list) {
  let rev = list.reverse();
    return rev;
  }

  //another answer from cw that I get and practiced
  function reverseList(list) {
    let revList = [];
      for (let i = list.length - 1; i >= 0; i--){
      revList.push(list[i]);    
      }return revList;
    }

    //class 44 cw for 10/14
    //task
    //Make a function that returns the value multiplied by 50 and increased 
    //by 6. If the value entered is a string it should return "Error".

    //answer -- got it on my own!
    function problem(x) {
      return typeof x === "string" ? "Error" : x * 50 + 6;
    }

    //class 44 for 10/14
    //task
    //Every day you rent the car costs $40. If you rent the car for 
    //7 or more days, you get $50 off your total. Alternatively, if 
    //you rent the car for 3 or more days, you get $20 off your total.
    //Write a code that gives out the total amount for different days(d).

    //answer
    function rentalCarCost(d) {
      if (d >= 7){
        return (d * 40) - 50;
      }else if (d >= 3){
        return (d * 40) - 20;
      }else if (d > 0){
        return d * 40;
      }
    }

    //class 44 10/15 
    //task 
    //Write a function which calculates the average of the numbers in 
    //a given list. Note: Empty arrays should return 0.

    //answer 
    function findAverage(array) {
      let arrayLen = array.length
      if (arrayLen === 0){
        return 0;
      } else{
      return array.reduce((acc, cur) => acc + cur, 0) / arrayLen;
    }
      }

  // class 44 10/15
  //task 
  //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
  //The output should be two capital letters with a dot separating them.
  //It should look like this:
  //Sam Harris => S.H 
  //patrick feeney => P.F

  //answer
  function abbrevName(name){
  let nameParts = name.split(' ');
  let firstNameInitial = nameParts[0][0];
  let lastNameInitial = nameParts[1][0];
    return `${firstNameInitial}.${lastNameInitial}`.toUpperCase();
  } 

  //redo the answer since I had to ask chatGPT
  function abbrevName(name){
    let nameParts = name.split(' ');
    let firstIntial = nameParts[0][0];
    let lastInitial = nameParts[0][1];
    let result = `${firstInitial}.${lastInitial}`.toUpperCase()
  }

  //shorter & easier read code for above
function abbrevName(name){
  let nameParts = name.split(' ');
  return (nameParts[0][0] + "." + nameParts[1][0]).toUpperCase; 
}

//class 45 10/16

//task
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//Answer I now get
function shortcut(input) {
  // Use a regular expression to match and remove lowercase vowels
  return input.replace(/[aeiou]/g, '');
}

function shortcut(input){
  return input.replace(/aeiou/g, "");
}

//task:
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
////Answer I kind of get but it is still a little hard and I should review:
function points(games) {
  let totalPoints = 0;

  for (let result of games) {
    const [x, y] = result.split(":").map(Number);

    if (x > y) {
      totalPoints += 3; // Win
    } else if (x === y) {
      totalPoints += 1; // Tie
    }
    // If x < y, no points are added (loss).
  }

  return totalPoints;
}

//redid it for practice
function points(games) {
  let total = 0
  for (let result of games){
    let [x, y] = result.split(":").map(Number)
    if (x > y){
      total += 3
    }else if (x === y) {
      total += 1
    }
  }
  return total
}

//task
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
//answer

//answer 
function isTriangle(a,b,c)
{
   return false;
}