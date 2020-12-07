// let and const are blocked scoped that is within "{}"
// if const is an array it can still be mutable by call out every function of its array.
// if I have an object and i don't want any of the item in my object to change then I do : object.freeze()

const n = `${firstname} ${lastname}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('sm'));
console.log(n.includes('oh'));
console.log(firstname.repeat(5));

// Arrow functions
// another way of writing anonymous function
() => {};
// no "()" when there is one argument
// no return when there is just one line of code to be output
// when there is more than one single instruction we would put a return

// arrow function shares the lexical "this" with its surroundings(strict) i.e they use the "this" keyword
// that they are written in directly

//////////////////////////////////////

// destructuring//////////////////
const [name, year] = ['dozie', 23];
console.log(name);
// for objects use curly braces for destructuring
const object = {
  firstName: 'Dozman',
  lastName: 'calvary',
};
// so we do
const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);
// now if i don want to use the name 'firstName' and 'lastName' do :
const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);
// we destruct the return value in a given function
function calcProblem(year) {
  const age = new Data().getFullYear() - year;
  return [age, 65 - age];
}
// now destructuring
const [ageDestruct, retirement] = calcProblem;
console.log(ageDestruct);
console.log(retirement);

////////////////////////////////

// the rest operator is used in a function to pass in any amount of arguments into a function
const sum = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));
//  with the rest operator
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4, 5));

/////////////////////////////////////////////////////

// the spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
  arr2 = arr1; // as I know this is just mapping the arr2 to arr1
  arr1[0] = 'potato';
})();
console.log(arr2);
// output "potato", "FEB", "MAR", "APR", "MAY"

// but if I do:
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
  arr2 = [...arr1]; // as I know this is just copying the arr2 to arr1
  arr1[0] = 'potato';
})();
console.log(arr2);
// it would not out put potato

///////////////////////////////////////////
//  Arrays
// we are inheriting the 'boxes' variable and looping through it
const boxes = document.querySelectorAll('.box');
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.form(boxes);
boxesArr6.forEach((cur) => (cur.style.backgroundColor = 'dodgerblue'));

// example2 the new forEach
// iterating through the loop to change a text, but to ship a particular one.
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === 'box blue') {
    continue;
    // or break
  }
  boxesArr5[i].textContent = 'I changed to blue';
}
// ES6
for (const cur of boxesArr6) {
  if (cur.className === 'box blue') {
    continue;
  }
  cur.textContent = 'I changed to blue';
}
// example3 find and findIndex
var ages = [12, 17, 8, 21, 14, 11];
// ES5
var full = ages.map(function (cur) {
  return cur >= 18;
});
console.log(full);
// the above loops through the element

console.log(full.indexOf(true));
// after which to check the index 'truth' in every element
console.log(ages[full.indexOf(true)]);
// to check the actual value which is observed as the truth

// ES6
console.log(ages.findIndex((cur) => cur >= 18));
// this is gonna loop through and then to check for the 'truth' in every element
console.log(ages.find((cur) => cur >= 18));
// to check the actual value which is observed as the truth
// ////////////////default parameter//////////////////////
ES5;
function smithPerson(firstname, yearOfBirth, lastname, nationality) {
  lastname === undefined ? (lastname = 'smith') : (lastname = lastname);
  nationality === undefined
    ? (nationality = 'american')
    : (nationality = nationality);

  this.firstname = firstname;
  this.lastname = lastname;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

// ES6
function smithPerson(
  firstname,
  yearOfBirth,
  lastname = 'smith',
  nationality = 'american',
) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new smithPerson('john', 1990);
var emily = new smithPerson('emily', 1983, 'Daiz', 'spanish');
/////////////////////////maps////////////////////

const question = new Map();
question.set(
  'question',
  'What is the official name of the latest javascript version?',
);
// question.set('key','value');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'wrong,please try again!');

console.log(question.get('question'));
// to get the key 'question' in the set above
console.log(question.size);
// to get the size of the 'question' map
if (question.has(4)) {
  question.delete(4);
  console.log('Answer 4 is deleted');
}
// question.has is to check the question set data
// question.delete is to delete the set data
question.clear();
// to delete all the set data

// to loop through a map
question.forEach((value, key) =>
  console.log(`This is ${key}, and it's set to ${value}`),
);

for (let [key, value] of question.entries()) {
  console.log(`This is ${key}, and it's set to ${value}`);
}
// above, using .entries as in 'question.entries' is gonna return all the key-value pair, then we are gonna use destructuring to store the keys and the values in two separate variables

//  to turn this thing to a complete answer question machine

for (let [key, value] of question.entries()) {
  if (typeof key === 'number') {
    console.log(`${key}:${value}`);
  }
}
// to avoid using the if statement
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
// breakdown, if "ans === question.get" is true then its gonna do "question.get(true)"
/////////////////////classes///////////////////

// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
// calculateAge inheriting the properties and the method from Person5
// the major difference between the method of an object and a property is that property has no computation in it it is either a string or a value...
Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};
var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
  static greeting() {
    console.log('Hey there');
  }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();

// classes are not hoisted
// we can only inherit method and not properties in classes

// /////////////sub-classes/////////////////

var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};
var john5 = new Person5('John', 1990, 'teacher');

// adding a subclass Athletes
var Athletes5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  // above we are calling Person5 parameters and using the this keyword to point to the athlete object since it was created in the Person5 object
  this.olympicGames = olympicGames;
  this.medals = medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);
// above we are linking the sub class to the super class
// NOTE before you create a method on the prototype property of a method,you must first link it to the superclass as done above. javascript is kinda hard to debug
// below, creating a prototype property of Athlete5...the Person5 instances cant inherit this method
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    {
      var age = new Date().getFullYear() - this.yearOfBirth;
      console.log(age);
    }
  }
}

// class Athlete6 extends Person6 {
//   constructor(name,yearOfBirth,job,olympicGames,medals){
//     super(name,yearOfBirth,job)
//     this.olympicGames=olympicGames;
//     this.medals=medals=medals;
//   }
//   wonMedal=function(){
//       this.medals++;
//       console.log(this.medals);
//   }
// }

// var johnAthlete5= new Athlete5('John',1990,'swimmer',3,10)
// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();
