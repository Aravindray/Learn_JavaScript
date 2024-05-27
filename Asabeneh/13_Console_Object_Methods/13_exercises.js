// Level 1 - Check 13_countries.js file

// Level 2

console.log('Level 2')

console.log('---Question 1---')

console.assert(10 > 2 * 10, 'No 10 is not greater than 20') // Assert error only print if condition is false
console.assert(10 < 2 * 10, 'No 10 is not greater than 20') // This will not print

console.log('---Question 2---')

console.warn('I am example of Warning Message')

console.log('---Question 3---')

console.error('I am example of Error Message')

// Level 3

console.log('Level 3')

console.log('---Question 1---')

const myArray = ['Aravind', 25, {hobbies: ['Watching TV', 'Using Mobile']}, false, [['Income', 0], ['Expenses', 5000]]]

console.time('Using While Loop')
let i = 0
while(i < myArray.length) {
    console.log(myArray[i])
    i++
}
console.timeEnd('Using While Loop')

console.time('Using For Loop')
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}
console.timeEnd('Using For Loop')

console.time('Using For Of Loop')
for (const ele of myArray) {
    console.log(ele)
}
console.timeEnd('Using For Of Loop')

console.time('Using forEach Loop')
myArray.forEach(ele => console.log(ele))
console.timeEnd('Using forEach Loop')
