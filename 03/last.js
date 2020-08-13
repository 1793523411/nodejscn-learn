const obj = {
  name: "joe",
  age: 35,
  person1: {
    name: "Tony",
    age: 50,
    person2: {
      name: "Albert",
      age: 21,
      person3: {
        name: "Peter",
        age: 23,
      },
    },
  },
};
console.log(obj);

// {
//     name: 'joe',
//     age: 35,
//     person1: {
//       name: 'Tony',
//       age: 50,
//       person2: { name: 'Albert', age: 21, person3: [Object] }
//     }
//   }

//!where 2 is the number of spaces to use for indentation.
console.log(JSON.stringify(obj, null, 2));

// {
//     "name": "joe",
//     "age": 35,
//     "person1": {
//       "name": "Tony",
//       "age": 50,
//       "person2": {
//         "name": "Albert",
//         "age": 21,
//         "person3": {
//           "name": "Peter",
//           "age": 23
//         }
//       }
//     }
//   }

require("util").inspect.defaultOptions.depth = null;
console.log(obj);
// {
//     name: 'joe',
//     age: 35,
//     person1: {
//       name: 'Tony',
//       age: 50,
//       person2: { name: 'Albert', age: 21, person3: { name: 'Peter', age: 23 } }
//     }
//   }
