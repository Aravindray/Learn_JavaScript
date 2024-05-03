// Data Types
// Note: Everything in a JavaScript is an object.
/* 
Data types are divided into 2 parts.
1. Primitive data types (are immutable [non-modifiable]) - Strings, Numbers, Booleans, Null, Undefined, Symbol.
2. Non Primitive data types (are mutable [modifiable]) - Objects, Arrays.
*/

// Primitive data types: Numbers
/*
Numbers are integer and decimal values.

syntax:
keyword variableName = value

Math object provides a lots of methods to work with numbers.

few methods are Math.PI, Math.round(), Math.floor(), Math.ceil(), Math.min(), Math.max(), Math.random(), Math.abs(), Math.sqrt(), Math.pow(), Math.E, Math.log(), Math.LN2, Math.LN10, Math.sin(), Math.cos()
*/

// Examples of Math Objects

const PI = Math.PI
console.log(PI)

// Rounding
console.log('Math.round(PI) =', Math.round(PI))
console.log('Math.round(9.81) =', Math.round(9.81))
console.log('Math.floor(PI) =', Math.floor(PI))
console.log('Math.ceil(PI) =', Math.ceil(PI))
console.log('Math.min(32, 0, -2, 3, 32.12) =', Math.min(32, 0, -2, 3, 32.12))
console.log('Math.max(32, 0, -2, 3, 32.12) =', Math.max(32, 0, -2, 3, 32.12))

// Random Number
const randNum = Math.random() // creates a random number between 0 to 0.999999
console.log('A random number',randNum)

// Let's generate a random number between 0 to 10
const num = Math.floor(Math.random() * 11)
console.log('A random number between 0 to 10',num)

// Other Math Methods

console.log('Math.abs(-10)',Math.abs(-10)) // Absolute Value
console.log('Math.sqrt(121)',Math.sqrt(121)) // Square root
console.log('Math.pow(2, 3)',Math.pow(2, 3)) // Power
console.log('Math.E',Math.E) // Euler's Number
console.log('Math.log(2)',Math.log(2)) //Logarithm
console.log('Math.log(10)',Math.log(10)) //Logarithm
console.log('Math.LN2',Math.LN2) // Natural Logarithm
console.log('Math.LN10',Math.LN10) // Natural Logarithm
console.log('Math.LN5',Math.LN5) // Natural Logarithm
console.log('Math.sin(0)',Math.sin(0)) // Trigonometry
console.log('Math.sin(90)',Math.sin(90)) // Trigonometry
console.log('Math.cos(60)',Math.cos(60)) // Trigonometry
console.log('Math.cos(120)',Math.cos(120)) // Trigonometry

// Primitive data types: Strings
/* 
Strings are text which are under single, double, or back-tick quote.

Syntax:
keyword variableName = 'value' | "value" | `value`

Some String Method - length, Accessing Characters in string[indexNumber], toUpperCase(), toLowerCase(), substr(startIndex, noOfCharacters), substring(startIndex, endIndex), split(delimiter), trim(), includes(what to find), replace(existingValue, newValue), charAt(indexNumber), charCodeAt(indexNumber), indexOf(a character | a word), lastIndexOf(a character | a word), concat(value1, value2, value3), startsWith(value), endsWith(value), search(string | regular-expression), match(string | Regular expression), repeat(numberOfTime) 
*/

let firstName = 'Aravind'
console.log('First Name', firstName)
let lastName = 'ray'
console.log('Last Name', lastName)
let fullName = firstName + lastName // String concat with + operator [Out of date method]
console.log('Full Name', fullName)

// Long Literal String

const paragraph = "Lorem Ipsum is simply dummy text of the printing and\
typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\
since the 1500s, when an unknown printer took a galley of type and scrambled it to\
make a type specimen book. It has survived not only five centuries, but also the\
leap into electronic typesetting, remaining essentially unchanged. It was\
popularised in the 1960s with the release of Letraset sheets containing Lorem\
Ipsum passages, and more recently with desktop publishing software like Aldus\
PageMaker including versions of Lorem Ipsum."
console.log(paragraph)

// Escape Sequence in Strings
/*

\n - new line
\t - Tab, means 8 spaces
\\ - Back slash
\' - Single quote
\" - Double quote

*/

console.log('I hope everyone is enjoying 30 days of JavaScript. \nDo you?')
console.log('One\tTwo\tThree')
console.log('This is a backslash symbol (\\)')
console.log("In every programming language starts with \"Hello, World!\"")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2024')

// Template Literals (Template Strings)
/*
Syntax: 
`String literal text ${expression}` (Don't forgot the backtick)
*/

let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a+b}`)

let bornYear = 1999
let planet = 'Earth'
let language = 'JavaScript'
let role = 'Student'

let personalInfo = `I am ${fullName}. I am 24. I live in ${planet}. I am a ${role} and I am currently learning ${language}.` // ES6 recommended method
console.log(personalInfo)

// String Methods

console.log('Length of Full Name', fullName.length) // Length
console.log('5th Character of Full Name',fullName[5]) // Accessing character
console.log('Convert to UPPERCASE',fullName.toUpperCase()) // toUpperCase()
console.log('Convert to lowercase',fullName.toLowerCase()) // toLowerCase()
console.log('substr(indexStart, noOfCharacter)',firstName.substr(2,4)) // substr()
console.log('substring(indexStart, indexEnd)',fullName.substring(4,10)) // substring()

let string = '30 Days of JavaScript'
console.log('Split on Spaces',string.split(' ')) // split()

let countries = 'Finland, Sweden, Norway, Denmark, Iceland'
console.log('Split on comma',countries.split(',')) // split()
console.log('Split on comma and spaces',countries.split(', ')) // split()

let extraSpaces = '      800    Days    '
console.log('Trim extra spaces',extraSpaces.trim())

console.log('Check if the string includes the given string and return true or false:',string.includes(30)) // includes
console.log('Check if the string includes the given string and return true or false:',string.includes('days')) // includes
console.log('Lets replace the string',string.replace('JavaScript', 'Python')) // replace()
console.log('Take index number return character',string.charAt(1)) // charAt()
console.log('Take index number and return character ASCII code',string.charCodeAt(4)) //charCodeAt()
console.log('Take the substring or character return the index number',string.indexOf("a")) // indexOf()
console.log('Take the substring or character return the last index number',string.lastIndexOf('a')) //lastIndexOf()
console.log('Concat given values',extraSpaces.concat('is', ' approximately', ' 26', ' months')) // concat()

let message_1 = 'Love is the best to in this world'
console.log('Check whether the given substring startswith the message_1',message_1.startsWith('Love')) // startsWith()
console.log('Check whether the given substring startswith the message_1',message_1.startsWith('love')) // startsWith()
console.log('Check whether the given substring endswith the message_1',message_1.endsWith('world')) // endsWith()
console.log('Check whether the given substring endswith the message_1',message_1.endsWith('life')) // endsWith()

let message_2 = 'I love JavaScript. If you do not love JavaScript what else can you love'
let pattern = /love/gi

console.log('Search the string or regular expression return index no', message_2.search(/javascript/gi)) // search
console.log('Search the string or regular expression return index no', message_2.search('love')) // search
console.log('Match the string or regular expression return array',message_2.match('love')) // match()
console.log('Match the string or regular expression return array',message_2.match(pattern)) // match()

let txt = 'In 2019, I ran 30 days of Python. Now, In 2022 I am super excited to start this challenge'

console.log('Lets use regEx to find digits',txt.match(/\d+/)) // match()
console.log('Lets use regEx to find digits with flag (g)lobal',txt.match(/\d+/g)) // match()

let again = 'Love '
console.log('Lets repeat',again.repeat(10)) // repeat

// Checking Data Type

/*
To check the data type of a value in a variable we use typeof keyword
*/

console.log(typeof fullName) // typeof
console.log(typeof bornYear) // typeof
console.log(typeof NaN) // typeof
console.log(typeof true)  // typeof
console.log(typeof undefined) // typeof
console.log(typeof null) // typeof

// Changing Data Type (Casting)

/*
Which means converting one data type to another data type. some methods are parseInt(), parseFloat(), Number(), + sign, str(), 
*/

// String to Number: Integer

let strTen = '10'
let prsInt = parseInt(strTen) // parseInt()
console.log('prsInt',prsInt)
let strToInt = Number(strTen) // Number()
console.log('strToInt',strToInt)
let plusInt = +strTen // +
console.log('plusInt',plusInt)

// String to Number: Float

let strNine = '9.81'
let prsFloat = parseFloat(strNine) // parseInt()
console.log('prsFloat',prsFloat)
let strToFloat = Number(strNine) // Number()
console.log('strToFloat',strToFloat)
let plusFloat = +strNine // +
console.log('plusFloat',plusFloat)

// Float to Integer

let floatNum = 9.81
let floatToInt = parseInt(floatNum) // parseInt()
console.log('Float to Integer',floatToInt)
