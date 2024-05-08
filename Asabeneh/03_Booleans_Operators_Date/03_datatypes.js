// Data Types
// Note: Everything in a JavaScript is an object.

/* 
Data types are divided into 2 parts.
1. Primitive data types (are immutable [non-modifiable]) - Strings, Numbers, Booleans, Null, Undefined, Symbol.
2. Non Primitive data types (are mutable [modifiable]) - Objects, Arrays.
*/

// Primitive data types: Boolean

/*
    One of the two values: true or false
*/

console.log('Boolean Examples')
let isLightOn = true
let isLightOff = false
let isRaining = true
let ifHungry = false
let isMarried = false
let trueValue = 4 > 3
let falseValue = 3 < 4
console.log(typeof isLightOn)
console.log(typeof isLightOff)
console.log(typeof isRaining)
console.log(typeof ifHungry)
console.log(typeof isMarried)
console.log(typeof trueValue)
console.log(typeof falseValue)

/* 
Truthy Values
1. All positive numbers are truthy value except zero (0)
2. All string are truthy except empty string
3. The boolean true

Falsy Values
1. 0
2. null
3. undefined
4. NaN
5. the boolean false
6. '', "", ``, are false value
*/

// Primitive data types: Undefined

/*
If we declare the variable without values it will become undefined, and If a function without returning anything also undefined
*/

console.log('Undefined Examples')
let firstName
let arrOfNumbers
console.log(typeof firstName)
console.log(typeof arrOfNumbers)

// Primitive data types: Null

/*
Nothing value
*/

console.log('Null Examples')
let lastName = null
console.log(lastName)
console.log(typeof lastName)

// Operators

/*
Types of Operators
1. Assignment Operators
2. Arithmetic Operators
3. Comparison Operators
4. Logical Operators
5. Increment Operator
6. Decrement Operator
7. Ternary Operator
*/

// Operators: Assignment Operators

/*
Syntax:

keyword variableName = Value
= sign is assignment operator

Other Assignment Operators are
+=, -=, *=, /=, %=, **=
*/

console.log('Assignment Operators Example')

let fullName = 'Aravindray'
console.log(fullName)

let a1 = 10
let b1 = 12
a1 += b1 // a1 = a1 + b1
console.log(a1)

let a2 = 32
let b2 = 31
a2 -= b2 // a2 = a2 - b2
console.log(a2)

let a3 = 43
let b3 = 2
a3 *= b3 // a3 = a3 * b3
console.log(a3)

let a4 = 32
let b4 = 8
a4 /= b4 // a4 = a4 / b4
console.log(a4)

let a5 = 83
let b5 = 98
a5 %= b5 // a5 = a5 % b5
console.log(a5)

let a6 = 2
let b6 = 7
a6 **= b6 // a6 = a6 ** b6
console.log(a6)

// Operators: Arithmetic Operators

/*
Arithmetic Operators are Mathematic Operators

1. Addition (+)
2. Subtraction(-)
3. Multiplication (*)
4. Division (/)
5. Modulus (%)
6. Exponential (**)

*/

console.log('Arithmetic Operators Examples')

let c1 = 2
let d1 = 8
let e1 = c1 + d1
let e2 = d1 - c1
let e3 = c1 * d1
let e4 = d1 / c1
let e5 = d1 % c1
let e6 = d1 ** c1

console.log('Addition',e1)
console.log('Subtraction',e2)
console.log('Multiplication',e3)
console.log('Division',e4)
console.log('Modulus',e5)
console.log('Exponential',e6)

// Operators: Comparison Operators

/*
1. == (Equal in Values Only)
2. === (Equal in both values and data type)
3. != (Not Equal in values)
4. !== (Not Equal both values and data type)
5. < (Less than)
6. > (Greater than)
7. <= (Less than equal to)
8. >= (Greater than equal to)
*/

console.log('Comparison Operators Examples')

console.log(3 > 2)
console.log(3 >= 2)
console.log(3 < 2)
console.log(2 < 3)
console.log(2 <= 3)
console.log(3 == 2)
console.log(3 != 2)
console.log(3 == '3')
console.log(3 === '3')
console.log(3 !== '3')
console.log(3 != 3)
console.log(3 !== 3)
console.log(0 == false)
console.log(0 === false)
console.log(0 == '')
console.log(0 === '')
console.log(0 == ' ')
console.log(1 == true)
console.log(1 === true)
console.log(undefined == null)
console.log(undefined === null)
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(typeof NaN)

console.log('mango'.length == 'avocado'.length)
console.log('mango'.length != 'avocado'.length)
console.log('mango'.length < 'avocado'.length)
console.log('milk'.length == 'meat'.length)
console.log('milk'.length != 'meat'.length)
console.log('tomato'.length == 'potato'.length)
console.log('python'.length > 'dragon'.length)

// Operators: Logical Operators

/*
Logical Operators are: &&, ||, !
*/

console.log('Logical Operators Examples')

console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)
console.log(!false)

// Operators: Increment Operators

/*
In JS Increment Operator will increase the value stored in the variable by one.
Types of Increment Operators:
1. Post-Increment
2. Pre-Increment
*/

console.log('Increment Operator Example')

let count1 = 0
console.log(count1++)
console.log(count1)

let count2 = 0
console.log(++count2)
console.log(count2)

// Operators: Decrement Operators

/*
In JS Decrement Operator will decrease the values stored in the variable by one.
Types of Decrement Operators:
1. Post-Decrement
2. Pre-Decrement
*/

console.log('Decrement Operators Examples')

let count3 = 1
console.log(count3--)
console.log(count3)

let count4 = 1
console.log(--count4)
console.log(count4)

// Operators: Ternary Operators

/*
Syntax: 

condition ? if condition true execute this : else execute this

*/

console.log('Ternary Operator Examples')

isRaining ? console.log('You need a rain coat') : console.log('You don\'t need a rain coat')

let num = 5
num > 0 ? console.log('Number is Positive') : console.log('Number is Negative')

// Windows Methods

/*
Some Windows Methods are
1. alert() - Show Pop-up in the browser window
2. prompt() - Get Input from the user (as string data type)
3. confirm() - Get OK (true) or Cancel (false) input from the user
*/

/*
console.log('Windows Method Examples')

alert('Welcome!')
alert('Hello World')

let age = prompt('Enter the age')

let exit = confirm('Multiple Tabs are Opened are you sure want to close all of them?')
*/

// Date Objects

/*
Syntax:

let variableName = new Date()

Now variableName is the object of Date and Time. Methods to work with date and time will start from 'get' word let's explore more about date and time methods.

1. getFullYear() - This method gives year as four digit number. Ex., 2024
2. getMonth() - This method gives month as number from 0 to 11. Ex., 5
3. getDate() - This method gives date as number from 1 to 31. Ex., 8
4. getHours() - This method gives hours as number from 0 to 23. Ex., 20
5. getDay() - This method gives weekday as number from 0 to 6. Ex., Sunday is 0 and Saturday is 6
6. getMinutes() - This method gives minutes as number from 0 to 59. Ex., 4
7. getSeconds() - This method gives seconds as number from 0 to 59. Ex., 40
8. getMilliSeconds() - This method gives milliseconds as number from 0 to 999. Ex., 343
9. getTime() - This method give Unix time in milliseconds from Jan 1, 1970.
*/

let now = new Date()
console.log(now)
console.log('Current Full Year',now.getFullYear())
console.log('Current Month',now.getMonth())
console.log('Current Date',now.getDate())
console.log('Current Day',now.getDay())
console.log('Current Hour',now.getHours())
console.log('Current Minute',now.getMinutes())
console.log('Current Seconds',now.getSeconds())
console.log('Current Milliseconds',now.getMilliseconds())
console.log('Accessing Unix Time by getTime()',now.getTime())
console.log('Accessing Unix Time by Date.now()',Date.now())

console.log('Human readable time format')
console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
