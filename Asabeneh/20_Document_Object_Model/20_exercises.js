// Level 1
console.log('Level 1')

console.log('---Question 1---')

let selectMainP = document.querySelectorAll('main p')
let firstMainP = selectMainP[0]
console.log(firstMainP)

let selectMainPUsingTagName = document.getElementsByTagName('p')
let firstMainPUsingTagName = selectMainPUsingTagName[0]
console.log(firstMainPUsingTagName)

console.log('---Question 2---')

let firstMainPUsingId = document.querySelector('#main__p-one')
console.log(firstMainPUsingId)

let secondMainPUsingId = document.querySelector('#main__p-two')
console.log(secondMainPUsingId)

let thirdMainPUsingId = document.querySelector('#main__p-three')
console.log(thirdMainPUsingId)

let fourthMainPUsingId = document.querySelector('#main__p-four')
console.log(fourthMainPUsingId)

console.log('---Question 3---')

let selectAllPasNode = document.querySelectorAll('p')
console.log(selectAllPasNode)

let selectAllPByTag = document.getElementsByTagName('p')
console.log(selectAllPByTag)

console.log('---Question 4---')

selectAllPasNode.forEach(result => console.log(result.textContent))

console.log('---Question 5---')

let setFourthMainP = document.querySelector('#main__p-four')
setFourthMainP.textContent = 'Fourth Paragraph'

console.log('---Question 6---')

let setClassAttribute = document.querySelectorAll('p')

for (let i = 0; i < setClassAttribute.length; i++) {
    let userInput = prompt('What do you want to name your class?')
    setClassAttribute[i].setAttribute('class', userInput)
}

// To check assigned class names use this loop

setClassAttribute.forEach(p => console.log(p.className))

// another method to set id / class name

setClassAttribute[0].id = 'new-one' // this will replace the old id name

setClassAttribute[1].id = 'new-two'
setClassAttribute[2].id = 'new-three'
setClassAttribute[3].id = 'new-four'
