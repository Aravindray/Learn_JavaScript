// Higher Order Functions

/*
Higher Order Function is a function which takes other function as a parameter or return a function as a value. The function passed as parameter is called callback function.
*/

// Callback function

/*
A callback function which can be passed as a parameter to other functions.
*/

console.log('Callback function example')

function callback(n) {
    return n ** 2
}

function doSomething(otherFunction, n) {
    return otherFunction(n) * n
}

console.log(doSomething(callback, 2))

// Higher Order Function

/*
Higher Order Functions return functions as a value.
*/

console.log('Higher Order Functions Example')

const higherOrder = n => {
    const firstLayerFunction = m => {
        const secondLayerFunction = o => {
            return 2 * n + 3 * m + o
        }
        return secondLayerFunction
    }
    return firstLayerFunction
}
console.log(higherOrder(2)(3)(10))

// Setting Time

/*
In JavaScript we can execute some block of code repeatedly certain interval of time or we can set to execute the code after some delay (wait) by using below methods
1. setTimeout
2. setInterval
*/

// setTimeout Function

/*
In JavaScript, setTimeout function execute the code some time in the future.

syntax:

setTimeout(callbackFunction, timeDuration)  // timeDuration in milliseconds
*/

console.log('setTimeout Function Example')
function isItPossible() {
    function sayHello(name) {
        console.log(`Hello, ${name}`)
    }
    return sayHello('Aravind')
}
setTimeout(isItPossible, 2000)

function sayHi(name) {
    console.log(`Hi, ${name}`)
}
setTimeout(function() { sayHi('Aravindray') }, 2500)

// setInterval Function

/*
In JavaScript, setInterval higher order function execute the code continuously certain interval of time.

Syntax:

setInterval(callbackFunction, timeDuration) // timeDuration in milliseconds.
*/

const executeThis = () => console.log(`Hello, World!`)
function waitHere() {
    console.log('setInterval Function Example')
    setInterval(executeThis, 5000) // 1000ms = 1s
}
setTimeout(waitHere, 3000)

// More Higher Order function

/*
We will explore some JS builtin function, every below mentioned methods will take callback function.

1. forEach ()
2. map ()
3. filter ()
4. reduce ()
5. find ()
6. every ()
7. some ()
8. sort ()
*/

// forEach() Method

/*
This method works on array only, it iterate every element in an array.

Syntax:

Regular Function
array.forEach(callbackFunction (element, [index, arr]) {
    //code
} ) // Note: [] square bracket parameters are optional

Arrow Function
array.forEach((element,[index, arr]) => { 
    //code }
)

Arrow Function explicit return
array.forEach((element) => //code )
*/

console.log('forEach() Method Examples')

const numbers = [1, 2, 3, 4, 5]

numbers.forEach(num => console.log(num))

const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers))

let sum = 0
numbers.forEach(num => sum += num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'sweden', 'Norway', 'Iceland']
countries.forEach( (country) => console.log(country.toUpperCase()))

// map() Method

/*
This method iterate to the array element and modify the array element.

syntax:

const modifiedArray = originalArray.map(function (element, [index, arr]) {
    // code
})
*/

console.log('map() Method Examples')

const squareNumbers = numbers.map((num) => num * num)
console.log(squareNumbers)

const names = ['Aravind', 'ray', 'mark', 'jim', 'roy']
const upperNames = names.map((name) => name.toUpperCase())
console.log(upperNames)

const countriesNew = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const upperCountries = countriesNew.map(country => country.toUpperCase())
console.log(upperCountries)

const firstThreeLetter = countriesNew.map(country => country.toUpperCase().slice(0,3))
console.log(firstThreeLetter)

// filter() Method

/*
Filter out items with full fill filtering condition and return new array. this works based on condition if condition satisfied or true it filter the true item and create a new array.

syntax:

const filteredArray = originalArray.filter( element => { // logicalCode })
*/

console.log('filter() Method Examples')

const countriesWithLand = countriesNew.filter(country => country.includes('land'))
console.log(countriesWithLand)

const countriesEndsBy_ia = countriesNew.filter(country => country.includes('ia'))
console.log(countriesEndsBy_ia)

const countriesWithFiveLetters = countriesNew.filter(country => country.length === 5)
console.log(countriesWithFiveLetters)

const scores = [
    {name: 'Aravind', score: 95},
    {name: 'Ray', score: 70},
    {name: 'Lidiya', score: 98},
    {name: 'Elias', score: 50},
    {name: 'Martha', score: 85},
    {name: 'John', score: 100},
]

const scoreGreaterEighty = scores.filter(element => element.score > 80)
console.log(scoreGreaterEighty)

// reduce() Method

/*
Reduce takes callback function, callback function takes accumulator, current and optional initial value for accumulator and returns a single value.

syntax:

const newArray = originalArray.reduce(function(accumulator, current) { 
    // code
}, initial)
*/

console.log('reduce() Method Examples')

const sumUsingReduceWithInitial = numbers.reduce( (acc, cur) => {
    console.log('acc',acc)
    console.log('cur',cur)
    console.log()
    return acc + cur}, 0 )
console.log(sumUsingReduceWithInitial)

const sumUsingReduce = numbers.reduce( (acc, cur) => acc + cur )
console.log(sumUsingReduce)

const findMax = numbers.reduce( (acc, cur) => Math.max(acc, cur))
console.log(findMax)

const findMin = numbers.reduce((acc, cur) => Math.min(acc, cur))
console.log(findMin)

// every() Method

/*
It check if 'every' element are satisfied the condition, if it satisfied the condition return boolean true else false.

syntax:

function callback() {
    // code
}

const variableName = originalArray.every(callback)
*/

console.log('every() Method Examples')

let doesEveryElementIsString = countries.every(country => typeof country === 'string')
console.log(doesEveryElementIsString)

let doesEveryElementIsNumber = numbers.every(num => typeof num === 'number')
console.log(doesEveryElementIsNumber)

let isReallyUpper = upperCountries.every(country => country === country.toUpperCase())
console.log(isReallyUpper)

// some() Method

/*
It check if 'some' [even one], element are satisfied the condition, if condition satisfied it return boolean true else false.
*/

console.log('some() Method Examples')
const mixedDataTypes = ['aravind', 24, false, 42.2]

console.log('Difference between every() and some()')

const isAllBoolean = mixedDataTypes.every(ele => typeof ele === 'boolean')
console.log(isAllBoolean)

const isThereAnyBoolean = mixedDataTypes.some(ele => typeof ele === 'boolean')
console.log(isThereAnyBoolean)

// find() Method

/*
Return the first element which satisfy the condition if no element matched return undefined.

syntax:

const variableName = originalArray.find(function(parameter) { // code })
*/

console.log('find() Method Example')

const ages = [32, 54, 198, 21, 43, 59, 74, 32]

const someThing = function (element) {
    return element > 20 && element < 25
}

const between_20_25 = ages.find(someThing)
console.log(between_20_25)

const lessThanTen = ages.find(age => age < 10)
console.log(lessThanTen) // If it didn't finds anything it return undefined

const fourLetterName = names.find(name => name.length === 4)
console.log(fourLetterName)

const lessThanSixty = scores.find(score => score.score < 60)
console.log(lessThanSixty)

// findIndex() Method

/*
Similar to find() method, instead of returning element it returns the index number with satisfied condition
*/

console.log('findIndex() Method Examples')

const between_20_25WithIndex = ages.findIndex(someThing)
console.log(between_20_25WithIndex)

const lessThanTenWithIndex = ages.findIndex(age => age < 10)
console.log(lessThanTenWithIndex) // If it didn't finds anything it return -1

const fourLetterNameWithIndex = names.findIndex(name => name.length === 4)
console.log(fourLetterNameWithIndex)

const lessThanSixtyWithIndex = scores.findIndex(score => score.score < 60)
console.log(lessThanSixtyWithIndex)

// sort() Method

/*
The sort() method arrange the element either ascending or descending with lexicographic method. by 
default sort method sort the string values but not work for numbers. This method modifies original array.

syntax:

originalArray.sort(callback)
*/

console.log('sort() Method Examples')

console.log(names)
names.sort()
console.log(names)

console.log('sort() method doesn\'t work well in numbers')
console.log(ages)
ages.sort()
console.log(ages)

// Regular Function
function sortAscending(a, b) {
    return a - b
}

ages.sort(sortAscending)
console.log(ages)

console.log('sort() name by length')

console.log('Original',names)
names.sort((a, b) => a.length - b.length)
console.log('Sort by length ascending',names)
names.sort((a, b) => b.length - a.length)
console.log('Sort by length descending',names)

const users = [
    {name: 'Aravind', age: 24},
    {name: 'Brook', age: 50},
    {name: 'Eyob', age: 100},
    {name: 'Elias', age: 22},
    {name: 'Cinderella', age: 24}
]

console.log('sort() object array by name ascending')

const sortName = (firstName, secondName) => firstName.name.localeCompare(secondName.name)
const sortAge = (firstAge, secondAge) => firstAge.age - secondAge.age

console.log(users)
users.sort(sortName) // this use localeCompare() method
console.log('This uses localeCompare() method',users)

console.log(users)
users.sort(sortAge)
console.log(users)
