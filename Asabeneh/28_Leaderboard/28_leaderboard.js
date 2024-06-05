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

userResponse.addEventListener('submit', (e) => {
    e.preventDefault()
    let firstName = document.getElementsByName('firstName')
    let lastName = document.getElementsByName('lastName')
    let country = document.getElementsByName('country')
    let score = document.getElementsByName('score')
    if (firstName[0].value !== '' && lastName[0].value !== '' && country[0].value !== '' && score[0].value !== '') {
        console.log(firstName[0].value)
        console.log(lastName[0].value)
        console.log(country[0].value)
        console.log(score[0].value)
    } else {
        showError.textContent = 'All Field are required'
        showError.style.color = 'red'
    }
})
