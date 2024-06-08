import { returnCountries } from "./30_countries_data.js";

const listOfColors = ['aqua', 'aquamarine', 'bisque', 'blanchedalmond', 'blue', 'blueviolet', 'cadetblue', 'chartreuse', 'coral', 'cornflowerblue', 'cyan', 'darkblue', 'darkorchid', 'darkturquoise', 'deeppink', 'deepskyblue', 'dodgerblue', 'forestgreen', 'fuchsia', 'gold', 'green', 'gray', 'greenyellow', 'hotpink', 'lawngreen', 'lightgreen', 'lightblue','lime', 'limegreen', 'magenta', 'mediumaquamarine', 'mediumspringgreen', 'mistyrose', 'orange', 'orangered', 'orchid', 'red', 'royalblue', 'salmon', 'seagreen', 'silver', 'slateblue', 'springgreen', 'teal', 'tomato', 'turquoise', 'violet', 'yellow', 'yellowgreen']

// header

let header = document.querySelector('.header')
let countriesCount = document.querySelector('#countriesCount')
let searchCount = document.createElement('p')
searchCount.id = 'searchCount'

// main 

let searchInput = document.querySelector('#search')
let sortName = document.querySelector('#sortName')
let sortCapital = document.querySelector('#sortCapital')
let sortPopulation = document.querySelector('#sortPopulation')
let cardContainer = document.querySelector('#card-container')
let countryCardTemplate = document.querySelector('[country-card-template]')

// main bar graph

let showPopulation = document.querySelector('#showPopulation')
let showLanguages = document.querySelector('#showLanguages')
let buttonStatus = document.querySelector('#buttonStatus')
let barContainer = document.querySelector('#bar-container')
let barGraphTemplate = document.querySelector('[bar-graph-template]')

let searchQuery = []

function displayCountries(countries) {
    countriesCount.textContent = `${countries.length} Countries`
    searchQuery = countries.map(country => {
        let card = countryCardTemplate.content.cloneNode(true).children[0]
        let flagImage = card.querySelector('img')
        flagImage.setAttribute('src', `${country.flag}`)
        flagImage.setAttribute('alt', `Image of ${country.name} flag`)
        let countryName = card.querySelector('.countryName')
        countryName.textContent = country.name
        let countryCapital = card.querySelector('.countryCapital')
        countryCapital.textContent = country.capital
        let countryLanguages = card.querySelector('.countryLanguages')
        countryLanguages.textContent = country.languages.join(', ')
        let countryPopulation = card.querySelector('.countryPopulation')
        countryPopulation.textContent = country.population
        cardContainer.append(card)
        return {
            name: country.name,
            city: (typeof country.capital === 'undefined') ? '' : country.capital,
            lang: country.languages.join(', '),
            element: card
        }
    })
}

let doCheck = false

async function fetchCountries() {
    let countries = await returnCountries()
    displayCountries(countries)
    sortName.addEventListener('click', () => {
        if (doCheck) {
            sortName.textContent = 'Name'
            sortName.style.backgroundColor = 'orange'
            sortName.style.borderColor = 'orange'
            cardContainer.innerHTML = ''
            displayCountries(countries.reverse())
            doCheck = false
        } else {
            sortName.textContent = 'Name ↓'
            sortName.style.backgroundColor = 'violet'
            sortName.style.borderColor = 'violet'
            cardContainer.innerHTML = ''
            displayCountries(countries.reverse())
            doCheck = true
        }
    })
    sortCapital.addEventListener('click', () => {
        if (doCheck) {
            sortCapital.textContent = 'Capital'
            sortCapital.style.backgroundColor = 'orange'
            sortCapital.style.borderColor = 'orange'
            cardContainer.innerHTML = ''
            countries.sort((a, b) => {
                let capitalA = a.capital.toLowerCase()
                let capitalB = b.capital.toLowerCase()
                return capitalA.localeCompare(capitalB)
            })
            displayCountries(countries)
            doCheck = false
        } else {
            sortCapital.textContent = 'Capital ↓'
            sortCapital.style.backgroundColor = 'violet'
            sortCapital.style.borderColor = 'violet'
            cardContainer.innerHTML = ''
            countries.sort((a, b) => {
                let capitalA = a.capital.toLowerCase()
                let capitalB = b.capital.toLowerCase()
                return capitalB.localeCompare(capitalA)
            })
            displayCountries(countries)
            doCheck = true
        }
    })
}
fetchCountries()

searchInput.addEventListener('input', (e) => {
    let value = e.target.value.toLowerCase()
    let matchCount = searchQuery.filter(country => {
        const isVisible = country.name.toLowerCase().includes(value) || country.city.toLowerCase().includes(value) || country.lang.toLowerCase().includes(value)
        country.element.classList.toggle('hide', !isVisible)
        return country.name.toLowerCase().includes(value) || country.city.toLowerCase().includes(value) || country.lang.toLowerCase().includes(value)
    })
    searchCount.textContent = `${matchCount.length} countries satisfied the search criteria`
    header.appendChild(searchCount)
})
