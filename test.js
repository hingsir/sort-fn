var sortFn = require('./')

var arr = [
  {
    name: 'cc',
    age: 20,
    salary: 20
  }, {
    name: 'ab',
    age: 18,
    salary: 233
  }, {
    name: 'aa',
    age: 20,
    salary: 233
  }, {
    name: 'cc',
    age: 20,
    salary: 1000
  }, {
    name: 'aa',
    age: 20,
    salary: 1000
  }, {
    name: 'aa',
    age: 20,
    salary: 1000
  }
]

console.log(arr.sort(sortFn('name asc,age desc,salary desc')))
