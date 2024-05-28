// Level 1

console.log('Level 1')

console.log('---Question 1---') // fetching keep on failing

const countryAPI = 'https://restcountries.com/v2/all'

async function countriesDetails() {
    try {
        let response = await fetch(countryAPI)
        let result = await response.json()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

// Level 2

console.log('Level 2')

console.log('---Question 1---')

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

let catNames = async () => {
    try {
        let response = await fetch(catsAPI)
        let result = await response.json()
        for (const element of result) {
            console.log(element.name)
        }
    } catch(error) {
        console.log(error)
    }
}
catNames()

// Level 3

console.log('Level 3')

console.log('---Question 1---')

async function findWeight() {
    try {
        let response = await fetch(catsAPI)
        let result = await response.json()
        for (let element of result) {
            console.log(`Name: ${element.name}\nWeight: ${element.weight.metric}`)
        }
    } catch(error) {
        console.log(error)
    }
}
findWeight()
