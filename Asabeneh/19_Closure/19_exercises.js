// Level 1

console.log('Level 1')

console.log('---Question 1---')

function outerFun() {
    let something = false
    function innerFun() {
        something = true
        return something
    }
    return innerFun
}
console.log(outerFun())
console.log(outerFun()())
let someVariable = outerFun()
console.log(someVariable())

// Level 2

console.log('Level 2')

console.log('---Question 1---')

function justOuterFun() {
    let count = 0
    function firstInnerFun() {
        count++
        return count
    }
    function secondInnerFun() {
        return count++
    }
    function thirdInnerFun() {
        return count--
    }
    return {
        first: firstInnerFun(),
        second: secondInnerFun(),
        third: thirdInnerFun()
    }
}
let someNewVariable = justOuterFun()
console.log(someNewVariable.first)
console.log(someNewVariable.first)
console.log(someNewVariable.first)
