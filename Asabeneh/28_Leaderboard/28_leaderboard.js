const users = [
    {
        firstName: 'Rich',
        lastName: 'Bell',
        country: 'USA',
        score: 80,
        userId: 1,
        createdDate: 'Jan 13, 2024 23:12',
    },
    {
        firstName: 'Aravind',
        lastName: 'Ray',
        country: 'Fiji',
        score: 70,
        userId: 2,
        createdDate: 'May 16, 2024 12:12',
    },
    {
        firstName: 'Daniel',
        lastName: 'Raj',
        country: 'Fiji',
        score: 99,
        userId: 3,
        createdDate: 'Jun 12, 2023 21:18',
    },
]

let showError = document.querySelector('#showError')
let userResponse = document.getElementById('userResponse')

function displayError(err) {
    showError.textContent = err
    showError.style.color = 'red'
}

function clearError() {
    showError.textContent = ''
}

function validateScore(num) {
    let result = parseInt(num)
    if (isNaN(result)) {
        displayError('Player Score Must be Number')
        return false
    } else if (result <= 100){
        clearError()
        return result
    } else {
        displayError('Player Score Must be less than equal to 100')
        return false
    }
}

function returnDate() {
    let now = new Date()
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = months[now.getMonth()]
    let date = now.getDate()
    let year = now.getFullYear()
    let hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
    let min = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
    return `${month} ${date}, ${year} ${hour}:${min}`
}

function outerFun() {
    let initial = users.length
    function innerFun() {
        initial++
        return initial
    }
    return innerFun
}

const dashboard = document.querySelector('#dashboard')

userResponse.addEventListener('submit', (e) => {
    e.preventDefault()
    let firstName = document.getElementsByName('firstName')[0].value.trim()
    let lastName = document.getElementsByName('lastName')[0].value.trim()
    let country = document.getElementsByName('country')[0].value.trim()
    let score = document.getElementsByName('score')[0].value.trim()
    if (firstName !== '' && lastName !== '' && country !== '' && score !== '') {
        let scoreInt = validateScore(score)
        if(scoreInt) {
            let accCreDateTime = returnDate()
            let user_id = outerFun()
            let obj = {
                firstName,
                lastName,
                country,
                score: scoreInt,
                userId: user_id,
                createdDate: accCreDateTime
            }
            users.push(obj)
            dashboard.innerHTML = ''
            displayUsers()
        }
    }
})

function displayUsers() {
    for (let {firstName, lastName, country, score, userId, createdDate} of users) {
        const user = document.createElement('div')
        user.id = 'user'
        const nameHolder = document.createElement('div')
        nameHolder.id = 'nameHolder'
        const userName = document.createElement('h2')
        userName.className = 'nowrap'
        userName.id = 'userName'
        const userCreatedDate = document.createElement('p')
        userCreatedDate.id = 'createdDate'
        userCreatedDate.className = 'nowrap'
        const userCountry = document.createElement('div')
        userCountry.id = 'userCountry'
        const userScore = document.createElement('div')
        userScore.id = 'userScore'
        const delUserId = document.createElement('button')
        delUserId.className = 'del'
        const btns = document.createElement('div')
        btns.className = 'btns'
        // delUserId.id = 'delUserId'
        const image = document.createElement('img')
        let usl = '../../assets/delete.png'
        image.setAttribute('src', usl)
        image.setAttribute('alt','delete bin icon')
        const incScore = document.createElement('button')
        incScore.id = 'incScore'
        const decScore = document.createElement('button')
        decScore.id = 'decScore'
        
        userName.textContent = `${firstName} ${lastName}`
        userCreatedDate.textContent = createdDate
        userCountry.textContent = country
        userScore.textContent = score
        delUserId.id = userId

        if (score <= 95) {
            incScore.textContent = '+5'
        }

        if (score >= 5) {
            decScore.textContent = '-5'
        }

        // append 2nd layer inner element
        delUserId.appendChild(image)
        nameHolder.appendChild(userName)
        nameHolder.appendChild(userCreatedDate)
        btns.appendChild(delUserId)
        btns.appendChild(incScore)
        btns.appendChild(decScore)

        // append elements to user

        user.appendChild(nameHolder)
        user.appendChild(userCountry)
        user.appendChild(userScore)
        user.appendChild(btns)
        dashboard.appendChild(user)
    }
}
displayUsers()
