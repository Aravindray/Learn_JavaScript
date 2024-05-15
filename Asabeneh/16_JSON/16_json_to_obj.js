// Converting to JSON to Object

/*
In JavaScript we can convert JSON to Object and vice versa. There are two method in Javascript which 
convert JSON to Object -> JSON.parse() and convert Object to JSON -> JSON.stringify()

Syntax:

JSON.parse(json, [, reviver])

reviver is a callback function for example we can write the above syntax as

JSON.parse(json, (key, value) => {
    // code
})
*/

console.log("Converting JSON to Object")

const usersText = `{
    "users": [
        {
            "firstName": "Aravind",
            "lastName": "ray",
            "age": 24,
            "email": "aravind@aravind.com"
        },
        {
            "firstName": "Rich",
            "lastName": "Bell",
            "age": 17,
            "email": "rich@rich.com"
        },
        {
            "firstName": "Alex",
            "lastName": "James",
            "age": 25,
            "email": "alex@alex.com"
        }
    ]
}`

const userObj = JSON.parse(usersText, undefined, 4)
console.log(userObj)

// Using Reviver function in JSON.parse()

console.log('Using reviver function')

const newUserObj = JSON.parse(usersText, (key, value) => {
    let newValue = typeof value == "string" && key != "email" ? value.toUpperCase() : value
    return newValue
})
console.log(newUserObj)
