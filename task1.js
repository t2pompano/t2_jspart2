// ===========for loop=================

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


for(let i = 61; i<=100; i = i +2){
    // console.log(i);
}





/***
Subtask-2:

Find all the even numbers from 78 to 98.

 */

for(let i = 78; i <= 98; i = i + 2){
    // console.log(i);
}

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;
for(i = 91; i<=129; i = i + 2){
    sum = sum + i;
    // console.log(i);
}
// console.log("sum of the odd numbers of 91 to 129 :- ", sum);
/***
 
Subtask-2:

Display sum of all the even numbers from 51 to 85.

*/

let sumEven = 0;
for(i = 52; i<=85; i = i + 2){
    sumEven = sumEven + i;
    // console.log(i);
}
// console.log("sum of the even numbers of 51 to 85 :- ", sumEven);

/***

Generate a multiplication table for number 9

 */

 const Nine = () => {
    for(i = 9; i <= 90; i = i + 9){
        console.log(i);
    }
 }
// Nine();
//  console.log(Nine());

/***

Implement a countdown timer that counts down from 81 to 65.

//  */
// let num1 = 10;
// let num2 = 30;


const total = function (num1, num2){

return (num1 + num2);
}

console.log(total(10, 20));