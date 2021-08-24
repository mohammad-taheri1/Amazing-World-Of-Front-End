// Withouth oop

// var videoName = "Tntro to JS";
// var fileFormat = "mp4";
// var duration = "2:48";
// var owner = "Qaifi";

// function getVideoName() {
//     return videoName;
// }

// function getFileFormat() {
//     return fileFormat;
// }

// function getDuration() {
//     return duration;
// }

// function getOwner() {
//     return owner;
// }

// With oop

// var video = {
//   videoName: "Tntro to JS",
//   fileFormat: "mp4",
//   duration: "2:48",
//   owner: "Qaifi",
//   getVideoName : function() {
//       return this.videoName
//   },
//   getFileFormat: function() {
//       return this.fileFormat
//   },
//   getDuration: function() {
//       return this.duration
//   },
//   getOwner: function() {
//       return this.owner
//   }
// };

// console.log(video.getVideoName())

// ***********************************************************************

// var firstName = "Roseline";
// var person = {
//   firstName: "Jack",
//   yearOfBirth: 1990,
//   job: "Pilot",
//   getName: function () {
//     console.log(this.firstName);
//     console.log(firstName);
//   },
//   parents: {
//     firstName: "Ryan",
//     yearOfBirth: 19,
//     job: "Pilot",
//     getName: function () {
//       console.log(this.firstName);
//       console.log(firstName);
//     },
//   },
// };

// person.getName();
// person.parents.getName();



// ***********************************************************************
//       ____________________________________
//      |                Person              |
//      |       ______________________       |
//      |      |         name         |      |
//      |      |______________________|      |
//      |       ______________________       |
//      |      |      yearOfBirth     |      |
//      |      |______________________|      |
//      |       ______________________       |
//      |      |          job         |      |
//      |      |______________________|      |
//      |       ______________________       |
//      |      |      calculateAge    |      |
//      |      |______________________|      |
//      |                                    |
//      |____________________________________|
//
// ***********************************************************************

// var person = {
//     name: 'Jack',
//     yearOfBirth: 1990,
//     job: 'Secret Agent'
// }

//withouth prototype
// function Person(pName, pyearOfBirth, pJob) {
//     this.name = pName
//     this.yearOfBirth = pyearOfBirth
//     this.job = pJob

//     this.calculateAge = function() {
//         console.log(2021 - this.yearOfBirth)
//     }
// }

//with prototype
function Person(pName, pyearOfBirth, pJob) {
    this.name = pName
    this.yearOfBirth = pyearOfBirth
    this.job = pJob 
}

Person.prototype.lastName = "Clark"

Person.prototype.calculateAge = function() {
    console.log(2021 - this.yearOfBirth)
}

Person.prototype.updateYearOfBirth = function(birthYear) {
    this.yearOfBirth = birthYear
}

var john = new Person('John', 1992, 'Pilot')

// console.log(john.lastName)

var claire = new Person('Clare', 1994, 'Doctore')

// console.log(claire.lastName)
// claire.calculateAge()

john.calculateAge()
john.updateYearOfBirth(1965)
john.calculateAge()

