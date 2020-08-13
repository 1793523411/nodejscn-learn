throw new Error("Ran out of coffee");

class NotEnoughCoffeeError extends Error {
  //...
}
throw new NotEnoughCoffeeError();

try {
  //lines of code
} catch (e) {}

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1); //mandatory (as per the Node.js docs)
});

doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch((err) => console.error(err));

const doSomething1 = () => {
  //...
  try {
    //...
  } catch (err) {
    //... handle it locally
    throw new Error(err.message);
  }
  //...
};

doSomething1()
  .then(() => {
    return doSomething2().catch((err) => {
      //handle error
      throw err; //break the chain!
    });
  })
  .then(() => {
    return doSomething2().catch((err) => {
      //handle error
      throw err; //break the chain!
    });
  })
  .catch((err) => console.error(err));

async function someFunction() {
  try {
    await someOtherFunction();
  } catch (err) {
    console.error(err.message);
  }
}
