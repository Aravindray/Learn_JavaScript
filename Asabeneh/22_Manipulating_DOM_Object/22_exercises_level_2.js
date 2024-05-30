import { countries } from "./22_countries.js"

// Center the element

let body = document.body
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

// Adding Countries length
let countriesCount = document.getElementById('countries-count')
countriesCount.textContent = countries.length

// container
let container = document.querySelector('.container')
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.justifyContent = 'space between'
container.style.alignItems = 'center'
container.style.gap = '0.5rem'

// add countries
for (const country of countries) {
    let addDiv = document.createElement('div')
    addDiv.className = 'con'
    addDiv.innerHTML = country
    container.appendChild(addDiv)
}

// container child
let styleInnerDiv = document.getElementsByClassName('con')

for (let innerDiv of styleInnerDiv) {
    innerDiv.style.width = '110px'
    innerDiv.style.height = '110px'
    innerDiv.style.display = 'flex'
    innerDiv.style.justifyContent = 'center'
    innerDiv.style.alignItems = 'center'
    innerDiv.style.border = '1px solid black'
    innerDiv.style.textAlign = 'center'
}

// Cheating
let header2 = document.getElementsByTagName('h2')
header2[0].style.textAlign = 'center'

// Letter Spacing
let header1 = document.getElementsByTagName('h1')
header1[0].style.letterSpacing = '0.5rem'
