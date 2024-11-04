

// ===========basic function structure================

// SayMyName()

function SayMyName(){
    console.log("A");
    console.log("M");
    console.log("I");    //function keyword
    console.log("N");    //SayMyName function name
    console.log("U");    //() parameters
    console.log("R");    //{} content of function or function scope
}

// SayMyName(); // SayMyName only function Referance
             // SayMyName()  call the function


// ===========simple function with parametes==============

// function addTwoNumbers(number1, number2){       // (number1, number2) are called parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(5, 7); // (5, 7) are Arguments against parameters
// addTwoNumbers(5, "7"); // (5, "7") are Arguments against parameters
// addTwoNumbers(5, null); // (5, null) are Arguments against parameters

// ==============function value return====================

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

//  const result = addTwoNumbers(5, 7);

//  console.log("Result:", result); // Output undefined


 function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
    console.log("Titu"); // after return function will stop to execute anything
}

 const result = addTwoNumbers(5, 7);

//  console.log("Result:", result); 


 function addNumbers(num1, num2){
    return (num1 + num2);
 }

//  console.log(addNumbers(5, 7));


 const arr = ['salam', 'kalam-uddin', 'jamal'];

//  console.log(arr.length);

 function length (array){
    return array.length;
 }

 console.log(length(arr));