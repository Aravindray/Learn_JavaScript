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

const newUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
]

console.log('---Question 2.a---')

function checkUsers() {
    let exitingUsers = []
    for (const user of newUsers) {
        exitingUsers.push(user._id)
    }
    return exitingUsers
}

function signUp(obj) {
    let availableUsers = checkUsers()
    if(availableUsers.includes(obj._id)) {
        return `User already exists`
    } else {
        newUsers.push(obj)
        return `User added successfully`
    }
}

let newPerson = {
    _id: 'gr43lk',
    username: 'Aravind',
    email: 'aravind@aravind.com',
    password: '23io34',
    createdAt: '23/05/2024 09:48 PM',
    isLoggedIn: true
}

let newPerson2 = {
    _id: 'eefamr',
    username: 'new Aravind',
    email: 'new.aravind@aravind.com',
    password: '325dse',
    createdAt: '23/05/2024 10:23 PM',
    isLoggedIn: false
}

console.log(signUp(newPerson))
console.log(newUsers)

console.log(signUp(newPerson2))

console.log('---Question 2.b---')

function signIn(userId) {
    for (const user of newUsers) {
        if(user._id === userId) {
            user.isLoggedIn = true
            return `You are signed in!`
        }
    }
    return `User not exist!`
}
console.log(signIn('eefamr'))
console.log(signIn('fg12cw'))

console.log(newUsers)

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

console.log('---Question 3.a---')

function checkProducts() {
    let exitingProducts = []
    for (const product of products) {
        exitingProducts.push(product._id)
    }
    return exitingProducts
}

function rateProduct(userId, productId, rate) {
    let availableUsers = checkUsers()
    if (availableUsers.includes(userId)) {
        let availableProducts = checkProducts()
        if(availableProducts.includes(productId)) {
            let obj = {userId: userId, rate: rate}
            for (const product of products) {
                if (product._id === productId) {
                    product.ratings.push(obj)
                    return `Rating added successfully!`
                }
            }
        } else {
            return `Product not exists!`
        }
    } else {
        return `User not exists!`
    }
}
console.log(rateProduct('zwf8md','aegfal',5))

console.log('---Question 3.b---')

function averageRating() {
    let avgRatings = []
    for (const product of products) {
        let ratingsPerProduct = product.ratings
        let sum = 0
        let divideBy = ratingsPerProduct.length
        for (let rate of ratingsPerProduct) {
            sum += rate.rate
        }
        let average = sum / divideBy
        let obj = { productName: product.name, average: average}
        avgRatings.push(obj)
    }
    return avgRatings
}

console.log(averageRating())

console.log('---Question 4---')

function checkUsersNew(userId) {
    let existingUsers = []
    for (const user of newUsers) {
        existingUsers.push(user._id)
    }
    return existingUsers.includes(userId)
}

function checkProductsNew(productId) {
    let existingProducts = []
    for (const product of products) {
        existingProducts.push(product._id)
    }
    return existingProducts.includes(productId)
}

function likeProduct(userId, productId) {
    if (checkUsersNew(userId)) {
        if (checkProductsNew(productId)) {
            for (const product of products) {
                if (product._id === productId) {
                    let likes = product.likes
                    if (likes.includes(userId)) {
                        likes.splice(likes.indexOf(userId),1)
                        return `Like Removed!`
                    }
                    else {
                        likes.push(userId)
                        return `Like Added!`
                    }
                }
            }
        } else {
            return `Product not exists`
        }
    } else {
        return `User not exists`
    }
}

console.log(likeProduct('fg12cy','aegfal'))
console.log(likeProduct('fg12cy','aegfal'))
console.log(likeProduct('gr43lk','eedfcf'))
for (const product of products) {
    console.log(product)
}
