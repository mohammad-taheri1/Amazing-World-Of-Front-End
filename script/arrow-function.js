function sum1(num){
    return num + 5;
}

const sum2 = function(num){
    return num + 5;
}

const sum3 = num => {
    return num + 5;
}


console.log(sum1(5));
console.log(sum2(5));
console.log(sum3(5));