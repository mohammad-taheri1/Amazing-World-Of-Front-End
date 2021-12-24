function letVarExample(){
    if(true){
        var firstName = "Mamad";
        let lastName = "Taheri"
    }

    console.log("function scope Access: ", firstName);
    // console.log("function scope Access: ", lastName);
}

letVarExample();

let anotherExample = "Test";
anotherExample = "test 2"
console.log(anotherExample);

const anotherExample2 = [1,2,3];
anotherExample2.push(4);
console.log(anotherExample2);
