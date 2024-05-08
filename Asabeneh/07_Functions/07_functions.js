// Functions

/*
A function is a reusable block of code which perform certain tasks. To store a data to a function, a function has to return certain data type. Function makes code clean and easy to read, reusable and easy to test.

Syntax:

function functionName() {
    // code goes here
}

There are 4 ways to create or declare a function:
1. Declaration Function
2. Expression Function
3. Anonymous Function
4. Arrow Function
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

// Function without parameter and return

console.log('Function without parameter and return')

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
