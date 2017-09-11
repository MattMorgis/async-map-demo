const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Waited ' + seconds + ' seconds');
      resolve('Waited ' + seconds + ' seconds');
    }, seconds * 1000);
  });
}

const run = async () => {
  const array = [3, 10, 12, .5, 5];
  const promises = array.map(wait);
  
  let results = [];
  for (let promise of promises) {
    const x = await promise;
    results.push(x);
  }

  return results;
}

// Start timer
console.time('run time');

run().then((results) => {
  console.log('Results = ' + results);
  // End timer.
  console.timeEnd('run time'); 
});