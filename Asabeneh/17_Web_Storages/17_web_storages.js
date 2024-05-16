// Web Storages

// HTML Web Storage Objects

/*
HTML5 provide the ability to store data within the browser in two different object types.

1. sessionStorage - data with expiring time, whenever the browser tab is closed the data will be removed.
2. localStorage - data without expiring time, data will store locally even if close the browser.

Since sessionStorage and localStorage is same we look on localStorage.

Local Storage Methods
1. localStorage - Display local storage object
2. localStorage.setItem() - It add key/value pair data to local storage, it takes keys and value as parameter
3. localStorage.getItem() - It displays the stored item, it takes key as a parameter.
4. localStorage.clear() - It removes all the data from local storage.
5. localStorage.removeItem() - It remove particular item from the local storage, it takes key as a parameter.
6. localStorage.key() - It display data stored in local storage, it takes index as a parameter.
*/

// Setting item to local storage.

console.log('Setting item to local storage')

/*
When we set item to store data in local storage it will be stored as a "string". If we storing an array or an object we need to stringify it first or else it lost the original structure.

Syntax:

localStorage.setItem('key', 'value')
*/

console.log(localStorage)

console.log('Storing string in a local storage')

localStorage.setItem('fullName', 'Aravindray')
console.log(localStorage)

console.log('Storing number in local storage')

localStorage.setItem('age', 25)
console.log(localStorage)

console.log('Storing array in local storage')

const skills = ['HTML', 'CSS', 'Python', 'JavaScript']
const stringifySkills = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', stringifySkills)
console.log(localStorage)

const skillsLevel = [
    {tech: 'HTML', level: 9},
    {tech: 'CSS', level: 7},
    {tech: 'Python', level: 8},
    {tech: 'JavaScript', level: 7},
]
let stringifySkillsLevel = JSON.stringify(skillsLevel, undefined, 2)
localStorage.setItem('skillLevel', stringifySkillsLevel)
console.log(localStorage)

console.log('Storing an object in local storage')

const user = {
    firstName: 'Aravind',
    age: 25,
    skills: ['HTML', 'CSS', 'Python', 'JavaScript']
}
let userJson = JSON.stringify(user, undefined, 2)
localStorage.setItem('userObject', userJson)
console.log(localStorage)

// Remove Item from a local storage

console.log('Removing Item from a local storage')

localStorage.removeItem('HTML,CSS,Python,JavaScript')
console.log(localStorage)

// Getting Item from local storage

console.log('Getting Item from local storage')

/*
We get data from local storage using .getItem()

Syntax:

localStorage.getItem('key')
*/

let print1 = localStorage.getItem('userObject')
console.log(print1)

let print2 = localStorage.getItem('currentTheme')
console.log(print2)

console.log(localStorage.getItem('skillLevel'))

let printSkills = localStorage.getItem('skills')
console.log(printSkills)
console.log('see the differences 🡡🡣')
let printSkillsObj = JSON.parse(printSkills, undefined, 2)
console.log(printSkillsObj)

// Clearing a local Storage.

console.log('Clearing a local storage after 6 seconds')

setTimeout(() => {
    localStorage.clear()
}, 6000);
