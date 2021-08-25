// var person = "mohammad"
// console.log(person)

// var person = 2
// console.log(person)

// let num1 = 10
// console.log(num1)

// let name = "John"
// let isMarried = false
// let marks = [9, 10 , 12]
// let object = {
//     title: 'Blog Title 1',
//     description: 'test description'
// }

// const num2 = 20

// num3 = 30
// console.log(num3)
// let num3

// const name = 'John'

// const test1 = 'Hello' + name
// console.log(test1)

// const test2 = `Hello ${name}`
// console.log(test2)

// const firstName = 'Mohammad'
// const lastName = 'Taheri'

// function getFullName(firstName, lastName) {
//     console.log(`${firstName} ${lastName}`)
// }

// getFullName(firstName,lastName)

// function greetings(name) {
//     return `Welcome ${name}`
// }

// console.log(greetings('Mamad'))

// const mGreeting = (name, age) => {
//     return `Welcome ${name} ${age}`
// }

// console.log(mGreeting('Taheri',28))

// const mGreeting = name => `Welcome ${name}`

// const mSum = (num1, num2) => console.log(num1 + num2)
// mSum(1, 2, 3, 4, 5)

// Rest Operator

// const mSum = (num1, num2, ...args) => {
//     let sum = 0
//     for(let i=0; i<args.length; i++) {
//         sum += args[i]
//     }
//     console.log(num1)
//     console.log(num2)
//     console.log(args)
//     console.log(sum)
// }

// mSum(1, 2, 3, 4, 5, 6, 7)

// Spread Operator

// let mArray1 = [1, 2, 3, 4, 5]
// let mArray2 = mArray1
// let mArray3 = [...mArray1]
// mArray2.push('mamad')
// let words = ['a', 'b', 'c']
// let mArray4 = [...mArray1, ...words]

// console.log(mArray1)
// console.log(mArray2)
// console.log(mArray3)
// console.log(mArray4)

// Destructing

// const name = "John Manual Lark"
// const nameArray = name.split(' ')

// console.log(nameArray)

// let firstName = nameArray[0]
// let middleName = nameArray[1]

// console.log(firstName)
// console.log(middleName)

// let [firstName, middleName, lastName] = nameArray

// console.log(firstName)
// console.log(middleName)
// console.log(lastName)

// const person = {
//     firstName: 'Mohammad',
//     middleName: 'Jr',
//     lastName: 'Taheri',
//     age: 28
// }

// let {firstName, lastName} = person

// console.log(firstName)
// console.log(lastName)

// map() function

// const mArray = [1, 2, 3, 4, 5]

// let newArr1 = []

// for (let i = 0; i < mArray.length; i++) {
//     newArr1.push(mArray[i])
// }

// let newArr2 = mArray.map((item) => {
//     return item
// })

// console.log(newArr1)

// reduce() function

// const mArray = [1, 2, 3, 4, 5]

// const result = mArray.reduce((acc, item) => {
//     return acc + item
// }, 0)

// console.log(result)

// const mArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// const result = mArray.filter(item => {
//     // return false
//     // return true
//     // return item % 2 === 0
//     return item % 2 !== 0
// })

// console.log(result)

// const mArray = [0, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50]

// const findresult = mArray.find(item => {
//     // return item % 2 === 0
//     return (item % 5 === 0 && item > 2)
// })

// const findIndexresult = mArray.findIndex(item => {
//     // return item % 2 === 0
//     return (item % 5 === 0 && item > 2 )
// })

// console.log(findresult)
// console.log(findIndexresult)

// Classes in ES6

// function Person(name, birthYear) {
//     this.name = name
//     this.yearOfBirth = birthYear

//     this.getDetatils = function() {
//         return "Name: " + this.name + " and Age: " + (2021 - this.yearOfBirth)
//     }
// }

// var john = new Person('John', 1989)

// console.log(john.getDetatils())

// class Person {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.yearOfBirth = birthYear;
//   }

//   getDetatils = () => {
//     return `Name: ${this.name} and Age: ${2021 - this.yearOfBirth}`
//   }
// }

// var john = new Person('John', 1989)

// console.log(john.getDetatils())

// class Pilot extends Person{
//     constructor(name = 0, birthYear = 0, type) {
//         super(name,birthYear )
//         this.type = type
//     }

//     getType = () => {
//         console.log(this.type)
//     }
// }

// let mmm = new Pilot('mamad', 1950, 'good')

// console.log(mmm.name)

// let list = [];
// const getDataFromServer = () => {
//   $.get("https://jsonplaceholder.typicode.com/posts", (response) => {
//     list = response;
//     console.log("1 - done");

//     const id = 1;
//     $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
//       console.log("2 -" + response);

//       $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
//         console.log("3 -" + response);
//       });

//     });

//   }).fail((err) => {
//     console.log(err);
//   });
// };

// getDataFromServer();

// console.log(list);

const postListPromise = new Promise((resolve, reject) => {
  $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
    // console.log('Response => ', data)
    resolve(data);
  }).fail((err) => {
    reject(
      new Error(
        `call failed for GET Post Lisr Request with status ${err.status}`
      )
    );
  });
});

const postDetailsPromise = (dataaa) =>
  new Promise((resolve, reject) => {
    console.log("mamad => ", dataaa[5].id);
    $.get("https://jsonplaceholder.typicode.com/posts/1", (data) => {
      console.log("Response => ", data);
      resolve(data);
    }).fail((err) => {
      new Error(
        `call failed for GET Post Lisr Request with status ${err.status}`
      );
    });
  });

postListPromise
  .then((response) => postDetailsPromise(response))
  .then((response) => {
    console.log("POST DEtavsrgrerhq");
  })
  .catch((error) => {
    console.log("Call Failed => ", error);
  });
