import { returnCountries } from "./26_countries_data.js";

async function fetchCountries() {
    try {
        let countries = await returnCountries()
        return countries
    } catch(error) {
        console.log(error)
    }
}

let result

(async () => {
    result = await fetchCountries()
    let countriesCount = document.querySelector('#countriesCount')
    countriesCount.textContent = `${result.length}`
    displayResult(result)
})()

let listOfCountries = document.querySelector('#listOfCountries')

function displayResult(arr) {
    listOfCountries.innerHTML = ''
    for (let country of arr) {
        let newDiv = document.createElement('div')
        newDiv.textContent = country
        newDiv.className = 'card'
        listOfCountries.appendChild(newDiv)
    }
}

// main function

let matchFirst = document.querySelector('#matchFirst')
let searchQuery = document.querySelector('#searchQuery')
let matchAll = document.querySelector('#matchAll')

matchFirst.addEventListener('click', () => {
    matchFirst.style.backgroundColor = 'blueviolet'
    matchFirst.style.borderColor = 'blueviolet'
    matchAll.style.backgroundColor = 'lightskyblue'
    matchAll.style.borderColor = 'lightskyblue'
    matchFirstResult()
})

function matchFirstResult() {
    let searchCountries = document.querySelector('#searchCountries')
    searchCountries.addEventListener('input', e => {
        let value = e.target.value
        let queryOutput = result.filter(ele => ele.toLowerCase().startsWith(value.toLowerCase()))
        if (!(value === '')) {
            searchQuery.textContent = `Countries starts with "${value}" are ${queryOutput.length}`
        } else {
            searchQuery.textContent = ''
        }
        displayResult(queryOutput)
    })
}

let sorting = document.querySelector('#sorting')

let initialState = false

sorting.addEventListener('click', () => {
    matchFirst.style.backgroundColor = 'lightskyblue'
    matchFirst.style.borderColor = 'lightskyblue'
    matchAll.style.backgroundColor = 'lightskyblue'
    matchAll.style.borderColor = 'lightskyblue'
    if(!initialState) {
        sorting.style.backgroundColor = 'blueviolet'
        sorting.style.borderColor = 'blueviolet'
        initialState = true
        let zToa = [...result]
        zToa.sort()
        zToa.reverse()
        displayResult(zToa)
    } else {
        sorting.style.backgroundColor = 'lightskyblue'
        sorting.style.borderColor = 'lightskyblue'
        initialState = false
        let aToz = [...result]
        aToz.sort()
        displayResult(aToz)
    }
})

matchAll.addEventListener('click', () => {
    matchAll.style.backgroundColor = 'blueviolet'
    matchAll.style.borderColor = 'blueviolet'
    matchFirst.style.backgroundColor = 'lightskyblue'
    matchFirst.style.borderColor = 'lightskyblue'
    matchAllResult()
})

function matchAllResult() {
    let searchCountries = document.querySelector('#searchCountries')
    searchCountries.addEventListener('input', e => {
        let value = e.target.value
        let queryOutput = result.filter(ele => ele.toLowerCase().includes(value.toLowerCase()))
        if (!(value === '')) {
            searchQuery.textContent = `Countries contains "${value}" are ${queryOutput.length}`
        } else {
            searchQuery.textContent = ''
        }
        displayResult(queryOutput)
    })
}
