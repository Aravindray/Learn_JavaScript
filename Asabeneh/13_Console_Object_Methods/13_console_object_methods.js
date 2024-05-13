// Console Object Methods

/*
We will look into more console object methods
*/

// console.log() Method

console.log('console.log() Method')

/*
We use console.log() method to show output in browser console. 
We can also substitute values in console.log() method and we can also change console.log() output color using %c.
*/

console.log('30 Days of JavaScript') // showing output in browser console.

console.log('%d %s of JavaScript',30,'Days') // substitution I think %d is for digits and %s for strings

console.log('Styling log messages')

console.log('%c30 Days of JavaScript', 'color:green') // display the message as green

console.log('%c30 Days%c %cof%c %cJavaScript','color:green','','color:red','', 'color:orange')

// console.warn() Method

console.log('console.warn() Method')

console.warn('This is a warning')
console.warn('You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!')
console.warn('Warning is different from error')

// console.error() Method

console.log('console.error() Method')

console.error('This is an error message')
console.error('We all make mistakes')

// console.table() Method

/*
This method display the data as a table on the console. This method takes one parameter as array or an object and it also takes one optional columns argument.
*/

console.log('console.table() Method')

const names = ['Aravind', 'Asabeneh', 'Rich Bell']
console.table(names)

const users = {
    name: 'Aravind',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 24
}
console.table(users)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden','Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

const newUsers = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
]
console.table(newUsers)

// console.time() Method

console.log('console.time() Method')

/*
This method starts a timer so we can use it to track program execution. We can start 10,000 timer in single page and we can also give each timer a unique name. when we call the console.timeEnd() method with the given name that method return the time in milliseconds.
*/

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [country, city] of countries) {
    console.log(country, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([country, city]) => {
    console.log(country, city)
})
console.timeEnd('forEach loop')

// console.info() Method

console.log('console.info() Method')

console.info('30 Days of JavaScript challenge is trending in github')
console.info('I am console info message')

// console.assert() Method

/*
The console.assert() Method writes an error message if assertion is failed. This method takes 2 arguments first one is assertion expression and second one is assertion failed message. If assertion expression is passed no message will be displayed.
*/

console.log('console.assert() Message')

console.assert(4 > 3, '4 is greater than 3')
console.assert(3 > 5, 'Nope 3 is not greater than 5')

for (let i = 0; i <= 10; i++) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, {number: i, errorMessage: errorMessage})
}

// console.group() Method

console.log('console.group() Method')

/*
This method help to group different log messages.
*/

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(users)
console.log(newUsers)
console.groupEnd()

// console.count() Method

console.log('console.count() Method')

/*
This method print how many numbers of time the console.count() methods calls, this method takes string as a argument.
*/

const func = () => {
    console.count('Function has been called: ')
}
func()
func()
func()
func()
func()

// console.clear() Method - This method cleans the browser console.

const notify = () => {
    console.warn('console.clear() method about to be execute in 3 seconds')
}

const clear = () => {
    console.clear()
}

setTimeout(notify, 2000)
setTimeout(clear, 5000)
