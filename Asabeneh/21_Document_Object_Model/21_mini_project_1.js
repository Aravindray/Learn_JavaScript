// Add Current Year, Current Date Time and change colors

let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let date = now.getDate()
const listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let formattedDate = `${listOfMonths[month]} ${date}, ${year}`

let addYear = document.getElementById('current-year')
addYear.textContent = `${year}`

setInterval(() => {
    let colorWheel = Math.floor(Math.random() * 361)
    let saturation = Math.floor(Math.random() * 101)
    addYear.style.color = `hsl(${colorWheel},${saturation}%,50%)`
}, 1000);

let dateTime = document.getElementById('date-time')
dateTime.style.padding = '10px'

setInterval(() => {
    let now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    let formattedTime = `${hour}:${min}:${sec}`
    dateTime.textContent = `${formattedDate} ${formattedTime}`
    let colorWheel = Math.floor(Math.random() * 361)
    dateTime.style.backgroundColor = `hsl(${colorWheel},100%,50%)`
} , 1000)

// Center the elements

let body = document.body
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

let main = document.querySelector('.wrapper')
main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'

// Manipulating List Items

let ul = document.querySelector('ul')
ul.style.listStyleType = 'none'

let li = document.querySelectorAll('li')
for (let list of li) {
    list.style.margin = '8px'
    list.style.padding = '10px'
    if (list.textContent.includes('Done')) {
        list.style.backgroundColor = 'lime'
    } else if (list.textContent.includes('Ongoing')) {
        list.style.backgroundColor = 'yellow'
    } else {
        list.style.backgroundColor = 'red'
    }
}

// List of Challenges

let h2 = document.querySelector('h2')
h2.style.textDecoration = 'underline'
