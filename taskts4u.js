
// ### For Loop Problems
// 1. **Sum of Numbers**: Write a function that takes a number `n` and returns the sum of all numbers from 1 to `n` using a `for` loop.
let sum = 0;
function add(n) {
    for (let i = 0; i <= n; i++) {
        // console.log(i)
        sum = sum + i;
    }
    return sum
}

// console.log(add(90));

// 2. **Factorial Calculation**: Write a function that calculates the factorial of a given number using a `for` loop. For example, `factorial(5)` should return 120 (5 x 4 x 3 x 2 x 1).

let factorial = 1;
function factor(n) {
    for (let i = 1; i <= n; i++) {
        // console.log(i)
        factorial = factorial * i;
    }
    return factorial
}

// console.log(factor(6));

// 3. **Even Numbers in Range**: Write a function that takes two numbers and logs all even numbers between them (inclusive) using a `for` loop.

function evenCalculate(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            // console.log(i)
        }
        
    }
}

const evenNumber = (evenCalculate(9,25));
// console.log(evenNumber);

// 4. **Reversed Array**: Given an array, use a `for` loop to print the elements in reverse order.

let persons = ['sadrul', 'badrul', 'najrul']
let rev = '';
let Rpersons = [];
 for(let i = 0; i <persons.length; i++){
    // console.log(i);
    // console.log(persons[i]);
    const person = persons[i];
    rev = person + " " + rev;
}
// console.log(rev.split(" "));


// 5. **Multiplication Table**: Write a function that takes a number `n` and prints the multiplication table up to 10 using a `for` loop.

function multiplyTable(n)
{
    for(let i = 1; i <= 10; i++)
    {
        let row = n + " * " + i + " = " + n * i;
        // console.log(row);
        
    }
}

multiplyTable(8);


// ---

// ### While Loop Problems
// 6. **Countdown**: Write a function that takes a number `n` and counts down to 1, logging each number using a `while` loop.

function Countdown(n){
    let num = n;
    while(num >=1){
        // console.log(num);
        num--;
    }
//  return num;   
}
Countdown(10);



// 7. **Sum of Digits**: Write a function that takes a positive integer and returns the sum of its digits using a `while` loop. For example, `sumOfDigits(1234)` should return 10 (1 + 2 + 3 + 4).

function sumOfDigit(num) {
    let numStr = num.toString().split('');
    // console.log(numStr.length);
    let sum = 0;
    let digit = 0;
    while(digit < numStr.length){
        const digits = parseInt(numStr[digit]);
        sum += digits;
        digit++
    }

    // for (let digit of numStr) {
    //     sum += parseInt(digit);
    // }

    return sum;
}

// console.log(sumOfDigit(1234));



// 8. **Prime Checker**: Write a function that checks if a number is prime using a `while` loop. Return true if the number is prime and false otherwise.

// Function to check prime number

function checkPrime(num){
    let res = true;
    if(num<=1){
        res = false;
    }

    for(let i=2; i*i<=num; i++){
        if(num%i===0){
            res = false;
            break;
        }
    }
    // if(res){
    //     console.log(num, " is a prime number.");
    // }
    // else{
    //     console.log(num, " is not a prime number.");
    // }
}
checkPrime(3);
// checkPrime(5);



// 9. **Collatz Conjecture**: Implement the Collatz Conjecture sequence using a `while` loop. For a given number `n`, if `n` is even, divide it by 2; if it's odd, multiply it by 3 and add 1. Repeat until `n` equals 1, logging each step.

let collatz = (num) => {
    // loop till the given num is not 1
    while(num != 1){

      //print the num
      console.log(num);

      //if the number is even
      if(num % 2 == 0){

        num = parseInt(num / 2); 

      }else{
        //if the number is odd
        num = (num * 3) + 1;
      }
    }

  // print the last number
//   console.log(num);
}

// console.log(collatz(5))

// 10. **Random Number Guessing Game**: Write a `while` loop that generates a random number between 1 and 100, and asks the user to guess until they find the correct number. If the guess is too high, log "Too high!", if too low, log "Too low!", and if correct, log "Congratulations!".

const min = 10;
const max = 20;

const guess = (Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(guess);

function guesNumber(n){
    if(guess == n){
        // console.log("congratulation!")
    }
    else if(guess < n){
        // console.log('choose a smaller number')
    }
    else{
        // console.log('choose a greater number')
    }

}
guesNumber(15)

// ---

// ### Array Problems
// 11. **Max Element in Array**: Write a function that takes an array of numbers and returns the largest number in the array.

let numbers = [8, 6, 999, 14, 21, 35, 70, 89, 250, 592]
function largestElement(arr) {
    // console.log(...arr);
    return Math.max(...arr);
}


const result = largestElement(numbers);

// console.log("The largest element in the array is:" + result); 


// 12. **Remove Duplicates**: Write a function that removes duplicate values from an array. For example, `[1, 2, 2, 3, 4, 4, 5]` should return `[1, 2, 3, 4, 5]`.

let num1 = [1,1, 2, 3, 3, 3, 4, 4, 5, 8, 8];
let fruits = ['mango', 'orange', 'mango', "apple", 'apple', 'orange', 'grap']
function removeDuplicates(arr){
    return [...new Set(arr)];  //This method sets a new object type with ES6 (ES2015) that allows you to create collections of unique values.
}
// console.log(removeDuplicates(num1));
// console.log(removeDuplicates(fruits));


// 13. **Find Missing Number**: Given an array of consecutive numbers with one number missing, find the missing number. For example, `[1, 2, 3, 5]` should return 4.

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sumOfFirstN = (n * (n + 1)) / 2;
    // console.log(sumOfFirstN);

    let sumOfArray = 0;
    for (let i = 0; i < n - 1; i++) {
        sumOfArray = sumOfArray + arr[i];
        // console.log(sumOfArray);
    }

    let missingNumber = sumOfFirstN - sumOfArray;

    return missingNumber;
}

const arr = [2, 3, 4, 5, 7, 8, 9, 10];
const missingNumber = findMissingNumber(arr);
// console.log("Missing Number: ", missingNumber);


// 14. **Array Intersection**: Write a function that takes two arrays and returns an array containing their intersection (common elements).

let st1_array = [1, 3, 3, 5, 7, 9];
let st2_array = [2, 3, 4, 5, 6, 9];

let res_arr = (first_array, second_array) => {
    let new_array = [];
    for (let i = 0; i < first_array.length; i++) {
        for (let j = 0; j < second_array.length; j++) {
            if (first_array[i] === second_array[j]) {
                new_array.push(first_array[i]);
            }
        }
    }
    return new_array;
};

// console.log("Array obtained is :");
// console.log(res_arr(st1_array, st2_array));



let first_array = [1, 3, 11, 5, 7, 9, 11];
let second_array = [2, 3, 11, 4, 5, 6, 9];

let new_array = first_array.filter(
    (element) => second_array.includes(element));

// console.log("Array obtained is :");
// console.log(new_array);


// 15. **Flatten Nested Arrays**: Write a function that flattens a nested array of any depth. For example, `flatten([1, [2, [3, 4]], 5])` should return `[1, 2, 3, 4, 5]`.
    const nested = [1, [2, [3, 4]], 5];
    function flat (arr){
        const result = arr.flat(Infinity);
        return result
    }
    // console.log(flat(nested));

// ---

// ### Object Problems
// 16. **Count Properties**: Write a function that takes an object and returns the number of properties (key-value pairs) it contains.
 const country = {
    name: "bangladesh",
    population: 20000,
    capital: "dhaka",
    code: 88,
    language: "bangla",
 }
    function Countries(param){
        const keysArray = Object.keys(param);
        const count = keysArray.length;
        return count;
    }
    // console.log(Countries(country));

// 17. **Convert Object to Array**: Write a function that takes an object and converts it into an array of key-value pairs. For example, `{ a: 1, b: 2 }` should become `[["a", 1], ["b", 2]]`.

// An Object
const obj = { 
    a: 1, 
    b: 2, 
    c: 3 
  }; 


   
   arrayOfKeyValuePairs = (param) =>  Object.entries(param); 
   
//   console.log(arrayOfKeyValuePairs(obj)); 

// 18. **Nested Object Sum**: Write a function that calculates the sum of all values in an object that contains nested objects. For example, `{a: 1, b: {c: 2, d: 3}}` should return 6.

const object = {
    a: "somestring",
    b: 42,
    c: 1,
    d: 5,
    e: {
      f: 3,
      g: 5,
      de: 2,
      rt: {
        l: 10,
      }
    }
  };
  

  
  let summer = (object1) => {
    let sum = 0;
    for (const value of Object.values(object1)) {
      if (typeof value === "number") {
        sum += value;
      }
      if (typeof value === "object") {
        sum += summer(value);
      }
    }
    return sum;
  };
  
//   console.log(summer(object));




// 19. **Check for Property**: Write a function that takes an object and a key, and returns `true` if the key exists in the object, and `false` otherwise.
const obj2 = {
    name: 'Sandeep',
    age: '32'
    };
    
   function checkProperty(obj, key){
    
    return obj.hasOwnProperty(key);
   }
//   console.log(checkProperty(obj2, "agefr")) ;


// 20. **Group by Property**: Write a function that groups an array of objects by a given property. For example, `groupBy([{age: 20}, {age: 25}, {age: 20}], 'age')` should return `{20: [{age: 20}, {age: 20}], 25: [{age: 25}]}`.


let friends = [{age: 20}, {age: 25}, {age: 20}, {age: 30}]

function groupAge (arr, property){
    const result = {};

    for (const obj of arr) {
      const key = obj[property];
      console.log(key);
  
      // Check if the key already exists in the result object
      if (!result[key]) {
        result[key] = []; // Initialize an empty array if the key does not exist
      }
  
      result[key].push(obj); // Add the current object to the corresponding group
    }
  
    return result;
  
}
console.log(groupAge(friends, 'age'));