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

