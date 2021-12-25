let firstName = "Mamad"
console.log(typeof firstName);

let objFirstName = new String("Mamad")

console.log(typeof objFirstName);

// console.log(objFirstName.length)
// console.log(firstName.length)

String.prototype.myRealType = function(){
    return typeof this;
}

let lastName = "taheri";

console.log(typeof lastName);
console.log(lastName.myRealType())