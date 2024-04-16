
/*
//task1//

async function
iterateWithAsyncAwait(array){
  for (const value of array){
    
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(value);
  }
}
const myarray=['Monday','Tuesday','Wednesday','Thursday'];
 iterateWithAsyncAwait(myarray);



*/

/*
//task2//
async function fetchDataFromAPI(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const data={id:1, name:'Data from API'}
      resolve(data);

    },2000);
  });
}
async function
fetchDataFromAPI1(){
try {const data= await fetchDataFromAPI();
console.log(data);
}
catch {
  console.error(error);
}
}
fetchDataFromAPI1()
*/











  
  //task3//
  /*
  function asyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve('Operation completed successfully');
        } else {
          reject('Operation failed');
        }
      }, 1000);
    });
  }
  
  // Asynchronous function using async/await with try/catch
  async function executeAsyncOperation() {
    try {
      // Await the result of the asyncOperation
      const result = await asyncOperation();
      console.log('Async operation result:', result);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Call the async function
  executeAsyncOperation();

*/

/*    Task3
function stepOne() {
  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Step One Completed');
    }, 1000);
  });
}

function stepTwo(message) {
  console.log(message);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Step Two Completed');
    }, 2000);
  });
}
function stepThree(message) {
  console.log(message);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Step Three Completed');
    }, 3000);
  });
}

stepOne()
.then (stepTwo)
  .then(stepThree)
  .then(result => {
    console.log(result);
  });

*/


 /*
//TASK4//
async function concurrentRequests() {
  try {
      // Make two API calls concurrently using Promise.allSettled()
      const responses = await Promise.allSettled([
          fetch('https://jsonplaceholder.typicode.com/posts/1'),
          fetch('https://jsonplaceholder.typicode.com/posts/2')
      ]);

      // Check if all responses are successful
      const allResponsesOk = responses.every(response => response.status === 'fulfilled' && response.value.ok);

      // If all responses are successful, parse the JSON data
      if (allResponsesOk) {
          const data = await Promise.all(responses.map(response => response.value.json()));
          console.log('Combined results:', data);
      } else {
          throw new Error('One or more requests failed');
      }
  } catch (error) {
      console.error('Error:', error.message);
  }
}

// Call concurrentRequests function
concurrentRequests();


*/
// task5 //
const urlsToFetch = [
  'https://jsonplaceholder.typicode.com/todos/0',
  'https://random-data-api.com/api/v2/blood_types/1544',
  ];
  // Function to fetch all of the URLs in parallel
const fetchURLs = async (urls) => {
  try {
      const promises =
          urls.map(url => fetch(url));

      // Wait for all of the promises to resolve
      const responses =
          await Promise.all(promises);

      // Extract JSON data from responses
      const data = await
          Promise.all(responses.map(response => response.json()));

      return data}
  catch (error) {
      throw new Error(`Failed to fetch data: ${error}`)}}

fetchURLs(urlsToFetch)
  .then(data => {
      console.log('Fetched data:', data)})
  .catch(error => {
      console.error('Error fetching data:', error)});











