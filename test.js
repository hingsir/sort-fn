var sortFn = require('./')

var arr = [
  {
    name: 'cc',
    age: 20,
    salary: 20,
    info: {
        country: 'us'
    }
  }, {
    name: 'ab',
    age: 18,
    salary: 233,
    info: {
        country: 'fr'
    }
  }, {
    name: 'aa',
    age: 20,
    salary: 233,
    info: {
        country: 'cn'
    }
  }, {
    name: 'cc',
    age: 20,
    salary: 1000,
    info: {
        country: 'uk'
    }
  }, {
    name: 'aa',
    age: 20,
    salary: 1000,
    info: {
        country: 'us'
    }
  }, {
    name: 'aa',
    age: 20,
    salary: 1000,
    info: {
        country: 'jp'
    }
  }
]

console.log(arr.sort(sortFn('name asc,age desc,salary desc,info.country')))
