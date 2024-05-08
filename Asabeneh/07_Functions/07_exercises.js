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

function solveLinEquation() {
    
}
