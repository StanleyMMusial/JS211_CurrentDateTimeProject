// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertNumber = (numberStringed) => {
  let number = document.getElementById('number').value
  numberStringed = number.toString()

  document.getElementById("display-string").innerHTML = number + " has been converted to a string."
}

// Write a JavaScript program to convert a string to the number.
const convertString = (stringNumbered) => {
  let string = document.getElementById('string').value
  stringNumbered = parseInt(string)

  document.getElementById("display-number").innerHTML = string + " has been converted to a number."
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let dataType = ''

const returnType = (dataType) => {
  return typeof dataType
}

console.log(returnType)
  
// Write a JavaScript program that adds 2 numbers together.

let number1 = 8

let number2 = 4

const add = (number1, number2) => {
  return number1 + number2
}

console.log(add)



// Write a JavaScript program that runs only when 2 things are true.

let first = true
let second = true

const trueD = (first, second) => {
  if (first === true && second === true) {
    console.log("Both things are true!")
  }
}

console.log(trueD)

// Write a JavaScript program that runs when 1 of 2 things are true.

let argument1 = true
let argument2 = false

const onlyOneTrue = (argument1, argument2) => {
  if (!argument1 && argument2 || argument1 && !argument2) {
  console.log('Run program')
  }
}

// Write a JavaScript program that runs when both things are not true.  


let third = false
let fourth = false

const falseD = (first, second) => {
  if (third === false && fourth === false) {
    console.log("Both things are false!")
  }
}

console.log(falseD)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
