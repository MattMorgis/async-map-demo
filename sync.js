const someSyncOperation = (seconds) => {
  const milliseconds = seconds * 1000;
  const date = new Date();
  while ((new Date()) - date <= milliseconds) { 
    /* Do nothing */ 
  }
  console.log('waited ' + milliseconds);
  return 'waited ' + milliseconds;
}

// Start timer
console.time('run time');

const array = [3, 10, 12, 2, 5];
const results = array.map(someSyncOperation);
console.log('Results = ' + results);

// Stop timer
console.timeEnd('run time');