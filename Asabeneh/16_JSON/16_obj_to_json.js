// Converting Object to JSON

/*
In JavaScript we can convert Object to JSON and vice versa. There are two method in Javascript which 
convert Object to JSON -> JSON.stringify() and convert JSON to Object -> JSON.parse()

Syntax:

JSON.stringify(Object [, reviver/replace, indentation/space])

reviver and space are optional parameter if we want to alternate the object we use callback function in reviver and modify the object if not we use "undefine", and space also optional which takes numbers data type as a parameter.
*/

console.log('Converting Object to JSON')

const usersObj = {
    Alex: {
        email: "alex@alex.com",
        skills: [
            "HTML",
            "CSS",
            "JS"
        ],
        age: 24,
        isLoggedIn: false,
        points: 23
    },
    Brook: {
        email: 'brook@brook.com',
        skills: ["HTML", "CSS", "Python"],
        age: 34,
        isLoggedIn: true,
        points: 39
    },
    Daniel: {
        email: 'daniel@daniel.com',
        skills: ["Cyber Security", "Python", "AI"],
        age: 34,
        isLoggedIn: false,
        points: 54
    },
    John: {
        email: 'john@john',
        skills: ["HTML", "Cooking", "Leader"],
        age: 42,
        isLoggedIn: false,
        points: 31 
    }
}

const usersJSON = JSON.stringify(usersObj, undefined, 4)
console.log(usersJSON)

// Filtering Array with JSON.stringify()

/*
So when we are converting object to json if there are so many key in an object but we need to convert
few keys only, we need to put the required key inside the array, for example check below
*/

console.log('Filtering Keys when converting Object to JSON')

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'asabeneh@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 240,
    isLoggedIn: false,
    points: 80
}

const userJSON = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(userJSON)
