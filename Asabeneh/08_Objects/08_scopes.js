// Scopes

/*
Variables can be declared at different scopes. There are 2 types of variable scopes:
1. Global
2. Local
*/

// Global Scopes

/*
Any variable declared without let, var or const keyword is global scope. Globally declared variable can be accessed anywhere in the same file.
*/

console.log('Global Scope')

a = 'JavaScript'
b = 10

function letsLearnScopes() {
    console.log(a, b)
    if(true) {
        let a = 'Python'
        let b = 37
        console.log(a, b)
    }
}
console.log(a, b)
letsLearnScopes()

// Local Scopes

/*
A variable declared locally can be access only by certain block code.
1. Block Scope
2. Function Scope
*/

console.log('Local Scope')

let c = 'JavaScript'
let d = 24

// Function Scope

function localScope() {
    console.log('Function scope', c, d)
    let value = false
    // Block Scope
    if (true) {
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log('Block scope', a, b, c, d, value)
    }
    console.log('value is modified',c, d, value)
}
localScope()
console.log('Local Scope', c, d)

// Notes: A block level statement are inside the curly bracket {}

// Disadvantage of var keyword

console.log('Disadvantage of var keyword')

console.log('var used in function')
function varScope() {
    var gravity = 9.81
    console.log(gravity)
}
console.log(gravity) // throw not defined error

console.log('var used in block level in if statement')
if(true) {
    var gravity = 9.81
    console.log(gravity)
}
console.log(gravity) // can be accessed easily

console.log('var used in block level inside the for loop')
for (var i = 0; i < 3; i++) {
    console.log(i)
}
console.log(i) // can be accessed easily

/*
So from above example to prevent the sneakiness of var keyword ES6 recommended to use let or const keyword
*/
