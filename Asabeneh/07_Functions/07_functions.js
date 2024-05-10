// Functions

/*
A function is a reusable block of code which perform certain tasks. To store a data to a function, a function has to return certain data type. Function makes code clean and easy to read, reusable and easy to test.

Syntax:

function functionName() {
    // code goes here
}

There are 4 ways to create or declare a function:
1. Declaration Function
2. Anonymous Function
3. Expression Function
4. Self Invoking Function
5. Arrow Function
*/

// Functions: Declaration Function

/*
Syntax:

// Declaring a function

function functionName() {

}

// Invoking / Calling a function
functionName()
*/

// Declaration Function: Function without parameter and without return

console.log('Examples of Function without parameter and without return')

function square() {
    let num = 2
    let result = num * num
    console.log(result)
}
square()

function addTwoNumbers() {
    let a = 10
    let b = 20
    let sum = a + b
    console.log(sum)
}
addTwoNumbers()

function printFullName() {
    let firstName = 'Aravind'
    let lastName = 'ray'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
printFullName()

// Declaration Function: Function without parameter and return

/*
Function can return values, if function didn't return values, the value of the function is undefined. from now on we use return instead of print it.
*/

console.log('Examples of Function without parameter and return')

function returnFullName() {
    let firstName = 'Aravind'
    let space = ' '
    let lastName = 'ray'
    let fullName = firstName + space + lastName
    return fullName
}
console.log(returnFullName())

function returnTwoNumbers() {
    let a = 10
    let b = 12
    let total = a + b
    return total
}
console.log(returnTwoNumbers())

// Declaration Function: Function with parameter

/*
We can pass different data type as a function.

syntax:

function functionName(param1) {
    // Code here
}

functionName(arg1)
*/

console.log('Examples of Function with Parameter')

function areaOfCircle(radius) {
    let area = Math.PI * radius * radius
    return area
}
console.log(areaOfCircle(10))

function square1(number) {
    return number * number
}
console.log(square1(10))

// Declaration Function: Functions with 2 parameter

/*
Syntax:

function functionName(para1, para2) {
    // code
}

functionName(arg1, arg2)


*/

console.log('Examples of Functions with 2 parameter')

function sumTwoNumber(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
let result = sumTwoNumber(10, 20)
console.log(result) // if function didn't return value, it didn't store values

function returnSumTwoNumber(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
let newResult = returnSumTwoNumber(10, 25)
console.log(newResult)

function returnFullNameWithPara(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(returnFullNameWithPara('Aravind', 'ray'))

// Declaration Function: Functions with many parameters

/*
Syntax: 

function functionName(para1, para2, para3, ....) {
    // Code
}

functionName(para1, para2, para3,...)
*/

console.log('Example of Function with many parameters')

function sumArrayValues(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

const number = [1, 2, 3, 4, 5]
console.log(sumArrayValues(number))

// Declaration Function: Function with Unlimited no of Parameters

/*
Some times we don't know how many arguments are passed in, Let's see how to handle that in both declaration function (regular function) and arrow function
*/

// Unlimited no of parameters in regular functions

/*
syntax:

function functionName() {
    console.log(arguments)
}

when we pass the arguments into the function, that can be accessed by arguments object inside the function which return the arguments objects.
*/

console.log('Example of Unlimited no of arguments in regular function')

function example1() {
    console.log(arguments)
}
example1(1, 2, 3, 4, 5)

function sumAllNum1() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNum1(1, 2, 3, 4))
console.log(sumAllNum1(10, 20, 13, 40, 10))
console.log(sumAllNum1(15, 20, 30, 25, 10, 33, 40))

// Unlimited no of parameters in arrow function

/*
Unlike regular function,  arrow function doesn't have scoped argument object. So to handle unlimited no of argument we use spread (...) operator.

Let us first learn syntax of arrow function

const functionName = (parameter) => {
    // code
}

const functionName = (...parameter) => {
    // code
}
*/

console.log('Example of Unlimited no of arguments in arrow function')

const example2 = (...something) => {
    console.log(something)
}
example2(1, 2, 3, 4, 5)

const sumAllNum2 = (...arguments) => {
    let sum = 0
    for (const element of arguments) {
        sum += element
    }
    return sum
}

console.log(sumAllNum2(1, 2, 3, 4))
console.log(sumAllNum2(10, 20, 13, 40, 10))
console.log(sumAllNum2(15, 20, 30, 25, 10, 33, 40))

// Functions: Anonymous Function

/*
Anonymous Function or function without functionName

Syntax:

function() {
    // Code
}

*/

console.log('Example fo Anonymous Function')

const anonymousVariable = function() {
    console.log('I am anonymous function and my value is stored in anonymousVariable')
}
anonymousVariable()

const experimentalVariable = function() {
    let a = 5
    let b = 10
    return [a, b]
}
console.log(experimentalVariable())

// Functions: Expression Function

/*
I think Expression Function are same as anonymous function.

Syntax:

const variableName = function() {
    // Code
}

*/

console.log('Example of Expression Function')

const square2 = function(n) {
    return n * n
}
console.log(square2(4))

// Functions: Self Invoking Function

/*
Self Invoking Function are also anonymous function which do not need to call to 
return values.

Syntax:

()() - Remember 2 parenthesis

(function(parameter){ // code })(argument)

*/

console.log('Example of Self Invoking Function')

let example3 = (function(n) {
    console.log(n * n)
})(2) // Function executed without invoking the variable name

let squaredNum = (function(n) {
    return n * n
})(10)
console.log(squaredNum)

// Functions: Arrow Function

/*
Arrow function uses arrow key instead of function keyword.

Syntax:

const functionName/VariableName = (parameter) => {
    // Code
}

functionName/VariableName(arguments)
*/

console.log('Example of Arrow Functions')

console.log('Comparison between Regular Function and Arrow Function')

console.log('Regular Function')

function square3(n) {
    return n * n
}
console.log(square3(5))

console.log('Arrow Function')

const square4 = (n) => {
    return n * n
}
console.log(square4(5))

// One Liner Arrow Function

/*
Syntax:

const functionName/VariableName = parameter => code

Notes: No Need to put return keyword
*/

const square5 = n => n * n
console.log(square5(43))

const changeToUpperCase = arr => {
    let newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

const arrowReturnFullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(arrowReturnFullName('Aravind','ray'))

// Declaration Function: Function with default parameter

/*
We can able to declare value to the parameter when we create the function, it is possible for both regular and arrow functions.

Syntax:

function functionName (para = value, para = value) {
    // code
}

// Invoking a function

functionName()
functionName(argument1, argument2)
*/

console.log('Example of Function with default parameter value')

function greeting(name = 'Peter') {
    let message = `${name}, Welcome to 30 days of JavaScript`
    return message
}
console.log(greeting())
console.log(greeting('Aravind'))

const generateFullName = (firstName = 'Peter', lastName = 'England') => `${firstName} ${lastName}`
console.log(generateFullName())
console.log(generateFullName('Aravind', 'ray'))

const calculateAge = (birthYear, currentYear = new Date().getFullYear()) => {
    let age = currentYear - birthYear
    return age
}
console.log(calculateAge(1999))
console.log(calculateAge(1923))
console.log(calculateAge(1923, 2020))

const weightOfObject = (mass, gravity = 9.81) => {
    let weight = (mass * gravity).toFixed(3) + ' N'
    return weight
}
console.log(weightOfObject(23))
console.log(weightOfObject(23, 1.62))
