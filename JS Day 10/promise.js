// Promise
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("This is the then " + message);
// }).catch((message) => {
//   console.log("This is the catch " + message);
// });

// --------------------------------

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "London") {
      resolve("Hi from London");
    } else {
      reject("We can only talk in London");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information + ${response}`);
  });
}

// makeRequest("London")
//   .then((response) => {
//     console.log("Response received");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Async/Await
async function doWork() {
  try {
    const response = await makeRequest("London");
    console.log("Response received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}
doWork();
