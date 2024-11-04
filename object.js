// singleton

// object literals

const person = {
    name: 'sador uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'sundorban', 'kuakata']
}

// console.log(person);
// ======out put=========
// {
//     name: 'sador uddin',    
//     age: 25,
//     profession: 'developer',
//     salary: 25000,
//     married: true
//   }
// =================================

// access object by dot notation & bracket notation
// console.log(person.salary);
// console.log(person['age']);

const boyos = person['age']; //store in a variable
// console.log(boyos);


// =================update keys & values=================

person.salary = 30000;
person.age = 27;
person['fav places'] = ['bali', 'pataya', 'maldives']

// console.log(person);


const propName = 'profession';
person[propName] = 'devops';

// console.log(person);

// =================keys and values======================

const computer = {
    name: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb',
    monitor: 'hp'
}

const keys = Object.keys(computer);
const values = Object.values(computer);

console.log(keys);  //[ 'name', 'price', 'processor', 'hdd', 'monitor' ]

console.log(values);  // [ 'lenovo', 35000, 'intel', '512gb', 'hp' ]

// ===========================nested object===========================

const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(college.unique.result.merit);
college.unique.result.merit = "top top top most";
// console.log(college.unique.result.merit);

college.events[1] = '16th december';
console.log(college.events[1]);

// =================delte property===============

delete college.class;
console.log(college);

// ================Object declare===============

const pencil = new Object()
const rubber = Object.create({})