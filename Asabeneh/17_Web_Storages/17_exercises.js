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

class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
    }

    totalIncome() {
        let totalAmount = 0
        for (let income of this.incomes) {
            totalAmount += income.amount
        }
        return totalAmount
    }

    totalExpenses() {
        let totalAmount = 0
        for (let expense of this.expenses) {
            totalAmount += expense.amount
        }
        return totalAmount
    }

    accountInfo() {
        return `Name: ${this.firstName} ${this.lastName}\nBalance: ${this.accountBalance()}`
    }

    addIncome(obj) {
        this.incomes.push(obj)
        console.log('Income added')
        console.log(this.totalIncome())
    }

    addExpenses(obj) {
        this.expenses.push(obj)
        console.log('Expenses added')
        console.log(this.totalExpenses())
    }

    accountBalance() {
        let income = this.totalIncome()
        let expense = this.totalExpenses()
        return income - expense
    }
}

const myAccountInfo = new PersonAccount('Aravind','Ray', [{amount: 0, description: 'Jobless'}], [{amount: 5000, description: 'Father\'s Money'}])

localStorage.setItem('myAccountInfo', JSON.stringify(myAccountInfo))

console.log(localStorage.getItem('myAccountInfo'))

let someThing = localStorage.getItem('myAccountInfo')

someThing = JSON.parse(someThing)

console.log(someThing)
console.log(someThing.firstName)
console.log(someThing)

console.log(someThing.totalIncome()) // throws an error
console.log(someThing.totalExpenses()) // throws an error because object methods didn't store in local storage
console.log(myAccountInfo.accountBalance())
console.log(myAccountInfo.accountInfo())
myAccountInfo.addIncome({amount: 5000, description: 'Just Checking'})
myAccountInfo.addIncome({amount: 5000, description: 'Just Checking'})
myAccountInfo.addIncome({amount: 5000, description: 'Just Checking'})
myAccountInfo.addExpenses({amount: 100, description: 'Snacks'})
console.log(myAccountInfo.accountInfo())
