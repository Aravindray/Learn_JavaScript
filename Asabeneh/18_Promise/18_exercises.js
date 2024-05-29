// Level 1 - Question 1, Level 3 - Question 2, 3 - check 18_countryAPI.js file fetch keeps on failing

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
