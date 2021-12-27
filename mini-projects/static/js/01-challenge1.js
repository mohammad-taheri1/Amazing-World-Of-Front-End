// Challenge 1: Your Age in Days

function handleAgeInDays() {
    reset();
    let birthYear = prompt('What Year were you born... Good friend?');
    let finalAgeInDays = (2022 - parseInt(birthYear)) * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode("You are " + finalAgeInDays + "days old!");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.querySelector("#ageInDays") && document.querySelector("#ageInDays").remove();
}

// Challenge 2: Cat Generator
function generateCat(){
   let image = document.createElement('img');
   let div = document.getElementById("flex-cat-gen");
   image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
   div.appendChild(image);
}

// Challenge 3: Rock, Paper, scissors
function rpsGame(yourchoice) {
    // console.log(yourchoice.id);
    let humanChoice, botChoice;
    // humanChoice = yourchoice.id;
    botChoice = numberTochoice(randToRpsInt());
    // console.log(botChoice)
    // let results = decideWinner(humanChoice, botChoice);
    // let message = finalMessage(results);  // 'You WON'
    // rpsFrontEnd(yourchoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberTochoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}