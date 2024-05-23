// Level 1

console.log('// Level 1')

console.log('---Question 1---')

function fullName() {
    let firstName = 'Aravind'
    let secondName = 'ray'
    let space = ' '
    console.log(firstName + space + secondName)
}

fullName()

console.log('---Question 2---')

function newFullName(firstName, secondName) {
    return `${firstName} ${secondName}`
}

console.log(newFullName('Aravind','ray'))

console.log('---Question 3---')

function addNumbers(numOne, numTwo) {
    return numOne + numTwo
}
console.log('Sum of given two numbers is',addNumbers(13, 54))

console.log('---Question 4---')

function areaOfRectangle(length, width) {
    return length * width
}

console.log('Area of Rectangle is',areaOfRectangle(4, 5))

console.log('---Question 5---')

function perimeterOfRectangle(length, width) {
    return 2 * (length + width)
}
console.log('Perimeter of Rectangle is',perimeterOfRectangle(4, 5))

console.log('---Question 6---')

function volumeOfRectPrism(length, width, height) {
    return length * width * height
}
console.log('Volume of Rectangular Prism is',volumeOfRectPrism(3, 5, 8))

console.log('---Question 7---')

function areaOfCircle(radius) {
    return Math.PI * radius * radius
}
console.log('Area of Circle is',areaOfCircle(5))

console.log('---Question 8---')

function circumOfCircle(radius) {
    return 2 * Math.PI * radius
}
console.log('Circumference of Circle is',circumOfCircle(5))

console.log('---Question 9---')

function density(mass, volume) {
    return mass / volume
}
console.log('Density is',density(25, 5))

console.log('---Question 10---')

function speed(distance, timeTaken) {
    return distance / timeTaken
}
console.log('Speed is',speed(25, 5))

console.log('---Question 11---')

function weight(mass, gravity = 9.80) {
    return mass * gravity
}
console.log('weight is',weight(25))

console.log('---Question 12---')

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32 
}
console.log('Celsius to Fahrenheit',convertCelsiusToFahrenheit(100))

console.log('---Question 13---')

function bmi(weight, height) {
    result = (weight / (height * height)).toFixed(2)
    if (result < 18.5) {
        return `Your BMI is ${result} and you are "Underweight"`
    }
    else if(result >= 18.5 && result <= 24.9) {
        return `Your BMI is ${result} and you are "Normal"`
    }
    else if(result >= 25 && result <= 29.9) {
        return `Your BMI is ${result} and you are "Overweight"`
    }
    else if(result >= 30 && result <= 39.9) {
        return `Your BMI is ${result} and you are "Obese"`
    }
    else {
        return `Your BMI is ${result} and you are "Severe Obese"`
    }
}
console.log(bmi(75, 1.75))

console.log('---Question 14---')

function checkSeason(monthName) {
    monthName = monthName.toLowerCase()
    if (monthName === 'december' || monthName === 'january' || monthName === 'february') {
        return `It's a Winter Season`
    }
    else if (monthName === 'march' || monthName === 'april' || monthName === 'may') {
        return `It's a Spring Season`
    }
    else if (monthName === 'june' || monthName === 'july' || monthName === 'august') {
        return `It's a Summer Season`
    }
    else if (monthName === 'september' || monthName === 'october' || monthName === 'november') {
        return `It's a Autumn Season`
    }
    else {
        return `Invalid Input`
    }
}
console.log(checkSeason('June'))

console.log('---Question 15---')

function findMax(firstNum, secondNum, thirdNum) {
    if (firstNum > secondNum) {
        if (firstNum > thirdNum) {
            return firstNum
        }
        else {
            return thirdNum
        }
    }
    else if(secondNum > thirdNum) {
        return secondNum
    }
    else {
        return thirdNum
    }
}

let num1, num2, num3

for (let i = 0; i < 1; i++) {
    num1 = Math.floor(Math.random() * 1001)
    num2 = Math.floor(Math.random() * 1001)
    num3 = Math.floor(Math.random() * 1001)
}
console.log(num1, num2, num3)
console.log(findMax(num1, num2, num3))

// Level 2

console.log('// Level 2')

console.log('---Question 1---')

function solveLinEquation(a, b, c) {
    // ax + by + c = 0
    let slope
    let yIntercept
    // y = mx + c -> where m is slope and c is y-intercept
    if (a === 0) {
        return `a can not be zero`
    }
    slope = (-a / b).toFixed(3)
    yIntercept = c / b
    return [slope, yIntercept]
}
let [slope, yIntercept] = solveLinEquation(2, 3, 6)
console.log(slope)
console.log(yIntercept)

console.log('---Question 2---')

function solveQuadEquation(a, b, c) {
    // formula (root1, root2) = (-b ± √b²-4ac) / 2
    if (a === 0) {
        return 'a can not be zero'
    }
    let root
    let root1
    let root2
    let discriminant = (b ** 2) - 4 * a * c
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        return {root1, root2}
    }
    else if (discriminant === 0) {
        root = -b / (2 * a)
        return {root}
    }
    else {
        let realPart = (-b / (2 * a)).toFixed(2)
        let imgPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2)
        root1 = `${realPart} + i${imgPart}`
        root2 = `${realPart} - i${imgPart}`
        return {root1, root2}
    }
}
console.log(solveQuadEquation(1, -1, 0))

console.log('---Question 3---')

function printArray(arr) {
    for (const element of arr) {
        console.log(element)
    }
}
let someNumbers = [1, 3, 5, 7, 9, 11]
printArray(someNumbers)

console.log('---Question 4---')

function showDateTime() {
    let now = new Date()
    let date = `${now.getDate()}`
    let month = `${now.getMonth() + 1}`
    let year = now.getFullYear()
    let hours = `${now.getHours()}`
    let minutes = `${now.getMinutes()}`
    if (date.length < 2) {
        date = `0${date}`
    }
    if (month.length < 2) {
        month = `0${month}`
    }
    if (hours.length < 2) {
        hours = `0${hours}`
    }
    if (minutes.length < 2) {
        minutes = `0${minutes}`
    }
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
}
showDateTime()

console.log('---Question 5---')

function swapValues(a, b) {
    return [b, a]
}

let [x, y] = swapValues(10, 14)
console.log(`x = ${x}, y = ${y}`)

console.log('---Question 6---')

function reverseArray(arr) {
    let reverseArr = []
    for (let i = arr.length - 1; i >= 0 ; i--) {
        reverseArr.push(arr[i])
    }
    return reverseArr
}
console.log(reverseArray(someNumbers))

console.log('---Question 7---')

function capitalizedArray(arr) {
    let capArr = []
    for (const element of arr) {
        capArr.push(element.toUpperCase())
    }
    return capArr
}

let countries = ['America', 'United Kingdom', 'China', 'Finland', 'Canada']
console.log(capitalizedArray(countries))

console.log('---Question 8---')

let arraysEight = []

function addItem(value) {
    arraysEight.push(value)
    return arraysEight
}
console.log(addItem(4))

console.log('---Question 9---')

let arraysNine = ['Aravind','James', 'Asabeneh','Mark', 'Jim', 'Elon']

const removeItem = (index) => {
    if (index >= arraysNine.length) {
        return 'Index Out of Range'
    }
    arraysNine.splice(index, 1)
    return arraysNine
}
console.log(removeItem(3))

console.log('---Question 10---')

function sumOfNumbers(range) {
    let sum = 0
    for (let i = 1; i <= range; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(5))

console.log('---Question 11---')

function sumOfOdds(range) {
    let sum = 0
    for (let i = 1; i <= range; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(5))

console.log('---Question 12---')

function sumOfEven(range) {
    let sum = 0
    for (let i = 1; i <= range; i++) {
        if(i % 2 === 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfEven(5))

console.log('---Question 13---')

function evensAndOdds(range) {
    let evenCount = 0
    let oddCount = 0
    for (let i = 0; i <= range; i++) {
        if (i % 2 === 0) {
            evenCount += 1
        }
        else {
            oddCount += 1
        }
    }
    console.log(`The numbers of odds are ${oddCount}`)
    console.log(`The numbers of evens are ${evenCount}`)
}
evensAndOdds(100)

console.log('---Question 14---')

function sumOfArguments() {
    let sum = 0
    for (const element of arguments) {
        sum += element
    }
    return sum
}
console.log(sumOfArguments(1, 2, 3))
console.log(sumOfArguments(1, 2, 3, 4))

console.log('---Question 15---')

function randomUserIP() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
}
console.log(randomUserIP())

console.log('---Question 16---')

const hexDigits = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9]

function randomGenerator() {
    let a = hexDigits[Math.floor(Math.random() * hexDigits.length)]
    let b = hexDigits[Math.floor(Math.random() * hexDigits.length)]
    return `${a}${b}`
}

function randomMacAddress() {
    // Example fo MAC Address 2C:54:91:88:C9:E3
    let result = `${randomGenerator()}:${randomGenerator()}:${randomGenerator()}:${randomGenerator()}:${randomGenerator()}:${randomGenerator()}`
    return result
}
console.log(randomMacAddress())

console.log('---Question 17---')

function randomHexNumberGenerator() {
    return `#${randomGenerator()}${randomGenerator()}${randomGenerator()}`
}
console.log(randomHexNumberGenerator())

console.log('---Question 18---')

const alphaNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function userIdGenerator() {
    let id = ''
    for (let i = 0; i < 7; i++) {
        let upperLower = Math.floor(Math.random() * 2)
        if (upperLower === 0) {
            id += alphaNumber[Math.floor(Math.random() * alphaNumber.length)].toUpperCase()
        }
        id += alphaNumber[Math.floor(Math.random() * alphaNumber.length)]
    }
    return id
}
console.log(userIdGenerator())

// Level 3

console.log('// Level 3')

console.log('---Question 1---')

function userIdGeneratedByUser() {
    let charCount = 5 // prompt('Enter the character count')
    let idCount = 5 // prompt('Enter the ID Count')
    let result = ''
    let id = []
    let lowerUpper
    for (let i = 0; i < idCount; i++) {
        for (let j = 0; j < charCount; j++) {
            lowerUpper = Math.floor(Math.random() * 2)
            if (lowerUpper === 0) {
                result += alphaNumber[Math.floor(Math.random() * alphaNumber.length)].toUpperCase()
            }
            result += alphaNumber[Math.floor(Math.random() * alphaNumber.length)]
        }
        id += result + '\n'
        result = ''
    }
    return id
}
console.log(userIdGeneratedByUser())

console.log('---Question 2---')

function rgbColorGenerator() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}
console.log(rgbColorGenerator())

console.log('---Question 3---')

const arraysOfHexColors = (noOfElements) => {
    let result = []
    for (let i = 0; i < noOfElements; i++) {
        result.push(randomHexNumberGenerator())        
    }
    return result
}
console.log(arraysOfHexColors(6))

console.log('---Question 4---')

const arraysOfRgbColors = (noOfElements) => {
    let result = []
    for (let i = 0; i < noOfElements; i++) {
        result.push(rgbColorGenerator())
    }
    return result
}
console.log(arraysOfRgbColors(6))

console.log('---Question 5---')

function convertHexToRgb(hex) {
    hex = hex.replace('#','')
    if (hex.length > 6) {
        return `Invalid Input`
    } else {
        let one = parseInt(hex.substring(0,2),16)
        let two = parseInt(hex.substring(2,4),16)
        let three = parseInt(hex.substring(4),16)
        return `rgb(${one},${two},${three})`
    }
}
console.log(convertHexToRgb('#FFFFFF'))

console.log('---Question 6---')

function convertRgbToHex(r,g,b) {
    let one = r.toString(16)
    let two = g.toString(16)
    let three = b.toString(16)
    return `#${one}${two}${three}`
}
console.log(convertRgbToHex(255,16,16))

console.log('---Question 7---')

const generateColors = (name, noOfElements) => {
    if (name === 'hex') {
        return arraysOfHexColors(noOfElements)
    }
    else if (name === 'rgb') {
        return arraysOfRgbColors(noOfElements)
    }
    else {
        return `Not a valid input`
    }
}
console.log(generateColors('rgb', 8))

console.log('---Question 8---')

function shuffleArray(arr) {
    let duplicateArray = [...arr]
    let result = []
    while (result.length <= 5) {
        let randomIndex = Math.floor(Math.random() * duplicateArray.length)
        if (result.includes(duplicateArray[randomIndex])) {
            continue
        }
        else {
            result.push(duplicateArray[randomIndex])
        }
    }
    return result
}

console.log('Original',someNumbers)
console.log('After Shuffle')
console.log(shuffleArray(someNumbers))

console.log('---Question 9---')

function factorial(number) {
    let result = 1
    for (let i = number; i >=1; i--) {
        result *= i
    }
    return result
}
console.log(factorial(3))

console.log('---Question 10---')

function isEmpty(value) {
    if (typeof value === 'object') {
        if (Object.keys(value).length === 0) {
            return true
        } else {
            return false
        }
    } else if (typeof value === 'string') {
        if (value === '') {
            return true
        } else {
            return false
        }
    }
}

let someObj = {}
let someArray = [1,3]
let someStr = ''
let someSpaceStr = ' '
let someMap = new Map()
let someSet = new Set()

console.log('Doubts')
console.log('typeof someArray -',typeof someArray)
console.log('typeof someStr -',typeof someStr)
console.log('someStr.length -',someStr.length)
console.log('typeof someSpaceStr -',typeof someSpaceStr)
console.log('someSpaceStr.length -',someSpaceStr.length)
console.log('typeof someMap -',typeof someMap)
console.log('typeof someSet -',typeof someSet)
console.log()
console.log('isEmpty')
console.log(isEmpty(someObj))
console.log(isEmpty(someArray))
console.log(isEmpty(someStr))
console.log(isEmpty(someSpaceStr))
console.log(isEmpty(someMap))
console.log(isEmpty(someSet))

console.log('---Question 11---')

const sum = (...arg) => {
    let sum = 0
    arg.forEach(value => {
        sum += value
    })
    return sum
}
console.log(sum(1,2,23,65,332,457,5434,1434,64345,12))

console.log('---Question 12---')

function sumOfArrayItems(arr) {
    let sum = 0
    for(let item of arr) {
        if (typeof item === 'number') {
            sum += item
        } else {
            return `${item} is not a number`
        }
    }
    return sum
}
let arrSome = [2, 5, 3, 3, 5, 2, 5, 5, 5, 5]
console.log(sumOfArrayItems(arrSome))

console.log('---Question 13---')

function average(arr) {
    let sum = 0
    let length = arr.length
    for (let item of arr) {
        if (typeof item === 'number') {
            sum += item
        } else {
            return `${item} is not a number.`
        }
    }
    return sum / length
}
console.log(average(arrSome))

console.log('---Question 14---')

function modifyArray(arr) {
    if (arr.length >= 5) {
        arr[4] = arr[4].toUpperCase()
        return arr
    }
    else {
        return `Item Not Found`
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

console.log('---Question 15---')

const isPrime = (num) => {
    if (num === 2) {
        return `${num} is prime number`
    }
    let stop = (num / 2) + 1
    for (let i = 2; i <= stop; i++) {
        if ((num % i) === 0) {
            return `${num} is not a prime number`
        }
    }
    return `${num} is a prime number`
}
console.log(isPrime(97))

console.log('---Question 16---')

function isUnique(arr) {
    let arrLength = arr.length
    let uniqueSet = new Set(arr)
    let setLength = uniqueSet.size
    if (arrLength === setLength) {
        return true
    }
    else {
        return false
    }
}
let uniArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
if (isUnique(arrSome)) {
    console.log('Yes, all items are unique\n',arrSome)
}
else {
    console.log('No, we have duplicate items\n',arrSome)
}

console.log('---Question 17---')

function isSameDataType(arr) {
    let firstDataType = typeof arr[0]
    for (const item of arr) {
        if (typeof item === firstDataType) {
            continue
        } else {
            return false
        }
    }
    return true
}
console.log(isSameDataType(uniArr))
console.log(isSameDataType(arrSome))
console.log(isSameDataType([1, 2, 4, 'a', true]))

console.log('---Question 18---')

function isValidVariable(variableName) {
    let pattern = /[^\$\w\d]/gi
    let check = variableName.match(pattern)
    if (check !== null && check.length > 0) {
        console.log(`Not a valid variable name`)
        console.log(`Your variable contains these symbols ${check}`)
        return false
    }
    else {
        console.log('Yes, it is a valid variable name')
        return true
    }
}
let someName = 'aravind_ray$#@'
console.log(isValidVariable(someName))

console.log('---Question 19---')

let randomSeven = []

while (true) {
    if (randomSeven.length === 7) {
        break
    }
    let randomNum = Math.floor(Math.random() * 10)
    if (randomSeven.includes(randomNum)) {
        continue
    } else {
        randomSeven.push(randomNum)
    }
}
console.log(randomSeven)

console.log('---Question 20---')

function reverseCountries(arr) {
    let copiedArr = [...arr]
    return arr.reverse()
}
console.log(countries)
console.log('After reverse')
console.log(reverseCountries(countries))
