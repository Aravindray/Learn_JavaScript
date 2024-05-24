// Level 1

console.log('Level 1')

console.log('---Question 1---')

console.log(`forEach() method didn't return or modify the original array it just iterate through all the elements.
map() method did modify the array elements and return the new array.
filter() method check the condition if the condition satisfy / true it return the new array.
reduce() method compute all the elements and return the final result`)

console.log('---Question 2---')

function callback(element) {
    console.log(element)
}

function toUpper(element) {
    return element.toUpperCase()
}

function findCharLength(element) {
    return element.length
}

function square(element) {
    return element ** 2
}

console.log('---Question 3---')

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach(callback)

console.log('---Question 4---')

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(callback)

console.log('---Question 5---')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(callback)

console.log('---Question 6---')

let upperCountries = countries.map(toUpper)
console.log(upperCountries)

console.log('---Question 7---')

let countriesLength = countries.map(findCharLength)
console.log(countriesLength)

console.log('---Question 8---')

let squareNumbers = numbers.map(square)
console.log(squareNumbers)

console.log('---Question 9---')

let upperNames = names.map(toUpper)
console.log(upperNames)

console.log('---Question 10---')

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

let prices = products.map(ele => ele.price)
console.log(prices)

console.log('---Question 11---')

let landCountries = countries.filter(ele => ele.includes('land'))
console.log(landCountries)

console.log('---Question 12---')

let sixCharCountries = countries.filter(ele => ele.length === 6)
console.log(sixCharCountries)

console.log('---Question 13---')

let sixOrMoreCharCountries = countries.filter(ele => ele.length >= 6)
console.log(sixOrMoreCharCountries)

console.log('---Question 14---')

let countriesStartWithE = countries.filter(ele => ele.startsWith('E'))
console.log(countriesStartWithE)

console.log('---Question 15---')

let pricesWithValues = products.filter(ele => typeof ele.price === 'number')
console.log(pricesWithValues)
