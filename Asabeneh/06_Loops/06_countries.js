const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

// Level 2

console.log('// Level 2')

console.log('---Question 4---')

let upperCountries = []
for (const country of countries) {
    upperCountries.push(country.toUpperCase())
}
console.log(upperCountries)

console.log('---Question 5---')

let countriesLength = []
for (const country of countries) {
    countriesLength.push(country.length)
}
console.log(countriesLength)

console.log('---Question 6---')

let countryDetails = []
let arrOfCountryDetails = []

for (const country of countries) {
    let threeLetter = country.slice(0,3).toUpperCase()
    let lenOfCountry = country.length
    countryDetails.push(country)
    countryDetails.push(threeLetter)
    countryDetails.push(lenOfCountry)
    arrOfCountryDetails.push(countryDetails)
    countryDetails = []
}
console.log(arrOfCountryDetails)

console.log('---Question 7---')

let landCountries = []
for (const country of countries) {
    if (country.includes('land')) {
        landCountries.push(country)
    }
}
if (landCountries.length === 0) {
    console.log('All these countries are without land')
}
else {
    console.log(landCountries)
}

console.log('---Question 8---')

let iaCountries = []
let iaCountriesNot = []
for (const country of countries) {
    if (country.includes('ia')) {
        iaCountries.push(country)
    }
    else {
        iaCountriesNot.push(country)
    }
}
if (iaCountries.length ===  0) {
    console.log('These are countries ends without ia',iaCountriesNot)
}
else {
    console.log(iaCountries)
}

console.log('---Question 9---')

let charCount = 0
let lengthiestCountryName = []
for (const country of countries) {
    if (country.length > charCount) {
        lengthiestCountryName = []
        lengthiestCountryName.push(country)
        charCount = country.length
    }
}
console.log(lengthiestCountryName.toString())

console.log('---Question 10---')

let fiveCharCountry = []
for (const country of countries) {
    if (country.length === 5) {
        fiveCharCountry.push(country)
    }
}
console.log(fiveCharCountry)
