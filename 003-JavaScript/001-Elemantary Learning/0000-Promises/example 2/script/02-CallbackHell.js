console.log("1");

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("user is fetched from server");
        // return ({userEmail: email})
        //
        callback({userEmail: email});
    }, 3000);
}

function getUserCourses(email, callback){
    setTimeout(() => {
        callback(['course 1', 'course 2', 'course 3']);
    }, 3000);
}

function getCourseDetails(id, callback){
    setTimeout(() => {
        callback('course title is dafsdfakdfadsk');
    }, 3000);
}

const user = loginUser("mamad", "mamadpassword", (user) => {
    console.log(user);
    getUserCourses(user.userEmail, (courses) => {
        console.log(courses);
        getCourseDetails(courses[0],(response) => {
            console.log(response);
        })
    });
});

console.log("3");
