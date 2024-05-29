// Level 1

console.log('Level 1')

console.log('---Question 1---')

function outerFun() {
    let something = false
    function innerFun() {
        something = true
        return something
    }
    return innerFun
}
console.log(outerFun())
console.log(outerFun()())
let someVariable = outerFun()
console.log(someVariable())

// Level 2

console.log('Level 2')

console.log('---Question 1---')

function justOuterFun() {
    let count = 0
    function firstInnerFun() {
        count++
        return count
    }
    function secondInnerFun() {
        count++
        return count
    }
    function thirdInnerFun() {
        count--
        return count
    }
    return {
        first: firstInnerFun,
        second: secondInnerFun,
        third: thirdInnerFun
    }
}
let someNewVariable = justOuterFun()
console.log(someNewVariable.first())
console.log(someNewVariable.first())
console.log(someNewVariable.first())

// Level 3

console.log('Level 3')

console.log('---Question 1---')

function personAccount(fName, lName) {
    let firstName = fName
    let lastName = lName
    let incomes = []
    let expenses = []

    function totalIncome() {
        let total = 0
        if (incomes.length > 0) {
            for (const income of incomes) {
                let someThing = [...income]
                total += someThing[0]
            }
        }
        return total
    }

    function totalExpenses() {
        let total = 0
        if (expenses.length > 0) {
            for (const expense of expenses) {
                let something = [...expense]
                total += something[0]
            }
        }
        return total
    }

    function accountInfo() {
        return `Name: ${firstName} ${lastName}\nBalance: ${accountBalance()}`
    }

    function addIncome(amount, description) {
        let someSet = new Set()
        someSet.add(amount)
        someSet.add(description)
        incomes.push(someSet)
        console.log('Income added')
    }

    function addExpense(amount, description) {
        let someSet = new Set()
        someSet.add(amount)
        someSet.add(description)
        expenses.push(someSet)
        console.log('Expenses added')
    }

    function accountBalance() {
        let balance = totalIncome() - totalExpenses()
        return balance
    }

    return {
        totalIncome,
        totalExpenses,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    }
}

let myAccount = personAccount('Money','Bell')
myAccount.addIncome(500, 'From Microsoft')
myAccount.addIncome(5000, 'From Dad')
console.log(myAccount.accountInfo())
myAccount.addExpense(1000, 'For Snacks')
console.log(myAccount.accountInfo())
