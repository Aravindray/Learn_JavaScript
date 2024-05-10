// Sets

/*
Set is the collection of element, ordered data type without any duplicate.

syntax:

const variableName = new set()
*/

console.log('Let\'s Create an empty set')

const emptySet = new Set()
console.log(emptySet)

// Creating a set from an array

console.log('Creating set from an array')

const languages = ['English','Finnish','English', 'French', 'Spanish', 'English', 'French']

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// Set iteration

console.log('We can iterate through set objects')

for (let language of setOfLanguages) {
    console.log(language)
}

// Find size of set using .size method

console.log(setOfLanguages.size)

// Adding Element to set

/*
To add the element in set we use add() method.

Syntax:
setName.add('newElement')
*/

console.log('Adding element to set using add() method')

const companies = new Set()
console.log(companies)
console.log(companies.size)

companies.add('Amazon')
companies.add('Facebook')
companies.add('Oracle')
companies.add('Microsoft')
companies.add('Google')

console.log(companies)
console.log(companies.size)

// Deleting a element from a set by using delete('elementName/Value') method

console.log('Deleting a element from a set using .delete() method')

companies.delete('Amazon')
companies.delete('Facebook')
console.log(companies)

// Checking if element present in the set with .has('elementName/Value') method

companies.add('Amazon')

console.log('checking if element available in set using .has() method')

console.log(companies.has('Facebook'))
console.log(companies.has('Google'))

// Clearing all element from set by using .clear() method

console.log('Clearing all element from a set by using .clear() method')

companies.clear()
console.log(companies)

// Let's find out how many time each languages repeated in languages array

console.log('Example of set')

console.log(languages)
let result = []

for (const language of setOfLanguages) {
    let languageCount = languages.filter(lang => lang === language)
    result.push({lang: language, count: languageCount.length})
}

console.log(result)

// Union of Sets (A U B)

/*
In Math we have learned unions, intersection and difference by using venn diagram. let's explore the same in programming set objects also.

To find union of two sets we can achieve with the help of spread operator(...).
*/

console.log('Set Unions')

const a = [1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7]
const c = [...a, ...b]

const setOfA = new Set(a)
const setOfB = new Set(b)
const setOfC = new Set(c)

console.log(setOfA)
console.log(setOfB)
console.log(setOfC)

// Intersection of Set (A ∩ B)

/*
To find the intersection between 2 sets we use filter method cleverly.
*/

console.log('Set Intersection')

const d = a.filter(ele => setOfB.has(ele))
console.log(d)

const setOfD = new Set(d)
console.log(setOfD)

// Difference between 2 sets (A - B) and (B - A)

/*
We Use filter method to find the differences.
*/

console.log('Set Differences')

const AB = a.filter(ele => !setOfB.has(ele))
const setOfAB = new Set(AB)
console.log(setOfAB)

const BA = b.filter(ele => !setOfA.has(ele))
const setOfBA = new Set(BA)
console.log(setOfBA)
