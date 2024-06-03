import { countries_data } from "./25_countries_data.js";

// fetch elements

let countStatus = document.querySelector('#countStatus')
let pop = document.querySelector('#pop')
let lang = document.querySelector('#lang')
let btnStatus = document.querySelector('#btnStatus')
let visual = document.querySelector('#visual')

let countriesCount = []
let languagesCountWithDuplicate = []
let actualLanguageCount = []
let totalPopulation = 0

// functions for countries

function appendCountries() {
    for (let country of countries_data) {
        let obj = {
            name: country.name,
            population: country.population
        }
        countriesCount.push(obj)
    }
    countriesCount.sort((a, b) => {
        return b.population - a.population
    })
}

function totalPop() {
    appendCountries()
    for (let data of countriesCount) {
        totalPopulation += data.population
    }
    let obj = {
        name: 'World',
        population: totalPopulation
    }
    countriesCount.unshift(obj)
}
totalPop()

function rtnPercentage(value, total) {
    let part = value
    let whole = total
    let result = (part / whole) * 100
    return Math.round(result)
}

// event listeners for country button

pop.addEventListener('click', () => {
    visual.innerHTML = ''
    let topTen = countriesCount.slice(0, 11)
    let total = topTen[0].population
    for (let ele of topTen) {
        let newDiv = document.createElement('div')
        let newH2 = document.createElement('h2')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        newH2.textContent = ele.name
        newH2.className = 'name'
        let width = rtnPercentage(ele.population, total)
        console.log('width',  width)
        p1.style.width = `${width}%`
        p1.className = 'bar'
        p2.textContent = ele.population
        p2.className = 'count'
        newDiv.appendChild(newH2)
        newDiv.appendChild(p1)
        newDiv.appendChild(p2)
        visual.appendChild(newDiv)
    }
    countStatus.textContent = `${countriesCount.length - 1} Countries`
    btnStatus.textContent = '10 Most Populated Countries in the world'    
})

// functions for languages

function appendLanguages() {
    for (let country of countries_data) {
        for (let lang of country.languages) {
            languagesCountWithDuplicate.push(lang)
        }
    }
}
appendLanguages()

let setOfLanguages = new Set(languagesCountWithDuplicate)

for (const lang of setOfLanguages) {
    let result = languagesCountWithDuplicate.filter(ele => ele === lang)
    let obj = {
        language: lang,
        count: result.length
    }
    actualLanguageCount.push(obj)
    actualLanguageCount.sort((a, b) => {
        return b.count - a.count
    })
}

lang.addEventListener('click', () => {
    visual.innerHTML = ''
    let topTen = actualLanguageCount.slice(0, 10)
    let total = topTen[0].count
    for (let ele of topTen) {
        let newDiv = document.createElement('div')
        let newH2 = document.createElement('h2')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        newH2.textContent = ele.language
        newH2.className = 'name'
        let width = rtnPercentage(ele.count, total)
        p1.style.width = `${width}%`
        p1.className = 'bar'
        p2.textContent = ele.count
        p2.className = 'count'
        newDiv.appendChild(newH2)
        newDiv.appendChild(p1)
        newDiv.appendChild(p2)
        visual.appendChild(newDiv)
    }
    countStatus.textContent = `${setOfLanguages.size} Languages`
    btnStatus.textContent = '10 Most Spoken Languages in the world'
})
