// Level 1

console.log('Level 1')

console.log('---Question 1---')

localStorage.setItem('firstName', 'Aravind')
localStorage.setItem('lastName', 'Ray')
localStorage.setItem('age', 25)
localStorage.setItem('country', 'Finland')
localStorage.setItem('city', 'Helsinki')
console.log(localStorage)

sessionStorage.setItem('password', '1234')
console.log(sessionStorage)

// Level 2

console.log('Level 2')

console.log('---Question 1---')

const student = {
    firstName: 'Aravind',
    lastName: 'Ray',
    age: 25,
    skills: ['HTML','CSS', 'JavaScript', 'Python'],
    country: 'Finland',
    enrolled: false
}

let studentJSON = JSON.stringify(student, undefined, 2)
localStorage.setItem('student', studentJSON)
console.log(localStorage)

let arrayOfKeys = Object.keys(localStorage)
console.log(arrayOfKeys)

for (const key of arrayOfKeys) {
    console.log(localStorage.getItem(key))
}

let copiedStudent = localStorage.getItem('student')
let studentParse = JSON.parse(copiedStudent, undefined, 2)
console.log(studentParse)

// Level 3

console.log('Level 3')

console.log('---Question 1---')
