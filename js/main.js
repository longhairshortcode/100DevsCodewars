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
function isTriangle(a,b,c){
  return (a + b > c && b + c > a && a + c > b )
}

//class 46 1st for 10/18
//task
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

//answer:
function peopleWithAgeDrink(old) {
  return old < 14 ? "drink toddy"
  : old < 18 ? "drink coke"
  : old < 21 ? "drink beer"
  : "drink whisky"
}

//task 2 for class 46 10/18
//In this game, the hero moves from left to right. 
//The player rolls the dice and moves the number of 
//spaces indicated by the dice two times. Create a function 
//for the terminal game that takes the current position of the 
//hero and the roll (1-6) and return the new position.

//answer
function move (position, roll) {
  return position + (roll * 2);
}

//answer
function move (position, roll) {
  return position + (roll * 2);
}

//first for class 46 10/19
//task
//Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest 
// element ( by value, not by index! ). The highest or lowest element respectively is a 
// single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given 
// array is an empty list or a list with only 1 element, return 0.

//answer
function sumArray(array) {
  if (array === null || array === undefined || array <= 1){
    return 0;
  }
    array.sort((a, b) => a - b).shift()
    array.pop()
    let total = array.reduce((acc, cur) => acc + cur, 0)
     return total;
  }
  
//task
// Who remembers back to their time in the schoolyard, when girls would take a flower and 
// tear its petals, saying each of the following phrases each time a petal was torn:
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" 
// for 8 petals and so on. When the last petal was torn there were cries of excitement, dreams, 
// surging thoughts and emotions. Your goal in this kata is to determine which phrase the girls 
// would say at the last petal for a flower of a given number of petals. The number of petals is
// always greater than 0.

//answer

  function howMuchILoveU(numOfPetals) {
    let phrases = [
      'I love you!',
    'a little bit',
    'a lot',
    'passionately',
    'madly',
    'not at all, sorry!!!',
    ] 
    
    return phrases[(numOfPetals - 1) % phrases.length]
}


//task 1 10/20
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//answer:
function basicOp(operation, value1, value2){
  if (operation === "+"){
      return value1 + value2;
      }else if (operation === "-"){
       return value1 - value2; 
      }else if (operation === "*"){
      return value1 * value2;
      }else if (operation === "/" ){
      } return value1 / value2;  
}


//task 2 10/20
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
//answer
function basicOp(operation, a, b){
  switch (operation){
      case "+":
      return a + b;
      break;
      case "-":
      return a - b;
      break;
      case "*":
      return a * b;
      break;
      case "/":
      return a / b;
      break;
  }
}

//task 3 10/20
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

//answer
function greet (name, owner) {
 return name === owner ? "Hello boss" : "Hello guest";
}

//task 4 10/20
//Bob needs a fast way to calculate the volume of a cuboid with three values: the length, 
//width and height of the cuboid. Write a function to help Bob with this calculation.

//answer got the answer minus the class & static which I don't get fully
class Kata {
  static getVolumeOfCuboid(l, w, h) {
    return l * w * h;
  }
};

//task 5 10/20
// You are given the length and width of a 4-sided polygon. The polygon can either be a 
// rectangle or a square. If it is a square, return its area. If it is a rectangle, return 
// its perimeter. Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and 
// width are equal, otherwise it is a rectangle.

//answer
const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : 2 * l + 2 * w;
}

//task 1 10/20 class 38 redo
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//answer
function doubleChar(str) {
  let results = "";
  for (let i = 0; i < str.length; i++){
    results += str[i] + str[i]
  }
  return results; 
}

//Another Answer from CW that I get 
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

//task 2 w multiple answers 10/21
//Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is 
//the number of hotdogs a customer will buy, different numbers have different prices (refer to 
//the following table), return how much money will the customer spend to buy that number of hotdogs.
//Answers I get
function saleHotdogs(n){
  if (n < 5){
    return n * 100
  }else if (n < 10){
    return n * 95
  } else if (n >= 10){
    return n * 90
  }
}

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}  

  
  function saleHotdogs(n){
  return (n < 5) ? (n * 100)
  : (n < 10) ? (n * 95)
  : (n >= 10) ? (n * 90)
}
  
//task 3 10/21
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

//Answer
//function addFive(num) {
  let total = num + 5
  return total
}

//task 4 10/21
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//answer
function noBoringZeros(n) {
  return +n.toString().replace(/0+$/, "");
}


//task 1 10/22
//In this simple exercise, you will build a program that takes a value, integer , 
//and returns a list of its multiples up to another value, limit . If limit is a 
//multiple of integer, it should be included as well. There will only ever be positive 
//integers passed into the function, not consisting of 0. The limit will always be 
//higher than the base. For example, if the parameters passed are (2, 6), the function 
//should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6
//answer

function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      result.push(i);
    }
  }
  return result;
}

//another CW answer that seems easier
function findMultiples(integer,limit){
  let result = []
  
  for (let i = integer; i<=limit ; i+=int)
    result.push(i)
    
  return result
}





//Task 3 10/22
//Given a random non-negative number, you have to return the digits of this
//number within an array in reverse order.

//Answer correct
function digitize(n) {
  let nStr = n.toString();
  let myArr = [];
  let reverseArr = nStr.split('').reverse();

  for (let i = 0; i < reverseArr.length; i++) {
    myArr.push(Number(reverseArr[i]));
  }

  return myArr;
}

//answer wrong that i got before above, review it!
function digitize(n) {
  let nStr = n.toString()
 let arr = []
 let reverseArr = n.reverse()
 for (let i = 0; i < reverseArr.length; i++)
 return arr.push(reverseArr[i]);
 }


 //task 1 10/25 Class 39
 Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.
//answer
function noBoringZeros(number) {
  return +number.toString().replace(/0+$/, '');
}
 

//other answer from cw that I get but need to review
function noBoringZeros(n) {
  // this checks that last number is zero and that n as a whole isn't 0
  while(n%10==0 && n!=0){
  // this removes the last 0   
    n/=10;}
  return n;
}


 //task 2 10/25 Class 39
//  Create a method to see whether the string is ALL CAPS.

//  Examples (input -> output)
//  "c" -> False
//  "C" -> True
//  "hello I AM DONALD" -> False
//  "HELLO I AM DONALD" -> True
//  "ACSKLDFJSgSKLDFJSKLDFJ" -> False
//  "ACSKLDFJSGSKLDFJSKLDFJ" -> True
//  In this Kata, a string is said to be in ALL CAPS 
//whenever it does not contain any lowercase letter so any string containing no 
//letters at all is trivially considered to be in ALL CAPS.

//answer
String.prototype.isUpperCase = function() {
  if (this.toString() === this.toUpperCase()){
    return true;
  }else{
    return false;
  }
 }


 //another answer 
 String.prototype.isUpperCase = function() {
  return this.toString() === this.toString().toUpperCase();
};

 //task 3 10/25 Class 39
 //You will be given an array and a limit value. You must check that all values in the array 
 //are below or equal to the limit value. If they are, return true. Else, return false.
//You can assume all values in the array are numbers.

//answer
function smallEnough(a, limit){
  let filteredArr = a.filter(val => val <= limit)
    return a.length === filteredArr.length;
    
  }

  //other answer from chat that I get
  function smallEnough(a, limit) {
    return a.every(val => val <= limit);
  }

 //task 4 10/25 Class 39

//answer

 //task 5 10/25 Class 39

//answer


//1st task class 39 10/27
//The starship Enterprise has run into some problem when creating a program to greet 
// everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock

//answer
function sayHello(name) {
  return `Hello, ${name}`
}


//2nd task class 39 10/20
//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//answer
function addNumToString(array) {
  return array.map((str, index) => `${index + 1}: ${str}`);
}

//answer again
function addNumToString(array) {
  return array.map((str, index) => `${index + 1}: ${str}`);
}

// //1st task class 40 10/30
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
//answer
function sumMix(x){
  return x.reduce((acc, cur) => acc + Number(cur), 0)
}
 
//another answer from CW that I get
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

//2nd task class 40 10/30
// Write a function that takes a list of strings as an argument and returns a filtered list containing 
// the same elements but with the 'geese' removed. The geese are any strings in the following array, 
// which is pre-populated in your solution
//answer
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]; 
    return birds.filter(bird => !geese.includes(bird));
};

//other cw answer that  I get
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};


//3rd task class 40 10/30
// Create a combat function that takes the player's current health and the amount of
// damage recieved, and returns the player's new health. Health can't be less than 0.
//answer
function combat(health, damage) {
  if (health >= 0 && damage < health){
    return health - damage; 
  }else{
    return 0;
  }
  }

  //4th task class 40 10/30
  // Given a string str, reverse it and omit all non-alphabetic characters.

  // Example
  // For str = "krishan", the output should be "nahsirk".
  
  // For str = "ultr53o?n", the output should be "nortlu".
  //answer
  function reverseLetter(str) {
    let letterStr = str.replace(/[^a-zA-Z]/g, "");
    let reverseStr = letterStr.split('').reverse().join(''); 
    return reverseStr;
  }

  //other cw answer that  Idont get yet:
  function reverseLetter(str) {
    //coding and coding..
    return str.match(/[a-z]/ig).reverse().join('');
    
  }

//11/6 
//task
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

//answer
function plural(n) {
  return n == 1 ? false : true
}


//task 11/7
// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair 
// represent the number of people that get on the bus (the first item) and the number 
// of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last 
// bus stop (after the last array). Even though it is the last bus stop, the bus might 
// not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases. Please keep in mind that the test cases ensure that the 
// number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

//answer
function peopleOnBus(busStops) {
  let totalPeople = 0;

  for (let i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];  // Number of people getting on
    totalPeople -= busStops[i][1];  // Number of people getting off
  }

  return totalPeople;
}

//11/8
//answer did again on my own above q
var number = function(busStops){
  let passengers = 0
  for (let i = 0; i < busStops.length; i++){
    passengers += busStops[i][0]
    passengers -= busStops[i][1]
  }
  return passengers;
}

// 11-9-23
//task
// Given a random non-negative number, you have to return the 
// digits of this number within an array in reverse order.
//answer
function digitize(n) {
  let nArr = Array.from(String(n), Number);
  let revArr = nArr.reverse();
  return revArr;
}




