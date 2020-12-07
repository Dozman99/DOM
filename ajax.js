// clients don't send API request to other domain due to same origin policy unless the api host implements cross origin platform(CORS). Either we use a proxy (http://crossorigin.me) or we use our server where the policy is not implemented.

fetch('https://crossorigin.me/https://thewebsite.com/api/')
  // (first ASYNC)
  // To consume it
  .then((theResultGotten) => {
    //   theResultGotten must be converted from JSON to javascript
    return theResultGotten.json();
    //  (second ASYNC)the above gives back a promise because it takes time to convert so we add a new 'then' method
    console.log(theResultGotten);
  })
  .then((DataFromConversion) => {
    console.log(DataFromConversion);
  })
  .catch((ifThereIsError) => {
    console.log(error);
  });
// converting to function
function theFunction(passIn) {
  fetch('https://crossorigin.me/https://thewebsite.com/api/${passIn}')
    // (first ASYNC)
    // To consume it
    .then((theResultGotten) => {
      //   theResultGotten must be converted from JSON to javascript
      return theResultGotten.json();
      //  (second ASYNC)the above gives back a promise because it takes time to convert so we add a new 'then' method
      console.log(theResultGotten);
    })
    .then((dataFromConversion) => {
      console.log(dataFromConversion);
    })
    .catch((ifThereIsError) => {
      console.log(ifThereIsError);
    });
}
//   converting it to async await/////////

async function asyncFunction(passIn) {
  try {
    const result = await fetch(
      'https://crossorigin.me/https://thewebsite.com/api/${passIn}/',
    );
    const dataFromConversion = await result.json;
    console.log(dataFromConversion);
    //   async function always return a function
    return dataFromConversion;
  } catch (ifThereIsError) {
    console.log(ifThereIsError);
    console.log('that is the error above');
  }
}
asyncFunction('passIn');
// note that when ever you are trying to get the return value of any async function like (asyncFunction),(theResultGotten.json)... always process it using the '.then'
// Bad code
const finalResult = asyncFunction('passIn');
console.log(finalResult);
// Good code
let finalResult;
asyncFunction('passInAgain').then((asyncFunctionReturnValue) => {
  finalResult = asyncFunctionReturnValue;
  console.log(finalResult);
});
// I wil get an error if i console.log it outside the block because the final result is still yet to get its value from the asynchronous functions above
// console.log(finalResult);
