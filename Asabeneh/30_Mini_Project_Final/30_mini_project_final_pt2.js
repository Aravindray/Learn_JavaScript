// get element

let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let tel = document.querySelector('#tele')
let bio = document.querySelector('#your-bio')
let fnTrowEor = document.querySelector('.fn-trowEor')

let namePattern = /^[A-Z]{1}[\w]{2,16}/g

firstName.addEventListener('input', (e)=> {
    let value = e.target.value
    console.log(value)
    let result = namePattern.test(value)
    console.log(result)
    if (result) {
        fnTrowEor.style.display = 'none'
        firstName.style.borderColor = 'green'
    }
})
