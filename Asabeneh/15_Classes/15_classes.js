// Classes

/*
Class is like a blueprint for creating an object, it create the properties and behavior of an object. 
With the help of class we can create many objects we want creating an object from a class is called 
class instantiation. Object represent the class.
*/

// Defining a class

/*
To define a class in JavaScript we need the keyword class, the name of class in CamelCase and block code 
with curly bracket.

Syntax:

class ClassName {
    // code goes here
}
*/

console.log('Example class')

class Example {
    
}

// Class Instantiation

/*
Instantiation means creating an object for the class, to create the instantiation we need the keyword 
new after that name of the class.
*/

console.log('Class Instantiation')

const ex = new Example()
console.log(ex)

// Class Constructor

/*
The constructor is the bulitin function which allow us to create blueprint for our class.
The constructor take object properties as a parameter and assign it the to the class instantiation 
objects.
We can assign the constructor parameter / properties to class using "this" keyword. this refer to the 
class itself.
*/

console.log('Class Constructor')

class PersonOne {
    constructor(firstName, lastName) {
        console.log(this) // wow magic
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person_1 = new PersonOne()
console.log(person_1)

const person_2 = new PersonOne('Aravind','ray')
console.log(person_2)

const person_3 = new PersonOne('Lidiya','Tekle')
console.log(person_3)

const person_4 = new PersonOne('Abraham','Yetayeh')
console.log(person_4)

// Lets add more properties to class

class PersonTwo {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person_5 = new PersonTwo('Aravind','ray',24,'Finland','Helsinki')
console.log(person_5)

// Default Values with constructor

/*
The constructor function properties may have default value like other regular functions.
*/

console.log('Default Values with Constructor Example')

class PersonThree {
    constructor(
        firstName = 'Aravind',
        lastName = 'ray',
        age = 24,
        country = 'Finland',
        city = 'Helsinki'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person_6 = new PersonThree()
const person_7 = new PersonThree('Rich','Bell',17,'Not Finland','Not Helsinki')
console.log(person_7)

// Class Methods

/*
Regular JavaScript function inside the class are class Methods. Constructor are bulit-in function for 
class, but we many create custom function for the object. A class method will be a regular method or 
getter or setter
*/

console.log('Class Methods Example')

class PersonFour {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

let person_8 = new PersonFour('Aravind','raj',24,'Finland','Helsinki')
console.log(person_8)
console.log(person_8.getFullName())

let person_9 = new PersonFour('Lidiya','Tekle',28,'Finland','Espoo')
console.log(person_9)
console.log(person_9.getFullName())

// Properties with initial values

/*
When we create the object the object properties may have initial values for example if your are 
developing game the payer have initial score as zero (0). 
*/

console.log('Properties with Initial Values Example')

class PersonFive {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getfullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person_10 = new PersonFive('Aravind','ray',24,'Finland','Helsinki')
console.log(person_10)
console.log(person_10.skills)
console.log(person_10.score)

// Getter Method

/*
Instead of accessing properties value from class we use getter function to access it, accessing directly 
is the violation of abstraction / encapsulation (idk). We use 'get' keyword before the function name. 
We Do not need parenthesis to access getter methods.
*/

console.log('Getter Method Example')

class PersonSix {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const person_11 = new PersonSix('Asabeneh','Yetayeh',250, 'Finland','Helsinki')
console.log(person_11.getScore)
console.log(person_11.getSkills)

// Setter Method

console.log('Setter Method Example')

/*
Setter Method allows to modify the value of the class properties, setter method use "set" keywords 
followed by function name.
*/

class PersonSeven {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkills(skill) {
        this.skills.push(skill)
    }
}

const person_12 = new PersonSeven('Aravind','ray',24,'Finland','Helsinki')
person_12.setScore = 17
person_12.setSkills = 'HTML'
person_12.setSkills = 'CSS'
person_12.setSkills = 'JS'
person_12.setSkills = 'Python'

console.log(person_12.getScore)
console.log(person_12.getSkills)

const person_13 = new PersonSeven('Lidiya','Tekle',28,'Finland','Espoo')
person_13.setScore = 28
person_13.setSkills = 'Planning'
person_13.setSkills = 'Managing'
person_13.setSkills = 'Organizing'
console.log(person_13.getScore)
console.log(person_13.getSkills)

// Let's add some regular method

class PersonEight {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country =country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkills(skill) {
        this.skills.push(skill)
    }
    getPersonalInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0,-1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He is ${skills}` : ''
        
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}.`
        return info
    }
}

const person_14 = new PersonEight('John','Deo',231,'Mars','Mars Upper Hemisphere')
person_14.setSkills = 'Cosmologists'
person_14.setSkills = 'Physicist'
person_14.setSkills = 'Chemist'

console.log(person_14.getPersonalInfo())

// Static Method

/*
Best example for static method is Date.now(). An instance of the class not able to call the static 
method.
Static method use "static" keyword before while creating method.
Static method is a method which can be used as utility function.
*/

console.log('Static Method Example')

class PersonNine {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country =country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkills(skill) {
        this.skills.push(skill)
    }
    getPersonalInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0,-1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He is ${skills}.` : ''
        
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }

    static favoriteSkill() {
        let skillsCopy = ['HTML', 'CSS', 'JavaScript', 'Python']
        let index = Math.floor(Math.random() * skillsCopy.length)
        return skillsCopy[index]
    }

    static showDateTime() {
        let now = new Date()
        let date = now.getDate()
        let month = now.getMonth() + 1
        let year = now.getFullYear()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (date < 10) {
            date = '0' + date
        }
        if (month < 10) {
            month = '0' + month
        }
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '/' + month + '/'+ year
        let hoursMinutes = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + hoursMinutes
        return fullTime
    }
}

const person_15 = new PersonNine('Aravind', 'raj', 24, 'Finland', 'Helsinki')
person_15.setSkills = 'HTML' // Not working as expected
person_15.setSkills = 'CSS' // Not working as expected
person_15.setSkills = 'JS' // Not working as expected
person_15.setSkills = 'Python' // Not working as expected
console.log(PersonNine.favoriteSkill())
console.log(PersonNine.showDateTime())

// Inheritance

console.log('Inheritance')

/*
Inheritance allows us to reduce the code reuse. Inheritance inherit the properties and method from the 
parent class.

Syntax:

class ChildClassName extends ParentClassName {
    // code
}
*/

// Let's create a Student Child class from Person Parent class

class StudentsOne extends PersonNine {
    saySomething() {
        console.log('I am child of the Person class')
    }
}

const student_1 = new StudentsOne('Aravind','ray',24,'Finland','Helsinki')
console.log(student_1)
console.log(student_1.getFullName())
console.log(student_1.getPersonalInfo())
// console.log(student_1.showDateTime())
// console.log(student_1.favoriteSkill())

// Overriding Methods

console.log('Overriding Methods Example')

/*
We can access all the method and properties from parent class. If we need to add new properties or 
modify the behavior of method we can do it by assigning the same property name and methods which 
overwritten the parent class, and we can access the parent class properties by using super() method.
*/

// Let's add gender property to child class.

class StudentsTwo extends PersonNine {
    constructor(firstName, lastName, age, gender, city, country) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }
    saySomething() {
        console.log('I am the child of Person class')
    }
    getPersonalInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0,-1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let pronoun = this.gender === 'Male' ? 'He' : 'She'
        let formattedSkills = skills ? `${pronoun} knows ${skills}.` : ''
        
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const student_2 = new StudentsTwo('Aravind', 'ray', 24, 'Male', 'Helsinki', 'Finland')
student_2.setSkills = 'HTML'
student_2.setSkills = 'CSS'
student_2.setSkills = 'JavaScript'
student_2.setSkills = 'Python'
console.log(student_2)
console.log(student_2.getPersonalInfo())

const student_3 = new StudentsTwo('Lidiya', 'Tekle', 28, 'Female', 'Helsinki', 'Finland')
student_3.setSkills = 'Planning'
student_3.setSkills = 'Managing'
student_3.setSkills = 'Organizing'
console.log(student_3)
console.log(student_3.getPersonalInfo())
