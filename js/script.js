// console.log("start");
//
// setTimeout(()=>{
//     console.log("2 mili seconds later")
// }, 2000);
//
// setTimeout(()=>{
//     console.log("1 mili seconds later")
// }, 1000);
//
// setTimeout(()=>{
//     console.log("0 mili seconds later")
// }, 0);
//
// console.log("end");

// **********************************************

console.log("start");
//
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({email});
        }, 3000);
    })
}

//
function getUserCourses(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['course 1', 'course 2', 'course 3']);
        }, 3000);
    })
}

//
function getCourseDetails(courseId) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Course Title is Madmad');
        }, 3000);
    });
}

//
//
 loginUser("mamad.taheri@gmail.com", 123456789)
     .then(user => getUserCourses(user.email))
     .then(courses => getCourseDetails(courses[0]))
     .then(detail => console.log(detail));
//
console.log("end");


// **********************************************

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("successful");
//         reject(new Error("user not found"));
//     }, 3000);
// });
//
// promise
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));