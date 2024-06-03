import { returnCountries } from "./26_countries_data.js";

async function fetchCountries() {
    try {
        let countries = await returnCountries()
        return countries
    } catch(error) {
        console.log(error)
    }
}

(async () => {
    let result = await fetchCountries()
    let countriesCount = document.querySelector('#countriesCount')
    countriesCount.textContent = `${result.length}`
    displayResult(result)
})()

let listOfCountries = document.querySelector('#listOfCountries')

function displayResult(arr) {
    for (let country of arr) {
        let newDiv = document.createElement('div')
        newDiv.textContent = country
        newDiv.className = 'card'
        listOfCountries.appendChild(newDiv)
    }
}

// main function

let matchFirst = document.querySelector('#matchFirst')

// function userInput() {
//     let searchCountries = document.querySelector('#searchCountries')
//     searchCountries.addEventListener('input', (e) => {
//         console.log(e.target.value)
//         return e.target.value
//     })
// }

// matchFirst.addEventListener('click', async () => {
//     matchFirst.style.backgroundColor = 'blueviolet'
//     listOfCountries.innerHTML = ''
//     let countries = await fetchCountries()
//     let value = userInput()
//     let result = countries.filter(country => {
//         return country.startsWith(value)
//     })
//     console.log(result)
// })
