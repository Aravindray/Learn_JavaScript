// Level 1

console.log('Level 1')

console.log('---Question 1---')

let emptySet = new Set()
console.log(emptySet)

console.log('---Question 2---')

let setOfNumbers = new Set()
for (let i = 0; i < 11; i++) {
    setOfNumbers.add(i)
}
console.log(setOfNumbers)

console.log('---Question 3---')

console.log('Before remove element',setOfNumbers)
setOfNumbers.delete(10)
console.log('After remove element', setOfNumbers)

console.log('---Question 4---')

setOfNumbers.clear()
console.log('After cleared the set', setOfNumbers)

console.log('---Question 5---')

let names = ['Aravind', 'Ray', 'John', 'Doe', 'Rock']
let setOfNames = new Set(names)
console.log(setOfNames)

console.log('---Question 6---')

const countries = ['Finland', 'Sweden', 'Norway']
let mapOfCountries = new Map()

for (const country of countries) {
    mapOfCountries.set(country, country.length)
}
console.log(mapOfCountries)

// Level 2

console.log('Level 2')

console.log('---Question 1---')

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const c = [...a, ...b]

const C = new Set(c)
console.log(C)

console.log('---Question 2---')

let result = []
const A = new Set(a)
const B = new Set(b)
for (let ele of A) {
    if(B.has(ele)) {
        result.push(ele)
    }
}
let setOfResult = new Set(result)
console.log(setOfResult)

console.log('---Question 3---')

let aMinusB = []
for (let ele of A) {
    if (!B.has(ele)) {
        aMinusB.push(ele)
    }
}

let bMinusA = []
for (let ele of B) {
    if(!A.has(ele)) {
        bMinusA.push(ele)
    }
}

let setOfAMinusB = new Set(aMinusB)
let setOfBMinusA = new Set(bMinusA)

console.log(setOfAMinusB)
console.log(setOfBMinusA)

// Check 10_countries_data.js for Level 3
