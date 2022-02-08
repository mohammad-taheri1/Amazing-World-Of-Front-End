function gte(a,b){
    return a>=b ? true : false;
}

function welcomeMessage(name){
    return `hello ${name}. welcome to jest tutorial`;
}

function shoppingList(){
    return [
        'peanut',
        'cake',
        'milk'
    ]
}

module.exports = {gte , welcomeMessage, shoppingList};