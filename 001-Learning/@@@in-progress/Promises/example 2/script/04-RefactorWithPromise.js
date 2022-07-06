console.log("1");

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user is fetched from server");
            resolve({userEmail: email})
        }, 3000);
    })
    
}

function getUserCourses(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("courses are fetched from server");
            resolve(['course 1', 'course 2', 'course 3']);
        }, 3000);
    })
}

function getCourseDetails(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('course title is dafsdfakdfadsk');
        }, 3000);
    })
}

// const user = loginUser("mamad", "mamadpassword", (user) => {
//     console.log(user);
//     getUserCourses(user.userEmail, (courses) => {
//         console.log(courses);
//         getCourseDetails(courses[0],(response) => {
//             console.log(response);
//         })
//     });
// });

console.log("3")

// using then && catch

// loginUser("mamad", "mamadpassword")
//     .then(user => getUserCourses(user.userEmail))
//     .then(courses => getCourseDetails(courses[0]))
//     .then(detail => console.log(detail))
//     .catch(error => console.log(error));

// using async && await


async function displayCourseDetail(){
    const user = await loginUser("mamad", "mamadpassword");
    console.log(user);
    const courses = await getUserCourses(user.userEmail);
    console.log(courses);
    const courseDetail = await getCourseDetails(courses[0]);
    console.log(courseDetail);
}

displayCourseDetail();