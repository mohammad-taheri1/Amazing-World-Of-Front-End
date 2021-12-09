// function decleration
function talk(){
    console.log("salam mamad");
}

// function expression
const run = function (){
    console.log("salam mamad");
}

// arguments, rest operator

// function sum(...rest){
//     const total = 0;
//     return rest.reduce((acc, current) => {
//         return acc + current;
//     }, 0)
// }
//
// console.log(sum(3, 4, 8, 12));

// ****************************************************

// getter && setter

// const person = {
//     name: "mamad",
//     lastName: "taheri",
//     get fullName(){
//         console.log(`${this.name} ${this.lastName}`);
//     },
//     set fullName(value) {
//         const pieces = value.split(" ");
//         this.name = pieces[0];
//         this.lastName = pieces[1];
//     }
// }
//
// person.fullName = "Ali dfasdgs"

// ****************************************************

// try && Catch

const person = {
    name: "mamad",
    lastName: "taheri",
    get fullName(){
        console.log(`${this.name} ${this.lastName}`);
    },
    set fullName(value) {
        if(typeof value !== "string")
           throw new Error("wrong type");
        const pieces = value.split(" ");
        this.name = pieces[0];
        this.lastName = pieces[1];
    }
}

try {
    person.fullName = true;
} catch (error){
    console.log(error);
}














