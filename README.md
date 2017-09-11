# Async/Await Map
Demonstartes an async `map` with Node `v8`. 

### Sync Demo
```bash
$ node sync.js
waited 3000
waited 10000
waited 12000
waited 2000
waited 5000
Results = waited 3000,waited 10000,waited 12000,waited 2000,waited 5000

run time: 32007.980ms
```

### Async Demo
```bash
$ node async.js
Waited 0.5 seconds
Waited 3 seconds
Waited 5 seconds
Waited 10 seconds
Waited 12 seconds
Results = Waited 3 seconds,Waited 10 seconds,Waited 12 seconds,Waited 0.5 seconds,Waited 5 seconds

run time: 12001.702ms