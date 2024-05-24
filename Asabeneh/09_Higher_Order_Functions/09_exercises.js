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

console.log('---Question 16---')

function getStringList(arr) {
    let stringArrays = arr.filter(ele => typeof ele === 'string')
    return stringArrays
}

const mixedArray = [12, 'Aravind', 'Book', true, null, {fullName: 'Aravindray', age: 25}, 'HTML', 'CSS', 'Sad']

console.log(getStringList(mixedArray))

console.log('---Question 17---')

let sumOfArray = numbers.reduce((acc, cur) => acc + cur)
console.log(numbers)
console.log(sumOfArray)

console.log('---Question 18---')

let concatSentence = countries.reduce((acc, cur, idx) => {
    if(idx === countries.length - 1) {
        return `${acc} and ${cur}`
    } else {
        return `${acc}, ${cur}`
    }
})
console.log(`${concatSentence} are north european countries`)

console.log('---Question 19---')

console.log(`some() method check certain criteria if any one of the element satisfy the condition it returns true
every() method check every element if certain condition true or not, if all the element satisfy the condition it return true else false`)

console.log('---Question 20---')

let isThereAnyGreaterThen7 = names.some(ele => ele.length > 7)
console.log(names)
console.log(isThereAnyGreaterThen7)

console.log('---Question 21---')

let isAllContainsLand = countries.every(country => country.includes('land'))
console.log(countries)
console.log(isAllContainsLand)

console.log('---Question 22---')

console.log(`find() method return the first element if condition matches
findIndex() method return the first element index number if condition matches else it return -1`)

console.log('---Question 23---')

let sixCharCounty = countries.find(country => country.length === 6)
console.log(sixCharCounty)

console.log('---Question 24---')

let sixCharCountyIndex = countries.findIndex(country => country.length === 6)
console.log(sixCharCountyIndex)

console.log('---Question 25---')

let isNorway = countries.findIndex(country => country === 'Norway')
console.log(isNorway)

console.log('---Question 26---')

let isRussia = countries.findIndex(country => country === 'Russia')
console.log(isRussia)

// Level 2

console.log('Level 2')

console.log('---Question 1---')

let sum = 0
products.filter(product => typeof product.price === 'number').forEach(product => sum += product.price)
console.log(sum)

console.log('---Question 2---')

let usingReduce = products.filter(product => typeof product.price === 'number').reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(usingReduce)

// Question 3 to 7 - check 09_countries.js file

// Level 3

console.log('Level 3')

// Question 1, 2, 3 - check 09_countries_data.js

console.log('---Question 4---')

const statistics = {
    ages: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],

    mean() {
        let average = this.sum() / this.count()
        return average
    },

    median() {
        this.sort()
        let length = this.ages.length
        if (length % 2 === 0) {
            let firstEle = (this.ages.length / 2) - 1
            let secondEle = this.ages.length / 2
            let middle = (this.ages[firstEle] + this.ages[secondEle] ) / 2
            return middle
        } else {
            let middle = Math.floor(this.ages.length / 2)
            return this.ages[middle]
        }
    },

    mode() {
        let uniqueValues = new Set(this.ages)
        let value
        let count = 0
        for (const age of uniqueValues) {
            let result = this.ages.filter(ele => ele === age)
            if (result.length > count) {
                count = result.length
                value = age
            }
        }
        let obj = {
            mode: value,
            count: count
        }
        return obj
    },

    range() {
        return this.max() - this.min()
    },

    variance() {
        let fistStep = this.ages.map(age => {
            return (age - this.mean()) ** 2
        })
        let secondStep = fistStep.reduce((acc, cur) => acc + cur)
        let thirdStep = secondStep / this.count()
        return thirdStep.toFixed(3)
    },

    standardDeviation() {
        return Math.sqrt(this.variance()).toFixed(3)
    },

    min() {
        this.sort()
        return this.ages[0]
    },

    max() {
        this.sort()
        return this.ages[this.ages.length - 1]
    },

    count() {
        return this.ages.length
    },

    percentile() {

    },

    freqDist() {
        let uniqueValues = new Set(this.ages)
        let freDis = []
        for (const age of uniqueValues) {
            let result = this.ages.filter(ele => ele === age)
            let obj = {}
            obj[age] = result.length
            freDis.push(obj)
        }
        return freDis
    },

    sum() {
        return sum = this.ages.reduce((acc, cur) => acc + cur)
    },

    sort() {
        this.ages.sort((a, b) => {
            return a - b
        })
    }
}
console.log('sum -',statistics.sum())
console.log('count -',statistics.count())
console.log('min -',statistics.min())
console.log('max -',statistics.max())
console.log('range -',statistics.range())
console.log('mean -',statistics.mean())
console.log('median -',statistics.median())
console.log('mode -',statistics.mode())
console.log('variance -',statistics.variance())
console.log('standardDeviation -',statistics.standardDeviation())
console.log('freqDist -',statistics.freqDist())
