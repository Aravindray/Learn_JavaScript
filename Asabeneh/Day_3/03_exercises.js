// Level 1

console.log('// Level 1')

let firstName = 'Aravind'
let lastName = 'ray'
let planet = 'Earth'
let city = 'Salem'
let age = 24
let isMarried = false
let bornYear = 1999

console.log('---Question 1---')

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
/*
console.log('---Question 1---')

let base = prompt('Enter the base of the triangle:')
let height = prompt('Enter the height of the triangle:')
let areaTriangle = 0.5 * +base * +height
alert(`Entered base is ${base}cm and height is ${height}cm and area of triangle is ${areaTriangle}cm`)

console.log('---Question 2---')

let a = prompt('Enter the side a of the triangle:')
let b = prompt('Enter the side b of the triangle:')
let c = prompt('Enter the side c of the triangle:')
let perimeterTriangle = +a + +b + +c
alert(`The perimeter of the triangle is ${perimeterTriangle}`)

console.log('---Question 3---')

let length = prompt('Enter the length of the rectangle:')
let width = prompt('Enter the width of the rectangle:')
alert(`The area of rectangle is ${+length * +width}`)
alert(`The perimeter of rectangle is ${2 * (+length + +width)}`)

console.log('---Question 4---')
const PI = 3.14
let radius = prompt('Enter the radius of the circle:')
alert(`Area of the circle is ${PI * +radius * +radius}`)
alert(`Circumference of the circle is ${2 * PI * +radius}`)

console.log('---Question 5---')

Calculate the slope, x-intercept and y-intercept of y = 2x -2
*/

console.log('---Question 6---')

let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10

let slope = (y2 - y1) / (x2 - x1)

console.log('Slope is',slope)

// console.log('---Question 7---') Compare the slope of above two questions.

console.log('---Question 8---')
let x = -3
let y = x ** 2 + 6 * x + 9
console.log(`x is ${x} and y is ${y}`)

/*
console.log('---Question 9---')

let hours = prompt('Enter the hours:')
let rate = prompt('Enter the rate per hour:')
alert(`Rate per hour is ${rate} and worked hours is ${hours} so you earned ${+hours * +rate}`)
*/

console.log('---Question 10---')

let yourName = 'Aravind'
yourName.length > 7 ? console.log('Your name is long') : console.log('Your name is short')

console.log('---Question 11---')
firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
