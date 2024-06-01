// select elements

let body = document.body
let userInput = document.querySelector('#userInput')
let selectPlanet = document.querySelector('#selectPlanet')
let button = document.querySelector('#btn')
let whenError = document.querySelector('#whenError')
let errorThrow = document.querySelector('#errorThrow')
let planetHolder = document.querySelector('#planetHolder')
let txtMessage = document.querySelector('#txtMessage')
let userSelected = document.createElement('span')
let answer = document.querySelector('#answer')
let container = document.querySelector('#container')

// check the user input and return true or false

function userInputValidation() {
    clearDisplayError()
    container.style.backgroundImage = 'url()'
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
    clearDisplayError()
    planetHolder.innerHTML = ''
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

// calculation - all gravity unit is m/s²

let mercuryGravity = 3.7
let venusGravity =  8.87
let earthGravity =  9.80665
let moonGravity =  1.622
let marsGravity = 3.711
let jupiterGravity = 24.79
let saturnGravity = 10.44
let uranusGravity = 8.69
let neptuneGravity = 11.15

function force() {
    txtMessage.textContent = 'The Weigh of the object on '
    txtMessage.style.fontSize = '2rem'
    txtMessage.appendChild(userSelected)
    userSelected.textContent = `${(selectPlanet.value)}`.toUpperCase()
    userSelected.style.fontWeight = 'bold'
    let mass = userInput.value
    let selectedPlanet = selectPlanet.value
    let result
    if (selectedPlanet === 'mercury') {
        result = mass * mercuryGravity
    } else if (selectedPlanet === 'venus') {
        result = mass * venusGravity
    } else if (selectedPlanet === 'earth') {
        result = mass * earthGravity
    } else if (selectedPlanet === 'moon') {
        result = mass * moonGravity
    } else if (selectedPlanet === 'mars') {
        result = mass * marsGravity
    } else if (selectedPlanet === 'jupiter') {
        result = mass * jupiterGravity
    } else if (selectedPlanet === 'saturn') {
        result = mass * saturnGravity
    } else if (selectedPlanet === 'uranus') {
        result = mass * uranusGravity
    } else {
        result = mass * neptuneGravity
    }
    return result.toFixed(3)
}

// display error
function displayError(msg) {
    errorThrow.textContent = msg
}

function clearDisplayError() {
    errorThrow.textContent = ''
}

// final

button.addEventListener('click', () => {
    if(userInputValidation()){
        if (addingImage()) {
            whenError.style.width = '0'
            let result = force()
            answer.textContent = `${result} N`
            answer.style.fontSize = '3rem'
        } else {
            whenError.style.width = '100%'
            displayError(`You did not choose any planet yet`)
        }
    } else {
        whenError.style.width = '100%'
        displayError('Entered mass is not valid')
    }
})
