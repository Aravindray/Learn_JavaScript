// Maps

/*
I think maps is also like an object like key value pair with different syntax.

{
    'key' => 'value',
    'key' => 'value'
}

const variableName = new Maps()
*/

// Creating an empty map

console.log('Creating an empty map')
const empty = new Map()
console.log(empty)

// Creating an map from array

const countriesArray = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.log('Creating an map from array')
const countriesMap = new Map(countriesArray)
console.log(countriesMap)

// Adding values to the map

console.log('Adding values to the map')

console.log(countriesMap.size)
countriesMap.set('Denmark', 'Copenhagen')
countriesMap.set('England', 'London')
countriesMap.set('Christmas Island', 'Flying Fish Cove')
console.log(countriesMap)
console.log(countriesMap.size)

// Getting value from a map to achieve this we use .get() method

console.log('Getting values from map')

console.log(countriesMap.get('England'))
console.log(countriesMap.get('Christmas Island'))

console.log('Getting all key values array pair from map using loop')

for (const country of countriesMap) {
    console.log(country)
}

console.log('Getting unpacking key value from map using loop')

for (const [country, capitalCity] of countriesMap) {
    console.log(`"${capitalCity}" is the capital city of "${country}".`)
}

// Checking key exist in a map with .has() method

console.log('Checking if key exist in a map')

console.log(countriesMap.has('Finland'))
console.log(countriesMap.has('USA'))
