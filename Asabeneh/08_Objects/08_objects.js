// Objects

/*
Everything in a JS is a Object. Object is similar to dictionary in python. It is a key:value pair without any order.

syntax:

const ObjectName = {key:value, key:value}
*/

// Creating an empty Object

console.log('An empty Object')

const example = {}
console.log(example)

// Creating Objects with values

console.log('Creating Objects with Values')

const rectangle = {
    width: 240,
    length: 300
}
console.log(rectangle)

const person = {
    firstName: 'Aravind',
    lastName: 'ray', 
    age: 24,
    country: 'Finland',
    city: 'Salem',
    skills: ['Python','HTML', 'CSS', 'JavaScript'],
    isMarried: false,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+343892839821'

}
console.log(person)

// Getting Values from an Object

/*
We can use any fo these 2 methods:
1. By using Object.keyName method - if the keyName is one-word.
2. By using Object['keyName'] method
*/

console.log('Getting values from . method')

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)

console.log('Getting values from [] method')

console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['location'])
console.log(person['phone number']) // We can only able to access the value by square method because of space between

// Creating Object Methods (or Functions inside the object)

/*
Now the person object has getFullName property, getFullName is the function inside the person object and we call it "Object Methods". the "this" keyword refer to the object itself, with the help "this" keyword we can access values of different properties inside the object.

We can not use arrow function as a object method.
*/

console.log('Accessing Object Methods')
console.log(person.getFullName())

// Setting new Key for an Object

/*
An object is mutable, we can modify the value of the properties after we created them.
*/

person.nationality = 'Ethiopian'
person.title = 'Student'
person.skills.push('Excel')
person.isMarried = true

person.getPersonalInfo = function() {
    let skillsWithOutLast = this.skills.slice(0, this.skills.length - 2).join(', ')
    let lastSkill = this.skills[this.skills.length - 1]
    let skills = `${skillsWithOutLast}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe is learning ${skills}.`
    return statement
}

console.log(person)
console.log(person.getPersonalInfo())

// Object Methods

/*
We can manipulate the object, here are few methods
1. Object.assign()
2. Object.keys()
3. Object.values()
4. Object.entries()
5. Object.hasOwnProperty()
*/

// Object.assign()

/*
Copy the object without modifying the original one.

Syntax:

const newObjectName = Object.assign({}, oldObjectName | originalObjectName)
*/

console.log('Object.assign() Example')
const personCopy = Object.assign({}, person)
console.log(personCopy)

// Object.keys()

/*

Return all the properties names/keys as array

Syntax:

const variableName = Object.keys(objectName)
*/

console.log('Object.keys() Example')
const keys = Object.keys(personCopy)
console.log(keys)

// Object.values()

/*
Return all the properties values as array

syntax:

const variableName = Object.values(objectName)
*/

console.log('Object.values() Example')
const values = Object.values(personCopy)
console.log(values)

// Object.entries()

/*
Return all the keys and values as 2d array

syntax:

const variableName = Object.entries(ObjectName)
*/

console.log('Object.entries() Example')
const entries = Object.entries(personCopy)
console.log(entries)

// Object.hasOwnProperty()

/*
This method will check if the given key / property exist in the object and return true or false result

syntax:

ObjectName.hasOwnProperty('KeyName')
*/

console.log('Object.hasOwnProperty() Example')
console.log(personCopy.hasOwnProperty('country'))
let doesItExist = personCopy.hasOwnProperty('name')
console.log(doesItExist)
