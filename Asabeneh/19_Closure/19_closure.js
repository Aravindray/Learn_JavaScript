// Closure

/*
Function can be inside the function that function can be inside another function. If inner function 
access the variable from outer function is called closure.
*/

console.log('Closure Example')

function outerFunction() {
    let count = 0
    console.log('Outer Function count', count)
    function innerFunction() {
        count++
        console.log('Inner Function count', count)
        return count
    }
    return innerFunction
}

let someVariableName = outerFunction()

console.log(someVariableName())
console.log(someVariableName())
console.log(someVariableName())

/*
Explanation: Whenever the function is called the variable count will increase, check out below 
experimental part
*/

console.log('Closure Experimental')

let count = 0

function outerExp() {
    count++
    console.log(count)
}

outerExp()
outerExp()
outerExp()
console.log('Count is',count)

function outerLayer() {
    let newCount = 0
    function plusOne() {
        newCount++
        return newCount
    }
    function minusOne() {
        newCount--
        return newCount
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}

const doSomething = outerLayer()

console.log('Step 0:',doSomething) // now I know why, check the outputs
console.log('Step 1:',doSomething.plusOne)
console.log('Step 2:',doSomething.plusOne)
console.log('Step 3:',doSomething.plusOne)
console.log('Step 4:',doSomething.minusOne)
console.log('Step 5:',doSomething.minusOne)

console.log('Experimental 2')

function out() {
    let newVariable = 0
    function addOne() {
        newVariable++
        return newVariable
    }
    return addOne
}

let exp2 = out()

console.log(exp2())
console.log(exp2())
console.log(exp2())
console.log()
console.log(out()())
console.log(out()())
