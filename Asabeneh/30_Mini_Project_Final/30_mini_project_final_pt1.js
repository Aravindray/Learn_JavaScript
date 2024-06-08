import { returnCountries } from "./30_countries_data.js";

const listOfColors = ['aqua', 'aquamarine', 'bisque', 'blanchedalmond', 'blue', 'blueviolet', 'cadetblue', 'chartreuse', 'coral', 'cornflowerblue', 'cyan', 'darkblue', 'darkorchid', 'darkturquoise', 'deeppink', 'deepskyblue', 'dodgerblue', 'forestgreen', 'fuchsia', 'gold', 'green', 'gray', 'greenyellow', 'hotpink', 'lawngreen', 'lightgreen', 'lightblue','lime', 'limegreen', 'magenta', 'mediumaquamarine', 'mediumspringgreen', 'mistyrose', 'orange', 'orangered', 'orchid', 'red', 'royalblue', 'salmon', 'seagreen', 'silver', 'slateblue', 'springgreen', 'teal', 'tomato', 'turquoise', 'violet', 'yellow', 'yellowgreen']

function returnRandomColor() {
    return listOfColors[Math.floor(Math.random() * listOfColors.length)]
}

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
let worldPopulation = 0

let searchQuery = []
let graphSearchQuery = []
let arrayOfLanguages = []
let setOfLanguages
let langObj = []
let mappedCountries = []

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
            cardContainer.innerHTML = ''
            countries.sort((a, b) => {
                let A = a.name.toLowerCase()
                let B = b.name.toLowerCase()
                return A.localeCompare(B)
            })
            displayCountries(countries)
            doCheck = false
        } else {
            sortName.textContent = 'Name ↓'
            cardContainer.innerHTML = ''
            countries.sort((a, b) => {
                let A = a.name.toLowerCase()
                let B = b.name.toLowerCase()
                return B.localeCompare(A)
            })
            displayCountries(countries)
            doCheck = true
        }
    })
    sortCapital.addEventListener('click', () => {
        if (doCheck) {
            sortCapital.textContent = 'Capital'
            cardContainer.innerHTML = ''
            countries.sort((a, b) => {
                let capitalA = (typeof a.capital === 'undefined') ? '' : a.capital.toLowerCase()
                let capitalB = (typeof b.capital === 'undefined') ? '' : b.capital.toLowerCase()
                return capitalA.localeCompare(capitalB)
            })
            displayCountries(countries)
            doCheck = false
        } else {
            sortCapital.textContent = 'Capital ↓'
            cardContainer.innerHTML = ''
            countries.sort((a, b) => {
                let capitalA = (typeof a.capital === 'undefined') ? '' : a.capital.toLowerCase()
                let capitalB = (typeof b.capital === 'undefined') ? '' : b.capital.toLowerCase()
                return capitalB.localeCompare(capitalA)
            })
            displayCountries(countries)
            doCheck = true
        }
    })
    sortPopulation.addEventListener('click', () => {
        if (doCheck) {
            sortPopulation.textContent = 'Population'
            cardContainer.innerHTML = ''
            countries.sort((a, b) => {
                return a.population - b.population
            })
            displayCountries(countries)
            doCheck = false
        } else {
            sortPopulation.textContent = 'Population ↓'
            cardContainer.innerHTML = ''
            countries.sort((a, b) => {
                return b.population - a.population
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
    console.log(graphSearchQuery)
    graphSearchQuery.forEach(country => {
        let showTrue = country.name.toLowerCase().includes(value)
        country.element.classList.toggle('hide', !showTrue)
    })
})

function displayGraph(arr, count) {
    let WP = count
    graphSearchQuery = arr.map(ele => {
        let barCard = barGraphTemplate.content.cloneNode(true).children[0]
        let barName = barCard.querySelector('.barName')
        let barWidth = barCard.querySelector('.barWidth')
        let barCount = barCard.querySelector('.barCount')
        barName.textContent = ele.name
        barCount.textContent = ele.count
        barWidth.style.width = `${Math.round((ele.count / WP) * 100)}%`
        barWidth.style.backgroundColor = `${returnRandomColor()}`
        barContainer.append(barCard)        
        return {
            name: ele.name,
            element: barCard
        }
    })
}

async function fetchCountriesAgain() {
    let countries = await returnCountries()
    worldPopulation = countries.reduce((acc, cur) => acc + cur.population, 0)
    mappedCountries = countries.map(country => {
        return {
            name: country.name,
            count: country.population
        }
    })
    mappedCountries.unshift({name: 'World', count: worldPopulation})
    mappedCountries.sort((a, b) => b.count - a.count)
    displayGraph(mappedCountries, worldPopulation)
    for (let country of countries) {
        for (let language of country.languages) {
            arrayOfLanguages.push(language)
        }
    }
    setOfLanguages = new Set(arrayOfLanguages)
    for (let lang of setOfLanguages) {
        let resultCount = arrayOfLanguages.filter(ele => ele === lang)
        let obj = {
            name: lang,
            count: resultCount.length
        }
        langObj.push(obj)
    }
    langObj.sort((a, b) => b.count - a.count)
}
fetchCountriesAgain()

showLanguages.addEventListener('click', () => {
    barContainer.innerHTML = ''
    buttonStatus.textContent = '10 Most Spoken Languages in the world'
    displayGraph(langObj.slice(0, 10), langObj[0].count)
})

showPopulation.addEventListener('click', () => {
    barContainer.innerHTML = ''
    buttonStatus.textContent = '10 Most Populated countries in the world'
    displayGraph(mappedCountries.slice(0, 11), worldPopulation)
})
