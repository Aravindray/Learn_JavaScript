// Promise

/*
Promise a way to handle asynchronous function, It return the even the success value or failed reason. This let asynchronous function like synchronous function instead of return the value the immediately it return the promise in 3 states:

1. Pending - Initial State either resolved or reject
2. fulfilled / resolve - Completed state
3. reject - Failed state with reason


promise.prototype.then() and promise.prototype.cache() methods return promise
*/

// Callback

console.log('Callback Example')

/*
To understand promises we first need to understand callback function first, now let's us see difference 
between callback and promise
*/

const doSomething  = callback => {
    setTimeout(()=>{
        const skills = ['HTML', 'CSS', 'Python', 'JavaScript']
        callback(false, skills) // callback('It did not get well', skills)
    }, 1000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    else {
        return console.log(result)
    }
}

doSomething(callback)

// Promise Constructor

setTimeout(()=> console.log('Promise Example'), 2000)

/*
We can create promise with new keyword followed by Promise and parenthesis which takes callback function.
The Promise callback function has two parameter which are resolve and reject.

Syntax:

const functionName = new Promise((resolve, reject) => {
    resolve('success')
    reject('fail')
})
*/

const doPromise = new Promise((resolve, reject) => {
    // Positive Scenario
    // setTimeout(()=>{
    //     const skills = ['HTML', 'CSS', 'Python', 'JavaScript']
    //     if (skills.length > 0) {
    //         resolve(skills)
    //     }
    //     else {
    //         reject('Something wrong was happened')
    //     }
    // }, 4000)

    // Negative Scenario
    setTimeout(()=>{
        const skills = ['HTML', 'CSS', 'Python', 'JavaScript']
        if (skills.includes('Node')) {
            resolve('FullStack Developer')
        }
        else {
            reject('Something wrong was happened')
        }
    }, 3000)
})

doPromise.then(result => console.log(result)).catch(error => console.log(error))

// Fetch API

/*
Fetch AIP provides interface for fetching resources (include across the network), the new API provides an more powerful and flexible feature set.
*/

setTimeout(()=> console.log('Fetch API Example'), 4000)

const url = 'https://restcountries.com/v2/all'

setTimeout(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}, 5000)

// Async and Await

/*
It is a elegant way to write promises, it is easy to understand and it is clean to write.
*/

setTimeout(() => {
    console.log('Async and Await Examples')
}, 14000);

const square = async function (n) {
    return n * n
}

setTimeout(() => {
    console.log(square(2))
}, 16000);

/*
A word async before the function means it return the promise, to access the value instead of promise we 
use await keyword. Both async and await can not work alone without each other.
*/

// Let's fetch api using both promise and async - await method

// fetch api using promise - check code line 93 - 98

// fetch api using async and await function

setTimeout(() => {
    console.log('fetch API using async and await function')
}, 17000);

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}

setTimeout(() => {
    fetchData()
}, 20000);
