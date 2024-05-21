// Level 1

console.log('// Level 1')

console.log('---Question 1---')

let firstName = 'Aravind'
let lastName = 'ray'
let planet = 'Earth'
let city = 'Salem'
let age = 24
let isMarried = false
let bornYear = 1999
console.log('typeof firstName //',typeof firstName)
console.log('typeof lastName //',typeof lastName)
console.log('typeof planet //',typeof planet)
console.log('typeof city //',typeof city)
console.log('typeof age //',typeof age)
console.log('typeof isMarried //',typeof isMarried)
console.log('typeof bornYear //',typeof bornYear)

console.log('---Question 2---')

console.log("typeof '10' == typeof 10 //",typeof '10' == typeof 10)

console.log('---Question 3---')

console.log("parseInt('9.8') == 10 //",parseInt('9.8') == 10)

console.log('---Question 4---')

console.log("firstName.includes('vi') //",firstName.includes('vi'))
console.log("typeof bornYear == 'number' //",typeof bornYear == 'number')
console.log("'10' == 10 //",'10' == 10)
console.log()
console.log("'10' === 10 //",'10' === 10)
console.log("isMarried == true //",isMarried == true)
console.log("'10.0' != 10.0 //",'10.0' != 10.0)

console.log('---Question 5---')

console.log("4 > 3 //",4 > 3)
console.log("4 >= 3 //",4 >= 3)
console.log("4 < 3 //",4 < 3)
console.log("4 <= 3 //",4 <= 3)
console.log("4 == 4 //",4 == 4)
console.log("4 === 4 //",4 === 4)
console.log("4 != 4 //",4 != 4)
console.log("4 !== 4 //",4 !== 4)
console.log("4 != '4' //",4 != '4')
console.log("4 == '4' //",4 == '4')
console.log("4 === '4' //",4 === '4')
console.log("'python'.length < 'jargon'.length //",'python'.length < 'jargon'.length)

console.log('---Question 6---')

console.log('4 > 3 && 10 < 12 //',4 > 3 && 10 < 12)
console.log('4 > 3 && 10 > 12 //',4 > 3 && 10 > 12)
console.log('4 > 3 || 10 < 12 //',4 > 3 || 10 < 12)
console.log('4 > 3 || 10 > 12 //',4 > 3 || 10 > 12)
console.log('!(4 > 3) //',!(4 > 3))
console.log('!(4 < 3) //',!(4 < 3))
console.log('!(false) //',!(false))
console.log('!(4 > 3 && 10 < 12) //',!(4 > 3 && 10 < 12))
console.log('!(4 > 3 && 10 > 12) //',!(4 > 3 && 10 > 12))
console.log("!(4 === '4') //",!(4 === '4'))
console.log("!('dragon'.includes('on') && 'python'.includes('on') //",!('dragon'.includes('on') && 'python'.includes('on')))

console.log('---Question 7---')

let now = new Date
console.log('Current Year is',now.getFullYear())
console.log('Current Month is',now.getMonth() + 1)
console.log('Today\'s Date is',now.getDate())
console.log('Current Week Day is',now.getDay())
console.log('Current Hour is',now.getHours())
console.log('Current Minute is',now.getMinutes())
console.log('Time in seconds from Jan 1, 1970 to now',now.getTime())
console.log()

// Level 2

console.log('// Level 2')

console.log('---Question 5---')

let x
let y = 2 * x - 2 // The equation is already in form of y = mx + b
let slope_1 = 2 // The coefficient of x in the equation is 2 so 2 is the slope
let yIntercept = '(0, -2)' // The constant term represent y intercept
let XIntercept = '(1, 0)' // If we assign y = 0 the x intercept will be calculate

console.log('---Question 6---')

let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10

let slope = (y2 - y1) / (x2 - x1)
console.log('Slope is',slope)

console.log('---Question 7---') //  Compare the slope of above two questions.

console.log('Both slope are same because the result is 2')

console.log('---Question 8---')

let X = -3
let Y = X ** 2 + 6 * X + 9
console.log(`X is ${X} and Y is ${Y}`)

console.log('---Question 10---')

let yourName = 'Aravind'
yourName.length > 7 ? console.log('Your name is long') : console.log('Your name is short')

console.log('---Question 11---')

firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)

console.log('---Question 12---')

let myAge = 250
let yourAge = 25

myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you.`) : console.log(`I am ${yourAge - myAge} years younger than you.`)

console.log('---Question 15---')

let year = new Date().getFullYear()
let month = new Date().getMonth()
let date = new Date().getDate()
let hour = new Date().getHours()
let minute = new Date().getMinutes()

console.log(`${year}-${month}-${date} ${hour}:${minute}`)
console.log(`${date}-${month}-${year} ${hour}:${minute}`)
console.log(`${date}/${month}/${year} ${hour}:${minute}`)
console.log()

// Level 3

console.log('// Level 3')

console.log('---Question 1---')

String(month).length < 2 && String(date).length < 2 ? console.log(`${year}-0${month}-0${date} ${hour}:${minute}`) : String(date).length < 2 ? console.log(`${year}-${month}-0${date} ${hour}:${minute}`) : console.log(`${year}-0${month}-${date} ${hour}:${minute}`)
