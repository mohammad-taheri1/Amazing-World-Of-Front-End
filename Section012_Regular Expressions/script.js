//  |      /pattern-string/flags
//  |      
//  |      /pen      => search for first appereance
//  |      /pen/g    => global => search all  => case sensitive
//  |      /pen/gi   => global => search all => case insensitive
//  |      [ABC]irm  => (A || B || C) && irm
//  |      [ABC]irm  => Air Birm Circle   => 2 will be selected
//  |      [ABC]ir  => (A || B || C) && ir
//  |      [ABC]ir  => Air Birm Circle   => all will be selected
//  |      [A-Z]ir  => (A...Z) && ir
//  |      [0-9]ir  => (0...9) && ir
//  |      [0-5]    => (0...9)
//  |      [a-z][0-5]        => 1 alphabet && 1 number
//  |      [a-z][a-z][0-5]   => 2 alphabet && 1 number
//  |      [a-z][A-Z]        => 1 lowerCase alphabet && 1 upperCasealphabet
//  |      [a-zA-Z]          => all alphabets will be select
//  |      [a-zA-Z0-9]       => all alphabets and numbers
//  |      [\w]              => all alphabets and numbers
//  |      [0-9]           => (0...9) => all numbers
//  |      [^0-9]          => anything except numbers
//  |      [\s]            => just spaces
//  |      [\S]            => anything except spaces
//  |      [\d]            => only numbers
//  |      {}              =>  length quantifier
//  |      [\d]{3}         =>  length of numbers only 3 
//  |      [\d]{2,4}       =>  length of numbers between 2 and 4 => 2...3...4
//  |      [\d]{1,}        =>  length of numbers greater then 1
//  |      #[a-zA-Z0-9]{6} =>  # -> 6(numbers and alphabets)
//  |      #[\w]{6}        =>  # -> 6(numbers and alphabets) -> after it does not matter
//  |      ^               =>  start with  
//  |      $               =>  end with  
//  |      ^#[\w]{6}$      =>  # -> 6(numbers and alphabets) -> exactly 6 numbers- not more 
//  |      https{0,1}      =>  http && https  
//  |      https?          =>  http && https  
//  |      ////////
//  |      ^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]$
//  |      => 5(alphabets)->4(numbers)->1(alphabet)

// var str = "&This 101 is a black ball pen. This pen 102 is really PEN."

// var pattern = /pen/gi;
// var pattern = /[0-9]+/gi;
// var pattern = /./ig;

// var pattern = new RegExp('pen','gi')
// var pattern = new RegExp('\s','gi')
// var pattern = new RegExp('[0-9]+','gi')

// console.log(str.search(pattern))

// console.log(pattern.test(str))

// console.log(str.match(pattern))

// var str = "9988776655"
// var str = "998877665500"
// var str = "+919988776655"

// var pattern = /[\d]/g
// var pattern = /^(\+91)[\d]{10}$/g

// console.log(str.match(pattern))

// var str = "www.edyoda.com"
// var str = "www.google.com"
// var str = "www.facebook.com"
// var str = "www.facebook.org"

// var pattern = /^www\.[\w]+\.(com|co|in|org)$/g

// console.log(str.match(pattern))






const username  = document.querySelector('#username')
const loginForm = document.querySelector('#login-form')
const usernameError = document.querySelector('#username-err')

var regexPattern = /^[\w]{6,8}$/

username.addEventListener('input', (e) => {
    var currentValue = e.target.value
    var valid = regexPattern.test(currentValue)
    if(valid) {
        usernameError.style.display = 'none'
    } else {
        usernameError.style.display = 'block'
    }
})



