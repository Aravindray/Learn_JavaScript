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
let psTrowEor = document.querySelector('.ps-trowEor')
let telTrowEor = document.querySelector('.tel-trowEor')

let namePattern = /^[A-Z]{1}[a-z0-9]{2,15}$/g

firstName.addEventListener('input', (e) => {
    let value = e.target.value
    let result = namePattern.test(value)
    if (result) {
        fnTrowEor.style.display = 'none'
        firstName.style.border = '3px solid lime'
        console.log(result);
    } else {
        fnTrowEor.style.display = 'block'
        firstName.style.border = '3px solid orange'
        console.log(result);
    }
})

lastName.addEventListener('input', (e)=> {
    let value = e.target.value
    let result = namePattern.test(value)
    if (result) {
        lnTrowEor.style.display = 'none'
        lastName.style.border = '3px solid lime'
    } else {
        lnTrowEor.style.display = 'block'
        lastName.style.border = '3px solid orange'
    }
    console.log(result)
})

let emailPattern = /^[a-z0-9\.\-\_]+(\.[a-z0-9\.\-\_]*)*\@[a-z0-9]+(\.[a-z]{2,4})+$/g

email.addEventListener('input', (e) => {
    let value = e.target.value
    let result = emailPattern.test(value)
    if (result) {
        emTrowEor.style.display = 'none'
        email.style.border = '3px solid lime'
    } else {
        emTrowEor.style.display = 'block'
        email.style.border = '3px solid orange'
    }
    console.log(result)
})

let passwordPattern = /^[a-zA-Z0-9\@\_\-]{6,20}$/g

password.addEventListener('input', (e) => {
    let value = e.target.value
    let result = passwordPattern.test(value)
    if (result) {
        psTrowEor.style.display = 'none'
        password.style.border = '3px solid lime'
    } else {
        psTrowEor.style.display = 'block'
        password.style.border = '3px solid orange'
    }
    console.log(result)
})

let telPattern = /^\d{3}\-\d{3}\-\d{4}$/gi

tel.addEventListener('input', (e) => {
    let value = e.target.value
    let result = telPattern.test(value)
    if (result) {
        telTrowEor.style.display = 'none'
        tel.style.border = '3px solid lime'
    } else {
        telTrowEor.style.display = 'block'
        tel.style.border = '3px solid orange'
    }
    console.log(result)
})
