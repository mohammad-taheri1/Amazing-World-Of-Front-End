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

function loginUser(email, password, callback){
    setTimeout(()=>{
        console.log("data is ready");
        callback({ email});
    },3000);
}
loginUser("mamad@hmail.com", 11111,(user)=>{
    console.log(user);
});

console.log("end");