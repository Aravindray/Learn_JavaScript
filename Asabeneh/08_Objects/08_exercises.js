// Level 1

console.log('Level 1')

console.log('---Question 1---')

let dog = {}

console.log('---Question 2---')

console.log(dog)

console.log('---Question 3---')

dog.name = 'spike'
dog.legs = 4
dog.color = 'Cinereous'
dog.age = 10
dog.bark = function() {
    return `woof woof`
}

console.log('---Question 4---')

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

console.log('---Question 5---')

dog.breed = 'bulldog'
dog.getDogInfo = function() {
    return `Name is ${this.name} and it is ${this.age} years old. It is ${this.color} color and it have ${this.legs} legs. It is ${this.breed} and it barks "${this.bark()}".` 
}

console.log(dog)
console.log(dog.getDogInfo())

// Level 2

console.log('Level 2')

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

console.log('---Question 1---')

let names = Object.keys(users)
let userWithMorSkills
let baseCount = 0
for (const name of names) {
    let skillCount = users[name].skills.length
    if (skillCount > baseCount) {
        baseCount = skillCount
        userWithMorSkills = name
    }
}
console.log(`${userWithMorSkills} hold the ${baseCount} skills count compare to reset fo the users.`)

console.log('---Question 2.a---')

let loggedInUsers = []

for (const name of names) {
    let result = users[name].isLoggedIn
    if (result) {
        loggedInUsers.push(name)
    }
}
console.log(loggedInUsers)
console.log('LoggedIn users count is',loggedInUsers.length)

console.log('---Question 2.b---')

let moreThanEqualTo50 = []

for (const name of names) {
    if (users[name].points >= 50) {
        moreThanEqualTo50.push(name)
    }
}
console.log(moreThanEqualTo50)

console.log('---Question 3---')

let MERN = []

for (const name of names) {
    let skills = users[name].skills
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
        MERN.push(name)
    }
}
console.log(MERN)

console.log('---Question 4---')

users.aravind = {
    email: 'aravind@aravind.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 25,
    isLoggedIn: false,
    points: 10
}

console.log(users)

console.log('---Question 5---')

console.log(names)

console.log('---Question 6---')

console.log(Object.values(users))

// Question 7 - Check the 08_countries.js file

// Level 3

console.log('Level 3')

console.log('---Question 1---')

const personAccount = {
    firstName: 'Aravind',
    lastName: 'ray',
    incomes: [
        [50, 'From Parents']
    ],
    expenses: [
        [100, 'Snacks']
    ],
    totalIncome() {
        let sum = 0
        for (const item of this.incomes) {
            sum += item[0]
        }
        return sum
    },
    totalExpense() {
        let expense = 0
        for (const item of this.expenses) {
            expense += item[0]
        }
        return expense
    },
    accountInfo() {
        return `Full Name: ${this.firstName}${this.lastName}\nAccount Balance: ${this.accountBalance()}`
    },
    addIncome(amount, description) {
        this.incomes.push([amount, description])
    },
    addExpense(amount, description) {
        this.expenses.push([amount, description])
    },
    accountBalance() {
        let balance = this.totalIncome() - this.totalExpense()
        return balance
    }
}

console.log(personAccount.firstName)
console.log(personAccount.lastName)
personAccount.addIncome(50, 'From Parents')
personAccount.addIncome(500, 'From Bing')
console.log(personAccount.incomes)
console.log(personAccount.expenses)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())
