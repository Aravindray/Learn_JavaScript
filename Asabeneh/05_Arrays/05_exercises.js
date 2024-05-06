// Level 1

console.log('---Level 1---')

console.log('---Question 1---')

const arr = Array()
console.log(arr)

console.log('---Question 2---')

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers)

console.log('---Question 3---')

console.log(numbers.length)

console.log('---Question 4---')

console.log('First Item', numbers[0])
console.log('Middle Item', numbers[Math.round(numbers.length / 2)])
console.log('Last Item', numbers[numbers.length - 1])

console.log('---Question 5---')

const mixedDataType = [1, 2.3, 'Aravind', false, null, undefined, {firstName: 'Aravind', lastName: 'ray'}, [true, false]]
console.log(mixedDataType)
console.log('Length of Mixed datatypes',mixedDataType.length)

console.log('---Question 6---')

const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log('---Question 7---')

console.log('Companies', companies)

console.log('---Question 8---')

console.log('No of Companies', companies.length)

console.log('---Question 9---')

console.log('First Company',companies[0])
console.log('Middle Company',companies[Math.round(companies.length / 2)])
console.log('Last Company',companies[companies.length - 1])

console.log('---Question 10---')

console.log(companies[0])
console.log(companies[1])
console.log(companies[2])
console.log(companies[3])
console.log(companies[4])
console.log(companies[5])
console.log(companies[6])

console.log('---Question 11---')

console.log(companies[0].toUpperCase())
console.log(companies[1].toUpperCase())
console.log(companies[2].toUpperCase())
console.log(companies[3].toUpperCase())
console.log(companies[4].toUpperCase())
console.log(companies[5].toUpperCase())
console.log(companies[6].toUpperCase())

console.log('---Question 12---')

console.log(`${companies.slice(0,companies.length-1).join(', ')} and ${companies[companies.length - 1]} are big IT companies.`)

console.log('---Question 13---')

let isAvailable = companies.includes('Amazon')

if (isAvailable) {
    console.log('Yes Company is Available')
}
else {
    console.log('Not found')
}

// console.log('---Question 14---')

// Filter out companies which have more than one 'o' without the filter method

console.log('---Question 15---')

console.log(companies.sort())

console.log('---Question 17---')

console.log(companies.slice(0,3))

console.log('---Question 18---')

console.log(companies.slice(companies.length-3, companies.length))

console.log('---Question 19---')

if (companies.length % 2 === 0) {
    console.log(companies.slice(companies.length / 2 - 1,companies.length / 2 + 1))
}
else {
    console.log(companies[Math.floor(companies.length / 2)])
}

console.log('---Question 16---')

console.log(companies.reverse())

console.log('---Question 20---')

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

itCompanies.sort()

console.log(itCompanies)

console.log(itCompanies.shift())

console.log(itCompanies)

console.log('---Question 21---')

if (itCompanies.length % 2 === 0) {
    console.log('Before',itCompanies)
    itCompanies.splice(itCompanies.length / 2 - 1, 2)
    console.log('After',itCompanies)
}
else {
    console.log('Before',itCompanies)
    itCompanies.splice(Math.floor(itCompanies.length / 2), 1)
    console.log('After',itCompanies)
}

console.log('---Question 22---')

console.log('Before',itCompanies)

itCompanies.pop()

console.log('After',itCompanies)

console.log('---Question 23---')

console.log('Before',itCompanies)

itCompanies.splice(0)

console.log('After',itCompanies)

// Level 2

console.log('---Level 2---')

// console.log('---Question 1---') - Check main file for more info - Not able to complete it

console.log('---Question 2---')

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[^a-zA-Z\s]/g, '').split(' ')
console.log(words)
console.log('Length of words', words.length)

console.log('---Question 3---')

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart.includes('Meat')) {
    console.log('Meat is already available in the list')
}
else {
    shoppingCart.unshift('Meat')
    console.log('Meat is added beginning of the list')
    console.log(shoppingCart)
}

if (shoppingCart.includes('Sugar')) {
    console.log('Sugar is already available in the list')
}
else {
    shoppingCart.push('Sugar')
    console.log('Sugar is added end of the list')
    console.log(shoppingCart)
}

if (shoppingCart.includes('Honey')) {
    console.log('I will remove Honey even though if I am not allergic to it')
    let indexOfHoney = shoppingCart.indexOf('Honey')
    shoppingCart.splice(indexOfHoney,1)
    console.log('Shopping Cart after remove Honey',shoppingCart)
}
else {
    console.log('Honey is not in the cart')
}

if (shoppingCart.includes('Tea')) {
    let indexOfTea = shoppingCart.indexOf('Tea')
    shoppingCart[indexOfTea] = 'Green Tea'
    console.log('After modifying the Tea', shoppingCart)
}
else {
    console.log('Tea not in the list')
}

// console.log('---Question 4---') check 05_countries.js file

// console.log('---Question 5---') check 05_web_techs.js file

console.log('---Question 6---')

const frontEnd = ['HyperText Markup Language', 'Cascading Style Sheet', 'JavaScript', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

// Level 3

console.log('---Level 3---')

console.log('---Question 1---')

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

console.log('Sorted ages',ages)

console.log('1.1.a - Minimum Age', ages[0])

console.log('1.1.b - Maximum Age', ages[ages.length - 1])

if (ages.length % 2 === 0) {
    let median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
    console.log('1.2 - Median',median)
}
else {
    median = ages[Math.floor(ages.length / 2)]
    console.log('1.2 - Median',median)
}

// 1.3 Not able to sum all the element in an array

console.log(`1.4 Ages range - maximum is ages ${ages[ages.length - 1]} and minimum is ${ages[0]} and range is ${ages[ages.length - 1] - ages[0]}`)

// 1.5 Not able to solve, because need a solution to find the average ages
