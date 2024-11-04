// =================for of loops==============================

// const numbers = [12, 98, 45, 63, 21, 72]
// console.log(numbers);

// for(const num of numbers){
//     console.log(num);
// }

const fruits = ['orange', 'mango', 'bannana', 'grape', 'jackfuit'];

// for (const fruit of fruits){
//     console.log(fruit);
//     console.log('I want to eat')
// }


// ===================while loop=======================


// let num = 0;
// while(num < 5){
//     console.log('looping', num);
//     // num = num + 1;
//     num++;
// }

// -------------range--------------------

// let num = 1;
// while (num <= 10){
//     console.log(num);
//     num++
// }

// --------------sum with loop--------------
// let num = 1;
// let sum = 0;
// while(num <= 10){
//     console.log(num);
//     sum = sum + num;
//     console.log("sum", sum);
//     num++;
// }




// ------------even number-------------------



// let numbers = 0;
// while(numbers <= 10){
//     if(numbers % 2!==0){
//         console.log("odd numbers", numbers);
//     }
//     numbers++
// }

// let num = 0;

// ======================for loop==========================
// for(let i = 0; i<= 5; i++){
//     console.log(i);
//     for(let j = 0; j<=i; j++){
//         console.log(j);
//     }
// }


let sum = 0;
for(let i = 11; i<=20; i++){
    sum = sum + i;
}
console.log(sum);

// console.log('sum of 11 to 20', sum);

// ==================break and continue=============================

// for(let i = 0; i<15; i++){
//     console.log(i);
//     if(i >=10){
//         break;
//     }
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log(i);
// }

// ============================do while=======================

// let n = 10;
// do {
//     console.log(n);
//     n++;
// }
// while(n < 5);