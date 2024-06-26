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

// display users

const container = document.querySelector('#container')

function displayUsers() {
    container.innerHTML = ''
    let htmlContent = users.map((user) => {
        return `<section class="userObject">
            <div class="nameDate">
                <h2 class="userName">${user.firstName} ${user.lastName}</h2>
                <p class="accountCreatedDate">${user.createdDate}</p>
            </div>
            <p class="userCountry">${user.country}</p>
            <p class="userScore">${user.score}</p>
            <div class="btnHolder">
                <button onClick="delUser(this)" id="${user.userId}"><img src="../../assets/delete.png" alt="delete bin icon"></button>
                <button class="incFive" onClick="incScore(this)" id="${user.userId}">+5</button>
                <button class="decFive" onClick="decScore(this)" id="${user.userId}">-5</button>
            </div>
        </section>`
    }).join('')
    container.innerHTML = htmlContent
}
displayUsers()

// add new user

const showError = document.querySelector('#showError')

function displayError(msg) {
    showError.textContent = msg
    showError.style.color = 'red'
    showError.style.fontSize = '1.3rem'
    showError.style.textAlign = 'center'
}

function removeError() {
    showError.textContent = ''
}

function checkScore(val) {
    let result = parseInt(val)
    if (isNaN(result)) {
        displayError('Player Score must be number')
        return false
    } else if (result <= 100) {
        removeError()
        return result
    } else {
        displayError('Player Score must be less than or equal to 100')
        return false
    }
}

function currentDateTime() {
    let now = new Date()
    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = monthName[now.getMonth()]
    let date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()
    let year = now.getFullYear()
    let hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
    let min = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()

    return `${month} ${date}, ${year} ${hours}:${min}`
}

function newUserId() {
    if (users.length === 0) {
        return 1
    }
    let exitingId = []
    for (let {userId} of users) {
        exitingId.push(userId)
    }
    return exitingId[exitingId.length - 1] + 1
}

const newPlayer = document.querySelector('#newPlayer')

newPlayer.addEventListener('submit', (e) => {
    e.preventDefault()
    const newFirstName = document.getElementsByName('newFirstName')[0].value.trim()
    const newLastName = document.getElementsByName('newLastName')[0].value.trim()
    const newCountry = document.getElementsByName('newCountry')[0].value.trim()
    const newScore = document.getElementsByName('newScore')[0].value.trim()
    if (newFirstName !== '' && newLastName !== '' && newCountry !== '' && newScore !== '') {
        let scoreInt = checkScore(newScore)
        if(scoreInt) {
            let newId = newUserId()
            let obj = {
                firstName: newFirstName,
                lastName: newLastName,
                country: newCountry,
                score: scoreInt,
                userId: newId,
                createdDate: currentDateTime(),                
            }
            users.push(obj)
            displayUsers()
        }
    }
    newPlayer.reset()
})

function delUser(e) {
    let user_id = e.id
    let index = 0
    for (let user of users) {
        if (user_id == user.userId) {
            break
        } else {
            index++
        }
    }
    users.splice(index, 1)
    displayUsers()
}

function incScore(e) {
    let user_id = e.id
    for(let user of users) {
        if(user_id == user.userId) {
            user.score = user.score + 5
            if (user.score > 100) {
                user.score = 100
                displayError('Score Can not over 100')
            }
            break
        }
    }
    setTimeout(() => {
        removeError()
    }, 2500);
    displayUsers()
}

function decScore(e) {
    let user_id = e.id
    for(let user of users) {
        if(user_id == user.userId) {
            user.score = user.score - 5
            if (user.score < 1) {
                user.score = 0
                displayError('Score Can not be NEGATIVE')
            }
            break
        }
    }
    setTimeout(() => {
        removeError()
    }, 2500);
    displayUsers()
}
