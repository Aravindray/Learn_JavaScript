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

/*
console.log('---Question 1---')

function solveLinEquation() {

}

console.log('---Question 2---')
*/

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

// console.log('---Question 8---') - Need clarity
// console.log('---Question 9---') - Need clarity

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
