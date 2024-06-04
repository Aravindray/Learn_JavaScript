import { personDetails as person } from './27_portfolio_person_details.js'

// Header

let fullName = document.querySelector('#fullName')
fullName.textContent = `${person.firstName} ${person.lastName}`

let bio = document.querySelector('#bio')
bio.innerHTML = person.bio

let techs = document.querySelector('#techs')

// change color

const returnHex = () => {
    return Math.floor(Math.random() * 361)
}

// change the keywords every 1s
let i = 0
setInterval(() => {
    techs.textContent = person.keywords[i]
    techs.style.color = `hsl(${returnHex()}, 100%, 50%)`
    i++
    if (i === person.keywords.length) {
        i = 0
    }
}, 1000);

// slide in animation

let emoji = document.querySelector('#emoji')
let msg = document.querySelector('#msg')

let j = 0
setInterval(() => {
    emoji.textContent = person.titles[j][0]
    msg.textContent = person.titles[j][1]
    j++
    if (j === person.titles.length) {
        j = 0
    }
}, 2000);

let bold = document.getElementsByTagName('b')

// highlight

let highlights = document.querySelector('#highlights')

for (let element of bold) {
    let newDiv = document.createElement('div')
    newDiv.textContent = element.textContent.toUpperCase()
    newDiv.className = 'scaleUp'
    highlights.appendChild(newDiv)
}
