function speedCheck(speed){
    const  speedLimit = 70;
    const kmPerPoint = 5;
    if(speed <= speedLimit) {
        console.log("ok !");
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points < 12) console.log(points);
    else console.log("licence is suspended");

}