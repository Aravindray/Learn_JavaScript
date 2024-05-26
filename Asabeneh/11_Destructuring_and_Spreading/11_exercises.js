// Level 1

console.log('Level 1')

console.log('---Question 1---')

const constants = [2.72, 3.14, 9.81, 37, 100]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

console.log('---Question 2---')

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, sw, den, nor] = countries

console.log(fin, est, sw, den, nor)

console.log('---Question 3---')

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

let {width, height, area, perimeter} = rectangle

console.log(width, height, area, perimeter)

// Level 2

console.log('Level 2')

console.log('---Question 1---')

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

for (let user of users) {
    let {name, scores, skills, age} = user
    console.log(name, scores, skills, age)
}

console.log('---Question 2---')

let lessThan2 = []
for (let user of users) {
    let {name, scores, skills, age} = user
    if (skills.length < 2) {
        let obj = {
            name: name,
            skillsCount: skills.length,
            skills: skills
        }
        lessThan2.push(obj)
    }
}
console.log(lessThan2)

// Level 3

console.log('Level 3')

// Question 1 check out 11_countries_data.js file

console.log('---Question 2---')

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [nameOfStudent, skills, scores] = student

let [, , jsScore, reactScore] = scores

console.log(nameOfStudent, skills, jsScore, reactScore)

console.log('---Question 3---')

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
    let result = []
    for (let ele of arr) {
        let [name, skills, scores] = ele
        let obj = {
            name: name,
            skills: skills,
            scores: scores
        }
        result.push(obj)
    }
    return result
}
console.log(convertArrayToObject(students))

console.log('---Question 4---')

const newStudent = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const copiedStudent = Object.assign({}, newStudent)

copiedStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8}) // 4.a

copiedStudent.skills.backEnd.push({skill: 'Express', level: 9}) // 4.b

copiedStudent.skills.dataBase.push({skill: 'SQL', level: 8}) // 4.c

copiedStudent.skills.dataScience.push('SQL')

let copiedStudentKeys = Object.keys(copiedStudent)

for (const keys of copiedStudentKeys) {
  console.log(copiedStudent[keys])
}

console.log(copiedStudent)
