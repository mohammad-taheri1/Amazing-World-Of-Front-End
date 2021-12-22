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

// function badOrGoodMovie(movie_rating){
//     if(movie_rating >= 7) {
//         return ("Good Movie");
//     } else {
//         return("Bad Movie");
//     }
// }
//
// console.log(badOrGoodMovie(3))
// console.log(badOrGoodMovie(9))

// function isEmptyString(some_string){
//     return !!some_string.length;
// }
//
// console.log(isEmptyString(""));
// console.log(isEmptyString("mamad"));

// function findMinium(listOfNumbers){
//     return (Math.min(...listOfNumbers))
// }
// function findMax(listOfNumbers){
//     return (Math.max(...listOfNumbers))
// }
//
// const numbers = [5,65,2,14,36,895,21,44]
// console.log(findMinium(numbers));
// console.log(findMax(numbers));

function sortBestRatingFirst(numbers) {
    for(let j = 0; j < numbers.length-1; j++){
    let max_num = numbers[j];
    let max_location = j;
    for (let i = j; i < numbers.length; i++) {
        if (numbers[i] > max_num) {
            max_num = numbers[i];
            max_location = i;
        }
    }
    numbers[max_location] = numbers[j];
    numbers[j] = max_num;
    }
    return  numbers;
}

let arr = [5,8,2,9,3,10];

console.log(sortBestRatingFirst(arr))