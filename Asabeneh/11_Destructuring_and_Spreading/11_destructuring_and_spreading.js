// Destructure and Spread

/*
Destructure is a way to unpack an Array elements or an Object key / properties and assign it to variables.
*/

// Destructuring an Array

/*
To unpack an array assign variable inside the [] square bracket.

Syntax:

const array = [ele1, ele2, ele3]
let [var1, var2, var3] = array

Note: No of element and no of variable may or may not be equal but extra variables will be stored as undefined.
*/

const numbers = [1, 2, 3]
let [a_] = numbers
console.log(a_)

let [a1, b1, c1] = numbers
console.log(a1, b1, c1)

const names = ['Ray', 'Brook', 'David', 'Aravind']
let [firstName, secondName, thirdName, fourthName] = names
console.log(firstName, secondName, thirdName, fourthName)

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, Pi, gravity, bodyTemp, boilingPoint] = scientificConstants
console.log(e, Pi, gravity, bodyTemp, boilingPoint)

const fullStack = [["HTML", 'CSS', 'JS', 'React'],['Node' ,'Express', 'MongoDB']]
let [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)

// Skip Element

/*
If we like to skip the element we use extra comma (,). It help to omit the specific index.
*/

console.log('Skip Element')

let [a2, , c2] = numbers
console.log(a2, c2)

let [, secondName2, , fourthName2] = names
console.log(secondName2, fourthName2)

// Default values

/*
We can use default values incase value of the array for that index is not defined.
*/

console.log('Default values')

const newNames = [undefined, 'Brook', 'Roy']
let [firstPerson = 'Aravind', secondPerson, thirdPerson, fourthPerson ] = newNames
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)
console.log('Check undefined for fourthPerson')

// Use of spread operator (...)

/*
We can not assign variables for all the elements in an array. We can destructure few of them first and we use spread operator to store rest of the element as a array.
*/

console.log('Use of spread operator (...)')
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = newNumbers
console.log(num1, num2, num3)
console.log(rest)

// Destructuring during iteration

console.log('Destructuring during iteration')
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
    console.log(country, city)
}

console.log('-----------')

for (const [first, second, third] of fullStack) {
    console.log(first, second, third)
}

// Destruction Object

/*
To unpack an Object assign variable inside the {} curly bracket.

!IMPORTANT = When we destructing the object, the name of the variable and object key name must be same.

Syntax:

const Object = {
    key1: value1,
    key2: value2,
    key3: value3
}
let {var1, var2, var3} = Object

Like array, when we destructuring the object the no of keys and no of variables should be same, or the 
extra variable value will be assigned as undefined.
*/

console.log('Destructuring an Object')

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

// Renaming during structuring

/*
Syntax:

const object = {
    key1: val1,
    key2: val2,
    key3: val3
}

let {var1: v1, var2: v2, var3: v3} = object
*/

console.log('Renaming during structuring')

let { width1: w1, height1: h1, area1: a3, perimeter1: p1 } = rectangle
console.log('What causes this problem -> ',w1, h1, a3, p1)
console.log('Found the root cause, name of the variable and name of the object key must be same')

let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p)

// Default values

/*
We can use default values incase value of the array for that index is not defined.
*/

const square = {
    width: 10,
    height: 10,
    area: 100
}

let {width: w2, height: h2, area: a4, Perimeter: p2 = 60} = square
console.log(w2, h2, a4, p2)

const newSquare = {
    newWidth: 10,
    newHeight: 10,
    newArea: 100,
    newPerimeter: 80
}

let {newWidth, newHeight, newArea, newPerimeter = 60} = newSquare
console.log(newWidth, newHeight, newArea, newPerimeter)

// Object parameter without destructuring

console.log('Object parameter without destructuring')

const rect = {
    wid: 20,
    hei: 10
}

const calculatePerimeter = rectangle => {
    return 2 * (rectangle.wid + rectangle.hei) 
}
console.log(calculatePerimeter(rect))

const person = {
    firstName: 'Aravind',
    lastName: 'ray',
    age: 24,
    country: 'Finland',
    job: 'Student',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    languages: ['English', 'Finnish', 'French', 'Tamil']
}

const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages  = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is a ${obj.job}. He knows ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${languages[languages.length - 1]}.`

    return personInfo
}

console.log(getPersonInfo(person))

// Object parameter with destructuring

console.log('Object parameter with destructuring')

const newCalculatePerimeter = ({wid, hei}) => {
    return 2 * (wid + hei)
}
console.log(newCalculatePerimeter(rect))

const newPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const modifiedSkills = skills.slice(0, -1).join(', ')
    const modifiedLanguages = languages.slice(0, -1).join(', ')
    
    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is a ${job}. He Knows ${modifiedSkills} and ${skills[skills.length - 1]}. He speaks ${modifiedLanguages} and a little bit of ${languages[languages.length -1]}.`

    return personInfo
}
console.log(newPersonInfo(person))

// Destructuring Object during iteration

console.log('Destructuring Object during iteration')

const toDoList = [
    {
        task: 'Learn JS',
        estimatedTime: '1.5 Month',
        isCompleted: true
    },
    {
        task: 'Learn React',
        estimatedTime: 'Less than 1 Month',
        isCompleted: false
    },
    {
        task: 'Learn Django',
        estimatedTime: '1.5 Month',
        isCompleted: false
    }
]

for (const {task, estimatedTime, isCompleted} of toDoList) {
    console.log(task, '-', estimatedTime, '-', isCompleted)
}
