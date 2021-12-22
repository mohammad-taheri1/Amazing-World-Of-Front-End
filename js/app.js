//  function addNumbers(a, b){
//     return (a + b);
//  }
//
// console.log(addNumbers(5, 3));
// console.log(addNumbers(8, 13));
// console.log(addNumbers(34, 17));

// function convertMinutesToSecond(minutes){
//     return minutes * 60;
// }

// console.log(convertMinutesToSecond(1))

// function convertageToSeconds(age){
//     const monthPerYear = 12
//     const dayPerMonth = 30;
//     const hoursPerDay = 24;
//     const minutesPerHour = 60;
//     const secondsPerMinute = 60;
//     return age * monthPerYear * dayPerMonth * hoursPerDay * minutesPerHour * secondsPerMinute;
// }
//
// console.log(convertageToSeconds(2))
//
// function getFFirstItem1(items){
//     return items[0];
// }
//
// const getFFirstItem2 = (items) =>  items[0];
//
// let items = ['Banana', 'godFather', 'Shawsjank', 'pickle'];
//
// console.log(getFFirstItem1(items));
// console.log(getFFirstItem1(items));

function badOrGoodMovie(movie_rating){
    if(movie_rating >= 7) {
        return ("Good Movie");
    } else {
        return("Bad Movie");
    }
}

console.log(badOrGoodMovie(3))
console.log(badOrGoodMovie(9))