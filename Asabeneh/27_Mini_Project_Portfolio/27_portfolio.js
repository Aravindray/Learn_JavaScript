import { personDetails as person } from './27_portfolio_person_details.js'

// Header

let fullName = document.querySelector('#fullName')
fullName.textContent = `${person.firstName} ${person.lastName}`

let bio = document.querySelector('#bio')
bio.innerHTML = person.bio
