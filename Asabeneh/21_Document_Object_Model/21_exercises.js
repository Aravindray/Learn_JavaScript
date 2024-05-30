// Level 1

console.log('Level 1')

console.log('---Question 1---')

let firstElementUsingQsTag = document.querySelector('p')
console.log(firstElementUsingQsTag)

console.log('---Question 2---');

let firstElementUsingQsId = document.querySelector('#first-para')
let secondElementUsingQsId = document.querySelector('#second-para')
let thirdElementUsingQsId = document.querySelector('#third-para')

console.log(firstElementUsingQsId)
console.log(secondElementUsingQsId)
console.log(thirdElementUsingQsId)

console.log('---Question 3---');

let getAllPElements = document.querySelectorAll('p')
console.log(getAllPElements)

console.log('---Question 4---')

getAllPElements.forEach(ele => console.log(ele.textContent))

console.log('---Question 5---')

getAllPElements[3].textContent = 'Fourth Paragraph'

console.log('---Question 6---')

let allPElements = document.getElementsByTagName('p')

allPElements[0].setAttribute('class', 'paragraph')
allPElements[1].setAttribute('class', 'paragraph')
allPElements[2].className = 'paragraph'
allPElements[3].className = 'paragraph'

allPElements[0].setAttribute('id', 'para-one')
allPElements[1].setAttribute('id', 'para-two')
allPElements[2].id = 'para-three'
allPElements[3].id = 'para-four'

// Level 2
console.log('Level 2');

console.log('---Question 1---')
function randomPlay() {
    const randomColors = ['#FF0000', '#FF8C00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#1E90FF', '#0000FF', '#8A2BE2', '#FF00FF', '#FF1493', '#FFFFFF']
    const randomBorderStyles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'] 
    const randomFontSizes = ['40px', '50px', '60px', '70px']
    const randomFontFamilies = ['Serif', 'Papyrus', 'Courier New', 'Lucida Console', 'Brush Script MT', 'Helvetica']

    let randomColIndex = () => {
        return Math.floor(Math.random() * randomColors.length)
    }
    let randomBorStyIndex = () => {
        return Math.floor(Math.random() * randomBorderStyles.length)
    }
    let randomFSIndex = () => {
        return Math.floor(Math.random() * randomFontSizes.length)
    }
    let randomFFIndex = () => {
        return Math.floor(Math.random() * randomFontFamilies.length)
    }

    console.log('---Question 1.a---') // changing color

    for (const para of allPElements) {
        para.style.color = randomColors[randomColIndex()]
    }

    console.log('---Question 1.b---') // changing background

    for (const para of allPElements) {
        para.style.backgroundColor = randomColors[randomColIndex()]
    }

    console.log('---Question 1.c---') // changing border

    for (const para of allPElements) {
        para.style.border = `4px ${randomBorderStyles[randomBorStyIndex()]} ${randomColors[randomColIndex()]}`
    }

    console.log('---Question 1.d---') // changing font size

    for (const para of allPElements) {
        para.style.fontSize = `${randomFontSizes[randomFSIndex()]}`
    }

    console.log('---Question 1.e---') // changing font family

    for (const para of allPElements) {
        para.style.fontFamily = `${randomFontFamilies[randomFFIndex()]}`
    }
}
randomPlay()

console.log('---Question 2---')
const oddOrEven = () => {
    getAllPElements.forEach((element, i) => {
        element.style.fontSize = '25px'
        if (i % 2 === 0) {
            element.style.color = 'red'
        } else {
            element.style.color = 'lime'
        }
    })
}
oddOrEven()

console.log('---Question 3---')
const doThings = () => {
    getAllPElements.forEach((ele, i) => {
        ele.textContent = `${i}`
        ele.className = `para`
        ele.id = `${i}-para`
    })
}
doThings()

// Level 3 - check out 21_mini_project_1.js + 21_mini_project_1.html
