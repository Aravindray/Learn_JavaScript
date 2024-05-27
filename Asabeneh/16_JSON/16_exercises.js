// Level 1

console.log('Level 1')

console.log('---Question 1---')

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

let stringifySkills = JSON.stringify(skills)

console.log(stringifySkills)

console.log('---Question 2---')

let age = 25

let stringifyAge = JSON.stringify(age)

console.log(stringifyAge)

console.log('---Question 3---')

let isMarried = false

let stringifyIsMarried = JSON.stringify(isMarried)

console.log(stringifyIsMarried)

console.log('---Question 4---')

const student = {
    firstName:'Aravind',
    lastName:'Ray',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

let stringifyStudent = JSON.stringify(student)

console.log(stringifyStudent)

// Level 2

console.log('Level 2')

console.log('---Question 1---')

let lessStringifyStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills'])

console.log(lessStringifyStudent)

// Level 3

console.log('Level 3')

console.log('---Question 1---')

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

let txtJson = JSON.parse(txt)

console.log(txtJson)

console.log('---Question 2---')

let count = 0
let keys = Object.keys(txtJson)
let resultObj = []
let obj
for (const key of keys) {
    if (txtJson[key].skills.length > count) {
        count = txtJson[key].skills.length
        obj = {
            name: key,
            skills: txtJson[key].skills,
            lengthOfSkills: txtJson[key].skills.length
        }
    }
}
resultObj.push(obj)
console.log(resultObj)
