import { countries_data } from "./25_countries_data.js";

// fetch elements

let countStatus = document.querySelector('#countStatus')
let pop = document.querySelector('#pop')
let lang = document.querySelector('#lang')
let btnStatus = document.querySelector('#btnStatus')
let visual = document.querySelector('#visual')

let countriesCount = []
let languagesCount = []
let totalPopulation = 0

// functions

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

function appendLanguages() {
    for (let country of countries_data) {
        for (let lang of country.languages) {
            languagesCount.lang(lang)
        }
    }
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

function rtnPercentage(value, total) {
    let part = value
    // console.log('part', part)
    let whole = total
    // console.log('whole', whole)
    let result = (part / whole) * 100
    // console.log('result', Math.round(result))
    return Math.round(result)
}

// event listeners

pop.addEventListener('click', () => {
    visual.innerHTML = ''
    totalPop()
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
