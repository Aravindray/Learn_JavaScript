// Level 2

console.log('Level 2')

console.log('---Question 1---')

// Calculate the Triangle area
let triangleBase = 20 // prompt('Enter the Base of the Triangle')
let triangleHeight = 30 // prompt('Enter the Height of the Triangle')
let triangleArea = 0.5 * triangleBase * triangleHeight
console.log(triangleArea)

// Display the Triangle area
let displayTriBase = document.querySelector('.triangle-base-value')
displayTriBase.textContent = triangleBase
let displayTriHei = document.querySelector('.triangle-height-value')
displayTriHei.textContent = triangleHeight
let displayTriArea = document.querySelector('.triangle-area-value')
displayTriArea.textContent = triangleArea

console.log('---Question 2---')

// Calculate the Perimeter of Triangle
let triangleA = 23 // Number(prompt('Enter side A of Triangle'))
let triangleB = 65 // Number(prompt('Enter side B of Triangle'))
let triangleC = 45 // Number(prompt('Enter side C of Triangle'))
let trianglePeri = triangleA + triangleB + triangleC
console.log(trianglePeri)

// Display the Perimeter of Triangle
let displayTriangleA = document.querySelector('.triangle-a-value')
displayTriangleA.textContent = triangleA
let displayTriangleB = document.querySelector('.triangle-b-value')
displayTriangleB.textContent = triangleB
let displayTriangleC = document.querySelector('.triangle-c-value')
displayTriangleC.textContent = triangleC
let displayTrianglePeri = document.querySelector('.triangle-perimeter-value')
displayTrianglePeri.textContent = trianglePeri

console.log('---Question 3.a---')

// Calculate Area of Rectangle
let rectangleLength = 32 // Number(prompt('Enter the Length of the Rectangle'))
let rectangleWidth = 454 // Number(prompt('Enter the Width of the Rectangle'))
let rectangleArea = rectangleLength * rectangleWidth
console.log(rectangleArea)

// Display the Area of Rectangle
let displayRectLen = document.querySelector('.rect-len-value')
displayRectLen.textContent = rectangleLength
let displayRectWid = document.querySelector('.rect-wid-value')
displayRectWid.textContent = rectangleWidth
let displayRectArea = document.querySelector('.rect-area-value')
displayRectArea.textContent = rectangleArea

console.log('---Question 3.b---')

// Calculate Perimeter of Rectangle
let rectPeriLength = 12 // Number(prompt('Enter the Length of Rectangle'))
let rectPeriWidth = 43 // Number(prompt('Enter the Width of Rectangle'))
let rectanglePerimeter = 2 * (rectPeriLength + rectPeriWidth)
console.log(rectanglePerimeter)

// Display Perimeter of Rectangle
let disRectPeriLength = document.querySelector('.rect-len-peri-value')
disRectPeriLength.textContent = rectPeriLength
let disRectPeriWidth = document.querySelector('.rect-wid-peri-value')
disRectPeriWidth.textContent = rectPeriWidth
let disRectPerimeter = document.querySelector('.rect-peri-value')
disRectPerimeter.textContent = rectanglePerimeter

console.log('---Question 4.a---')

// Calculate Area of Circle
let circleRadiusArea = 23 // Number(prompt('Enter the Radius of Circle'))
let circleArea = Math.PI * circleRadiusArea * circleRadiusArea
console.log(circleArea)

// Display Area of Circle
let displayCircleRadiusArea = document.querySelector('.circle-radius-area')
displayCircleRadiusArea.textContent = circleRadiusArea
let displayCircleArea = document.querySelector('.circle-area')
displayCircleArea.textContent = circleArea

console.log('---Question 4.b---')

// Calculate Circumference of Circle
let circleRadiusCirc = 23 // Number(prompt('Enter the Radius of Circle'))
let circleCircumference = 2 * Math.PI * circleRadiusCirc
console.log(circleCircumference)

// Display Circumference of Circle
let displayCircleRadiusCirc = document.querySelector('.circle-circum-radius')
displayCircleRadiusCirc.textContent = circleRadiusCirc
let displayCircleCircumference = document.querySelector('.circle-circum')
displayCircleCircumference.textContent = circleCircumference

console.log('---Question 9---')

// Calculate Amount Earning
let hours = 24 // Number(prompt('Enter the Hours'))
let ratePerHours = 432 // Number(prompt('Enter the Rate per Hours'))
let amountEarn = hours * ratePerHours
console.log(amountEarn)

// Display Amount Earn
let displayHours = document.querySelector('.hours-value')
displayHours.textContent = hours
let displayRate = document.querySelector('.rate-value')
displayRate.textContent = ratePerHours
let displayAmountEarn = document.querySelector('.amount-earn')
displayAmountEarn.textContent = amountEarn

console.log('---Question 13---')

// License Eligibility Check
let birthYear = 1999 // Number(prompt('Enter Birth Year'))
let currentYear = new Date().getFullYear()
let positiveScenario = `You are ${currentYear - birthYear}. You will be allowed to drive after ${18 - (currentYear - birthYear)} years.`
let negativeScenario = `You are ${currentYear - birthYear}. You are old enough to drive!`

// Display result
let displayBornYear = document.querySelector('.birth-year')
displayBornYear.textContent = birthYear
let displayLicenseResult = document.querySelector('.license-result')
currentYear - birthYear < 18 ? displayLicenseResult.textContent = positiveScenario : displayLicenseResult.textContent = negativeScenario

console.log('---Question 14---')

// Calculate Seconds
let noOfYears = Number(prompt('Enter Numbers of Years you live'))
console.log(`You lived ${noOfYears * 31536000} seconds`)

// Display result
let displayNoOfYears = document.querySelector('.year-live')
displayNoOfYears.textContent = noOfYears
let displayLifeSeconds = document.querySelector('.life-seconds')
displayLifeSeconds.textContent = `You lived ${noOfYears * 31536000} seconds`
