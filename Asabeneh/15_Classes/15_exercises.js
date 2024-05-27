// Level 1

console.log('Level 1')

console.log('---Question 1---')

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get getDetails() {
        return `It is ${this.name} and it's ${this.age} years old. It has ${this.legs} and ${this.color} color.`
    }
}

console.log('---Question 2---')

class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }
    get getDetails() {
        return `${this.name} is ${this.breed} dog and it's ${this.age} years old. It has ${this.legs} legs and it's ${this.color} color.`
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }
    get getDetails() {
        return `${this.name} is ${this.breed} cat and it's ${this.age} years old. It has ${this.legs} legs and it's ${this.color} color.`
    }
}

let spikeDog = new Dog('Spike', 15, 'Orange Brown', 2, 'Bulldog')
console.log(spikeDog)

let tomCat = new Cat('Tom', 12, 'Bluish grey and White color', 2, 'Domestic short hair')
console.log(tomCat)

// Level 2

console.log('Level 2')

console.log('---Question 1---')

console.log(spikeDog.getDetails)
console.log(tomCat.getDetails)

// Level 3

console.log('Level 3')

console.log('---Question 1---')

class Statistics {
    constructor(arrayOfElements) {
        // array of elements will take only numbers datatype
        let flag = true
        for (const element of arrayOfElements) {
            if (!(typeof element === 'number')) {
                console.log(`Element "${element}" is different data type`)
                flag = false
            }
        }
        if (flag) {
            this.arrayOfElements = arrayOfElements
        } else {
            return `Element is different data type`
        }
    }

    count() {
        // Return No of Elements
        return this.arrayOfElements.length
    }

    sum() {
        // Return sum of all Elements
        return this.arrayOfElements.reduce((acc, cur) => acc + cur)
    }

    sortAsc() {
        // Return ascending sorted array 
        this.arrayOfElements.sort((a, b) => a - b)
    }

    sortDec() {
        // Return descending sorted array
        this.arrayOfElements.sort((a, b) => b - a)
    }

    min() {
        // Return min value of the array
        this.sortAsc()
        return this.arrayOfElements[0]
    }

    max() {
        // return max value of the array
        this.sortAsc()
        return this.arrayOfElements[this.arrayOfElements.length - 1]
    }

    range() {
        // Return the range value - formula = max value - min value
        return this.max() - this.min()
    }

    mean() {
        // Return mean value which is nothing but average
        return this.sum() / this.count()
    }

    median() {
        // Return the middle value of the array based on odd or even elements
        let length = this.arrayOfElements.length
        let middle = Math.floor(length / 2)
        if (length % 2 === 0) {
            let firstElement = this.arrayOfElements[middle - 1]
            let secondElement = this.arrayOfElements[middle]
            return ((firstElement + secondElement) / 2).toFixed(3)
        } else {
            return this.arrayOfElements[middle]
        }
    }

    mode() {
        // Just return most repeated element
        let result = this.freqDist()
        result.sort((a, b) => {
            return b.count - a.count
        })
        return result.slice(0,1)
    }

    variance() {
        // formula = (sum (subtract each element by mean value and square it)) / total no of elements
        let varianceResult = ((this.arrayOfElements.map(ele => {
            return (ele - this.mean()) ** 2
        }).reduce((acc, cur) => acc + cur)) / this.count()).toFixed(3)
        return varianceResult
    }

    std() {
        return Math.sqrt(this.variance()).toFixed(3)
    }

    freqDist() {
        let setOfElements = new Set(this.arrayOfElements)
        let resultObj = []
        for (const elements of setOfElements) {
            let result = this.arrayOfElements.filter(ele => ele === elements)
            let obj = {
                mode: elements,
                count: result.length
            }
            resultObj.push(obj)
        }
        return resultObj
    }
}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages)
console.log(statistics)
console.log('count -',statistics.count())
console.log('sum -',statistics.sum())
console.log('min -',statistics.min())
console.log('max -',statistics.max())
console.log('range -',statistics.range())
console.log('mean -',statistics.mean())
console.log('median -',statistics.median())
console.log('mode -',statistics.mode())
console.log('variance -',statistics.variance())
console.log('std -',statistics.std())
console.log('Frequency Distribution -',statistics.freqDist())

console.log('---Question 2---')

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
console.log(myAccountInfo)
console.log(myAccountInfo.totalIncome())
console.log(myAccountInfo.totalExpenses())
console.log(myAccountInfo.accountBalance())
console.log(myAccountInfo.accountInfo())
myAccountInfo.addIncome({amount: 5000, description: 'Just Checking'})
myAccountInfo.addIncome({amount: 5000, description: 'Just Checking'})
myAccountInfo.addIncome({amount: 5000, description: 'Just Checking'})
myAccountInfo.addExpenses({amount: 100, description: 'Snacks'})
console.log(myAccountInfo.accountInfo())
