// // global execution context:code that is not inside any function

// var name = 'John'; //the variable is in Global execution context

// //the function is in Global execution context
// function first() {
//   var a = 'hello!';
//   second();
//   var x = a + name;
// }

// function second() {
//   var b = 'hi!';
//   third();
//   var z = b + name;
// }

// function third() {
//   var c = 'hey!';
//   var z = c + name;
// }

// first();
// // the order of the stack is below
// //global execution context ==> first execution context ==> second execution context ==> third execution context
// // called the function on line 23
// // global execution context
// 23,
//   //first() execution context
//   6,
//   7,
//   //second() execution context
//   8,
//   12,
//   13,
//   //third execution context
//   14,
//   18,
//   19,
//   20,
//   //Now completing the other task at hand
//   //second() execution context
//   15,
//   // first() execution context
//   9;
// ///////////////////////////////////////////
// // for example
// var myAge = 23;

// function foo() {
//   var myAge = 65;
//   console.log(myAge);
// }
// console.log(myAge);
// //then run it////////////////////////////////////////////////////

// /* execution context object contains:
// variable object(VO)[[Hoisting ==> [creation of variable object and code scanned and for:
// a function is set or pointed to before being created,
// a variable is set to undefined]]]
// scope chain[creation of the scope chain]
// "This" variable[determines value of "this" variable]
// */

// // HOISTING
// // using a function before its is being declared
// // it only works for function declaration
// calcAge(1995);

// function calcAge(year) {
//   console.log(2016 - year);
// }

// console.log(age);
// var age = 23;
// ///////////////////////////////////////////

// //////////////////Scoping///////////////
// // scoping is an environment or space to which a variable it defines are accessible
// // lexical scoping : a function that is lexically within another function gets access to the scope of the outer function.
// //global scope: "b" or "c" can't be called here
// var a = 'hello!';
// first();

// function firstScope() {
//   //first scope: "c" can't be called here
//   var b = 'hi!';
//   second();

//   function secondScope() {
//     //second scope
//     var c = 'hey!';
//     console.log(a + b + c);
//   }
// }
// // this is where the key word "return" is being used

// // PUTTING ALL TOGETHER////////////
// var a = 'hello!';
// first();
// function firstSet() {
//   var b = 'hi!';
//   secondSet();
//   function secondSet() {
//     var c = 'hey!';
//     thirdSet();
//   }
// }

// function thirdSet() {
//   var d = 'John';
//   //   console.log(c);
//   console.log(a + d);
// }

// //////////////////////////This///////////////
// // the "this" variable points to the object calling the method
// // regular function called any where, the "this" variable points at the global object (the window object in the browser)
// console.log(this);
// // OR
// yearOfGraduation(2015);

// function yearOfGraduation(admissionYear) {
//   console.log(admissionYear + 5);
//   console.log(this);
// }
// // Note that the above are all in the global execution context

// // now in use
// var john = {
//   name: 'John nnaemeka',
//   admissionYear: 2015,
//   yearOfGraduation: function () {
//     console.log(this);
//     console.log(2020 - this.admissionYear);
//     function innerFunction() {
//       console.log(this);
//       //which will print out the method of the window because it is not part of the "john" method
//     }
//     innerFunction();
//   },
// };

// john.yearOfGraduation();

// // here lets borrow the method in "john" to use it on mike
// var mike = {
//   name: 'Mike son',
//   admissionYear: 2016,
// };

// mike.yearOfGraduation = john.yearOfGraduation;
// mike.yearOfGraduation;
// /////////////////////////////////////////////////////////////

// // the new operator points the 'this.object' to the object begin created since 'this' always point to the global variable
// // the new operator creates a new object and the 'this' references to it

// // NOTE: without the new operator you are just simply doing a function call

// // arrow function point the this keyword to its surrounding while using it

// // the this keyword in a function that is inside another function of an object method is pointing to the window this value
