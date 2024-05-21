// Level 1

console.log('Level 1')

console.log('---Question 1---')

// Check the eligibility and display result

let age = 25 // Number(prompt('Enter your age'))
let displayAge = document.querySelector('.age')
displayAge.textContent = age
let displayCheckResult = document.querySelector('.check-result')
if (age < 18) {
    console.log(`You are left with ${18 - age} years to drive`)
    displayCheckResult.textContent = `You are left with ${18 - age} years to drive`
}
else {
    console.log('You are old enough to drive')
    displayCheckResult.textContent = 'You are old enough to drive'
}

console.log('---Question 2---')

// Check Age difference and display result

let myAge = 25
let yourAge = Number(prompt('Enter your age'))
let displayMyAge = document.querySelector('.my-age')
displayMyAge.textContent = myAge
let displayYourAge = document.querySelector('.your-age')
displayYourAge.textContent = yourAge
let displayComparisonResult = document.querySelector('.comparison-result')
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`)
    displayComparisonResult.textContent = `You are ${yourAge - myAge} years older than me.`
}
else {
    console.log(`I am ${myAge - yourAge} older than you.`)
    displayComparisonResult.textContent = `I am ${myAge - yourAge} older than you.`
}
