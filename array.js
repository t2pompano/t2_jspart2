// example of arrays

const number = [12, 24, 16, 41,];
const friends = ["jamal", "kamal", "kuddus"];
const passed = [true, false, true , false];
const mixedArray = [12, "dhaka", true, 45.9]; // mixed array but same data type puts in array normally

// console.log(number.length) // show how many elements in array
// console.log(number[2]) // ge the elements in array

const fourth = number[3]; // store in a different variable
// console.log(fourth);

// set or update element value by index

number[1] = 999;
// console.log(number);

// ===================add and remove element by push & pop============================ 

const age = [];
const numbers = [16, 12, 46, 100];

numbers.push(66);
numbers.push(78);
numbers.push(78, 25,50);
friends.push("salam", "balam") // push added the element at the end of the array
// console.log(numbers);
// console.log(friends);

// friends.pop();
// console.log(friends);
// friends.pop(); //hover on pop and wha
// console.log(friends);


// friends.shift();
// console.log(friends);
// friends.unshift('gumailan');
// console.log(friends);


// -------------->Important things in array-------------------------------
// console.log(friends);

// console.log(friends.includes('salam'))
// console.log(friends.includes('rahim'))

// console.log(friends.indexOf('kamal'));
// console.log(friends.indexOf('Rahim'));  // if not exist in the array indexof -1

//>>>>>>>>>>>>>>>>>>>>>>>>>Checking Array or NOt>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const nums = [];
const food =  'ros o gol la'
const ages = 15;


console.log(Array.isArray(friends))
console.log(Array.isArray(nums))
console.log(Array.isArray(food))
console.log(Array.isArray(ages))

// ---------------array Method-------------------

/**
 * 1. join()
 * 2. concat()
 * 3. slice()
 * 4  splice()
 */

