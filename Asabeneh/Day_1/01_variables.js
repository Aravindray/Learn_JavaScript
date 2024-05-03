// Variables

/* we use let, const and var keywords to declare the variables and values. 
'let' is used to variable if the value keep changing
'const' keyword is used to variable that value doesn't change like value of PI, country name and gravity...
'var' is outdated keyword */

// Variable declaration rules

/* 
1. Variable name should not begin with number for ex., let 1stName
2. Variable name doesn't allow special character except underscore (_) and dollar sign ($) for ex., let first-name
3. Variable name follows camelCase convention for ex., let firstName
4. No space between words for ex., let first name
*/

// Syntax

// let nameOfVariable = value

// Declaring changing values

let firstName = 'Aravind'
let lastName = 'ray'
let birthYear = 1999
let isMarried = false

console.log('Changing Values')
console.log(firstName, lastName, birthYear, isMarried)

// Declaring Constant values

const PI = 3.14
const gravity = 9.81 // earth gravity by m/s2
const boilingPoint = 100 // Water boiling point temperature in celsius

console.log('Constant values')
console.log('Value of PI is', PI)
console.log('Value of gravity is', gravity)
console.log('Value of boiling point', boilingPoint)

// Undefined and Null

let whatIsYourName
let empty = null
console.log('Undefined and Null values')
console.log('Undefined', whatIsYourName)
console.log('Empty', empty)
