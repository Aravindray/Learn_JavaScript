// select elements

let body = document.body
let userInput = document.querySelector('#userInput')
let selectPlanet = document.querySelector('#selectPlanet')
let button = document.querySelector('#btn')
let whenError = document.querySelector('#whenError')
let errorThrow = document.querySelector('#errorThrow')
let planetHolder = document.querySelector('#planetHolder')
let txtMessage = document.querySelector('#txtMessage')
let userSelected = document.querySelector('#userSelected')
let answer = document.querySelector('#answer')
let container = document.querySelector('#container')

// check the user input and return true or false

function userInputValidation() {
    let userValue = userInput.value
    console.log(userValue)
    userValue = parseInt(userValue)
    if (isNaN(userValue)) {
        return false
    } else {
        return true
    }
}

// change planet holder based on user select

function addingImage() {
    let selectedPlanet = selectPlanet.value
    if (selectedPlanet === 'selectOne') {
        return false
    } else {
        let img = document.createElement('img')
        img.setAttribute('src',`../../assets/${selectedPlanet}.png`)
        img.setAttribute('alt', `image of ${selectedPlanet}`)
        planetHolder.appendChild(img)
        return true
    }
}

// calculation

let mercuryGravity = 3.7 // m/s²
let venusGravity =  8.87 // m/s²
let earthGravity =  9.80665 // m/s²
let moonGravity =  1.622 // m/s²
let marsGravity = 3.711 // m/s²
let jupiterGravity = 24.79 // m/s²
let saturnGravity = 10.44 // m/s²
let uranusGravity = 8.69 // m/s²
let neptuneGravity = 11.15 // m/s²

function force() {
    txtMessage.textContent = 'The Weigh of the object on'
    userSelected.textContent = `${selectPlanet.value}`
    let result = userInput.value * `${selectPlanet.value}Gravity`
    return result
}

// display error
function displayError(msg) {
    errorThrow.textContent = msg
}

// final

button.addEventListener('click', () => {
    container.style.backgroundImage = ''
    if(userInputValidation()){
        if (addingImage()) {
            let result = force()
            answer.textContent = `${result} N`
        } else {
            displayError(`You did not choose any planet yet`)
        }
    } else {
        displayError('Entered mass is not valid')
    }
})
