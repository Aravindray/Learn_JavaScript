// Level 1

console.log('// Level 1')

console.log('---Question 3---')

let a = 4
let b = 5

console.log('By using if else...')
if (a > b) {
    console.log(`${a} is greater than ${b}`)
}
else {
    console.log(`${b} is greater than ${a}`)
}
console.log()
console.log('By using ternary operator...')
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

console.log('---Question 4---')

let enterNumber = 9
if ((enterNumber % 2) === 0) {
    console.log(`${enterNumber} is an even number`)
}
else {
    console.log(`${enterNumber} is an odd number`)
}

console.log()

// Level 2

console.log('// Level 2')

console.log('---Question 1---')

let mark = 101

if (mark >= 90 && mark <= 100) {
    console.log(`You got an "A" grade | ${mark} out of 100`)
}
else if (mark >= 70 && mark <= 89) {
    console.log(`You got an "B" grade | ${mark} out of 100`)
}
else if (mark >= 60 && mark <= 69) {
    console.log(`You got an "C" grade | ${mark} out of 100`)
}
else if (mark >= 50 && mark <= 59) {
    console.log(`You got an "D" grade | ${mark} out of 100`)
}
else if (mark >= 0 && mark <= 49) {
    console.log(`You got an "F" grade | ${mark} out of 100`)
}
else {
    console.log(`Entered mark ${mark} is invalid or out of range`)
}

console.log('---Question 2---')

let month = 'may'

month = month.toLowerCase()

if (month === 'december' || month === 'january' || month === 'february') {
    console.log('The season is "Winter"')
}
else if (month === 'march' || month === 'april' || month === 'may') {
    console.log('The season is "Spring"')
}
else if (month === 'june' || month === 'july' || month === 'august') {
    console.log('The season is "Summer"')
}
else if (month === 'september' || month === 'october' || month === 'november') {
    console.log('The season is "Autumn"')
}
else {
    console.log(`Entered month "${month}" is invalid`)
}

console.log('---Question 3---')

let day = 'TuEsDaY'
day = day.toLowerCase()

if (day === 'saturday' || day === 'sunday') {
    console.log(`${day.charAt(0).toUpperCase()+day.slice(1)} is a weekend.`)
}
else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
    console.log(`${day.charAt(0).toUpperCase()+day.slice(1)} is a working day.`)
}
console.log()

// Level 3

console.log("// Level 3")

console.log('---Question 1 & 2---')

let monthDays = 'augUst'
let year = 2024
let elseMonth = monthDays
monthDays = monthDays.toLowerCase()
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

if (monthDays === 'january' || monthDays === 'march' || monthDays === 'may' || monthDays === 'july' || monthDays === 'august' || monthDays === 'october' || monthDays === 'december') {
    console.log(`${monthDays.charAt(0).toUpperCase()+monthDays.slice(1)} has 31 days.`)
}
else if(monthDays === 'april' || monthDays === 'june' || monthDays === 'september' || monthDays === 'november') {
    console.log(`${monthDays.charAt(0).toUpperCase() + monthDays.slice(1)} has 30 days.`)
}
else if(monthDays === 'february' && isLeapYear) {
    console.log(`${monthDays.charAt(0).toUpperCase() + monthDays.slice(1)} has 29 days because it's leap year.`)
}
else if(monthDays === 'february') {
    console.log(`${monthDays.charAt(0).toUpperCase() + monthDays.slice(1)} has 28 days.`)
}
else {
    console.log(`entered string "${elseMonth}" is not valid Month name`)
}
