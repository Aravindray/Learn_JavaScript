// get element

let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let tel = document.querySelector('#tele')
let bio = document.querySelector('#your-bio')
let fnTrowEor = document.querySelector('.fn-trowEor')
let lnTrowEor = document.querySelector('.ln-trowEor')
let emTrowEor = document.querySelector('.em-trowEor')

let namePattern = /\w{3,16}/g

firstName.addEventListener('input', (e)=> {
    let value = e.target.value
    let result = namePattern.test(value)
    if (result) {
        fnTrowEor.style.display = 'none'
        firstName.style.border = '3px solid lime'
    }
})

lastName.addEventListener('input', (e)=> {
    let value = e.target.value
    let result = namePattern.test(value)
    if (result) {
        lnTrowEor.style.display = 'none'
        lastName.style.border = '3px solid lime'
    }
})

let emailPattern = /^[a-z0-9._-%]+\@[a-z0-9.-_]+\.[a-z]{2,4}$/gi

email.addEventListener('input', (e) => {
    let value = e.target.value
    let result = emailPattern.test(value)
    if (result) {
        emTrowEor.style.display = 'none'
        email.style.border = '3px solid lime'
    } else {
        email.style.border = '3px solid orange'
    }
})
