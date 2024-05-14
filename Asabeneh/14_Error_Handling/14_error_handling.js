// Error Handling

/*
Like Python, with the help of error handling mechanism we can handle the exception we when execute the code with the try-catch-finally block.

syntax:

try {
    // code that may raise exception
} catch(err) {
    // code will execute if it encounter the error
} finally {
    // code will execute even if error raise or not
}

try: this block wrap suspicious code that might throw an error which will be useful to debug our code.

catch: this block executed if we encounter a error, this block have error parameter which will give detailed information about what type of error.

finally: this block will executed regardless if error occur or not, we can reset the variable that might modified during try block exception.
*/

console.log('Error Handling Examples')

try {
    let lastName = 'ray'
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.error(err)
}

try {
    let lastName = 'ray'
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.error(err)
} finally {
    console.log('I will be executed even if error occur or not')
}

// Catch block

/*
Catch block takes parameter, it is common to pass e, err or error as a parameter. The parameter is an object it has name and message keys.
*/

console.log('Catch block Example')

try {
    let firstName = 'Aravind'
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.error('Error Type is -',err.name)
    console.error('Error Message is -',err.message)
} finally {
    console.log('I will be executed even if error occur or not')
}

// throw statement

/*
Throw statement allows us to create a custom error. We can through a number, string, boolean or an object. Use the throw statement to throw an exception.
*/

console.log('throw statement examples')

/*
throw 'error404'
throw 42
throw false
throw new Error('Required')
*/

const throwErrorExampleFun = () => {
    let message
    let x = '3' // prompt('Enter the number')
    try {
        if (x == '') throw null
        if (isNaN(x)) throw NaN
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch(err) {
        console.log(err)
    }
}
throwErrorExampleFun()

// Basic Error Types

/*
1. ReferenceError - is throw if we try to access undefined variable or function.
2. SyntaxError - is throw if we make any wrong syntax typo
3. TypeError - is throw if we make wrong method call in different type
*/

console.log('ReferenceError')

const referenceErrorExample = () => {
    let firstName = 'Aravind'
    let fullName = firstName + ' ' + lastName
    console.log(fullName)
}
referenceErrorExample()

console.log('SyntaxError')

const  syntaxErrorExample = () => {
    let square = 3 x 3
    console.log(square)
}
syntaxErrorExample()

console.log('TypeError')

const typeErrorExample = () => {
    let num = 10
    console.log(num.toLowerCase())
}
typeErrorExample()
