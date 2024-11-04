// ==========declare a string=================

const country = 'Bangladesh'; // string
const division = 'Dhaka'; //string
const district = 'narayanganj';//string
const thana = new String ('fatulla'); // [String: 'fatulla']

// console.log(thana);
// console.log(thana.toLocaleUpperCase());
// console.log(thana.toLocaleLowerCase());
// console.log(thana.charAt([2]));
// console.log(thana.concat(" ", "Narayanganj", " ", "Bangladesh"));


// ============compare the string====================

const subject = "chemistry";
const book = "ChemisTry";

if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){

    // console.log('Prokkhay fatay falamu');
}
else{
    // console.log('Kono Kaj Hobena');
}

const drink = "water";
const juice = "  water ";
if(drink.trim() === juice.trim()){
    // console.log('pani apor nam jibon')
}
else{
    // console.log("na paile moron");
}

// ============slice/join/concat=====================

const address = "bandorban";
const part = address.slice(0, 6).toLocaleUpperCase();
// console.log(part);
// console.log(address);

const sentence = 'I am a good and hardworking person';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Kader,hasina,kamal,dorbesh,polok,joy';
const friends = friendsStr.split(',');
// console.log(friends);

const gundalegue = [ 'Kader', 'hasina', 'kamal', 'dorbesh', 'polok', 'joy' ];
// console.log(gundalegue.join());
// console.log(gundalegue.join('|'));
// console.log(gundalegue.join('-'));

// concat

const first = 'Abid';
const last = 'Navid';
// const fullName = first + last;
const fullName = first + " " + last;
// console.log(fullName);
const fullName2 = first.concat(' ').concat(last).toLocaleUpperCase();
// console.log(fullName2)

// ==========includes==========
// console.log(last.includes('x'));

// ==============Reverse=========================

const para = new String ('i am learning JavaScript.');

// console.log(para.slice(1, 5));
// console.log(para.substring(2, 7));


let reverse = '';

for(const letter of para){
    reverse = letter + reverse;
}

// console.log(reverse);
let rev = '';
 for(let i = 0; i <para.length; i++){
    // console.log(i);
    // console.log(para[i]);
    const letter = para[i];
    rev = letter + rev;
}

// console.log(rev);

const reversed = para.split('').reverse().join('');
// console.log(reversed);

const url = "https://titu.com/titu%20talukder"

// console.log(url.replace('%20','-'))

console.log(url.includes('titu'))

