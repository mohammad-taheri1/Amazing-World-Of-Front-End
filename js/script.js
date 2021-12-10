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

// console.log("start");
//
// function loginUser(email, password, callback){
//     setTimeout(()=>{
//         callback({ email});
//     },3000);
// }
//
// function getUserCourses(email, callback){
//     setTimeout(()=>{
//          callback(['course 1', 'course 2', 'course 3']);
//     },3000);
// }
//
// function getCourseDetails(courseId, callback){
//     setTimeout(()=>{
//          callback('Course Title is Madmad');
//     },3000);
// }
//
//
// loginUser("mamad@hmail.com", 11111,(user)=>{
//     console.log("data is ready");
//     getUserCourses(user.email, (courses) => {
//         console.log(courses);
//         getCourseDetails(courses[0],(detail) => {
//             console.log(detail);
//         });
//     });
// });
//
// console.log("end");


// **********************************************
