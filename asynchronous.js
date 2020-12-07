// callback hell
// in a callback hell here, we have the setTimeout and inside we have arrow function, time and what you want to pass into the arrow function separated by a comma.

function getRecipe() {
  setTimeout(() => {
    const recipeID = [523, 582, 432, 978];
    console.log(recipeID);
    setTimeout(
      (id) => {
        const recipe = { title: 'fresh tomato pasta', publisher: 'Jonas' };
        console.log(`${id}: ${recipe.title}`);
        setTimeout(
          (personThatPublished) => {
            const recipe2 = { title: 'Italian pizza', publisher: 'Jonas' };
            console.log(recipe);
          },
          1000,
          recipe.publisher,
        );
      },
      1500,
      recipeID[2],
    );
  }, 2000);
}

// promises///////////////////////////////
// we have new promise((resolve, reject)=>{setTimeout(()=>{resolve();reject()}, time, whatYouWantToPassIn)})

// create here
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 582, 432, 978]);
  }, 2000);
});

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const recipe = { title: 'fresh tomato pasta', publisher: 'Dozman' };
        resolve(`${id}: ${recipe.title}`);
      },
      1500,
      recID,
    );
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (pub) => {
        const recipe2 = { title: 'Italian pizza', publisher: 'Jonas' };
        resolve(`${pub}: ${recipe2.title}`);
      },
      1000,
      publisher,
    );
  });
};
// consume here
// object.then only handles and takes in the resolved data....you can name the data anything, below its called IDs
getIDs
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((firstRecipe) => {
    console.log(firstRecipe);
    return getRelated('Code Dozman');
  })
  .then((secondRecipe) => {
    console.log(secondRecipe);
  })
  //   the same thing for object.catch, it takes in the reject data if its like this const getIDs = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject([523, 582, 432, 978]);
  //   }, 1500);
  // });
  .catch((error) => {
    console.log(error);
  });
// take for example the 3 promise: pass in 'code dozman' it is taken in pass through the function and automatically pass into the arrow function of the set timer.

//////////////asyncAwait////////////////
// a better way to consume a Promise
async function betterWay() {
  const IDs = await getIDs;
  console.log(IDs);
  const firstRecipe = await getRecipe(IDs[2]);
  console.log(firstRecipe);
  const secondRecipe = await getRelated('Code Dozman');
  console.log(secondRecipe);
}
betterWay();

// since '.then' is what we use to consume the value of a resolve, and a resolve could be seen as a successful 'return' value although 'return' is used with the "new promise(...)".
// therefore we can do the following:

async function betterWay() {
  const IDs = await getIDs;
  console.log(IDs);
  const firstRecipe = await getRecipe(IDs[2]);
  console.log(firstRecipe);
  const secondRecipe = await getRelated('Code Dozman');
  console.log(secondRecipe);

  return secondRecipe;
  //   return firstRecipe
}
// Bad code
const badCode = betterWay();
console.log(badCode);

// Good code
betterWay().then((whatWeAreReturningIn) =>
  console.log(`${whatWeAreReturningIn} is the better approach`),
);
