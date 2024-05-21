import {countries} from './05_countries.js'
import {webTechs} from './05_web_techs.js'

// Get and display Countries
let country = countries.slice(0,-1).join(', ')
let lastCountry = countries[countries.length - 1]
let displayCountries = document.querySelector('.countries')
displayCountries.textContent = country + ' and ' + lastCountry
let displayCountriesCount = document.querySelector('.countries-count')
displayCountriesCount.textContent = countries.length

// Get and display web techs
let webTech = webTechs.slice(0,-1).join(', ')
let lastWebTech = webTechs[webTechs.length - 1]
let displayWebTech = document.querySelector('.web-techs')
displayWebTech.textContent = webTech + ' and ' + lastWebTech
