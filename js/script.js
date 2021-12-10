console.log("start");

setTimeout(()=>{
    console.log("2 mili seconds later")
}, 2000);

setTimeout(()=>{
    console.log("1 mili seconds later")
}, 1000);

setTimeout(()=>{
    console.log("0 mili seconds later")
}, 0);

console.log("end");