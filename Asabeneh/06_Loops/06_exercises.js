// Level 1

console.log('---Question 1.a---')
for (let a_1 = 0; a_1 <= 10; a_1++) {
    console.log(a_1)
}

console.log('---Question 1.b---')
let b_1 = 0
while(b_1 <= 10) {
    console.log(b_1)
    b_1++
}

console.log('---Question 1.c---')
let c_1 = 0
do {
    console.log(c_1)
    c_1++
} while(c_1 <= 10)

console.log('---Question 2.a---')
for (let a_2 = 10; a_2 >= 0; a_2--) {
    console.log(a_2)
}

console.log('---Question 2.b---')
let b_2 = 10
while(b_2 >= 0) {
    console.log(b_2)
    b_2--
}

console.log('---Question 2.c---')
let c_2 = 10
do {
    console.log(c_2)
    c_2--
} while(c_2 >= 0)

console.log('---Question 3---')

let endValue = 15 // prompt('Enter the end value')

for (let a_3 = 0; a_3 <= endValue; a_3++) {
    console.log(a_3)
}

console.log('---Question 4---')

for (let a_4 = 1; a_4 <= 7; a_4++) {
    console.log('#'.repeat(a_4))
}

console.log('---Question 5---')

for (let a_5 = 0; a_5 <= 10; a_5++) {
    console.log(`${a_5} x ${a_5} = ${a_5 * a_5}`)
}

console.log('---Question 6---')

console.log(`i i^2 i^3`)

for (let a_6 = 0; a_6 <= 10; a_6++) {
    console.log(`${a_6} ${a_6 ** 2}  ${a_6 ** 3}`)
}

console.log('---Question 7---')
let evenSum = 0
for (let a_7 = 0; a_7 <= 100; a_7++) {
    if (a_7 % 2 === 0) {
        console.log(a_7)
        evenSum += a_7
    }
}

console.log('---Question 8---')
let oddSum = 0
for (let a_8 = 0; a_8 <= 100; a_8++) {
    if (a_8 % 2 !== 0) {
        console.log(a_8)
        oddSum += a_8
    }
}

// console.log('---Question 9---') Find the first 100 prime number

console.log('---Question 10---')

let sum = 0
for (let a_10 = 0; a_10 <= 100; a_10++) {
    sum += a_10
}
console.log('Sum of first 100 numbers is',sum)

console.log('---Question 11---')

console.log(`The sum of all even from 0 to 100 is ${evenSum}. And the sum of all odd from 0 to 100 is ${oddSum}`)

console.log('---Question 12---')

let arrOfSums = [evenSum, oddSum]
console.log(arrOfSums)

console.log('---Question 13---')

let randomArray = []
for (let a_13 = 0; a_13 < 5; a_13++) {
    let randomNumber = Math.floor(Math.random() * 10)
    randomArray.push(randomNumber)
}
console.log('Array of Random Numbers',randomArray)

console.log('---Question 14---')

let newRandomArray = []
while (true) {
    if (newRandomArray.length === 5) {
        break
    }
    else {
        let newRandomNumber = Math.floor(Math.random() * 10)
        if (newRandomArray.includes(newRandomNumber)) {
            continue
        }
        else {
            newRandomArray.push(newRandomNumber)
        }
    }
}
console.log('Array of unique random numbers',newRandomArray)

console.log('---Question 15---')

let alphaNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let randomID = ''
for (let a_15 = 0; a_15 < 6; a_15++) {
    let randomSelect = Math.floor(Math.random() * (alphaNumeric.length))
    randomID += alphaNumeric[randomSelect]
}
console.log(randomID)

// Level 2

console.log('---Question 1---')

let randomLoop = Math.floor(Math.random() * 100)
console.log('New randomId character length is', randomLoop)
let newRandomID = ''
for (let g_1 = 0; g_1 < randomLoop; g_1++) {
    let newRandomSelect = Math.floor(Math.random() * (alphaNumeric.length))
    newRandomID += alphaNumeric[newRandomSelect]
}
console.log(newRandomID)

console.log('---Question 2---')

let arrOfHex = ['a','b','c','d','e','f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let hexCode = '#'

for (let g_2 = 0; g_2 < 6; g_2++) {
    let randomHexSelector = Math.floor(Math.random() * arrOfHex.length)
    hexCode += arrOfHex[randomHexSelector]
}
console.log(hexCode)

console.log('---Question 3---')

let rgb = []
for (let g_3 = 0; g_3 < 3; g_3++) {
    let randomRGB = Math.floor(Math.random() * 256)
    rgb.push(randomRGB)
}
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

console.log('---Question 11---')

let charCount = 0
let longestChar = []
for (const tech of webTechs) {
    if (tech.length > charCount) {
        longestChar = []
        longestChar.push(tech)
        charCount = tech.length
    }
}
console.log(longestChar.toString())

console.log('---Question 12---')

let insideArr = []
let outsideArr = []
for (const tech of webTechs) {
    insideArr.push(tech)
    insideArr.push(tech.length)
    outsideArr.push(insideArr)
    insideArr = []
}
console.log(outsideArr)

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

console.log('---Question 13---')

let abbr = ''
for (const stack of mernStack) {
    abbr += stack[0].toUpperCase()
}
console.log(abbr)
