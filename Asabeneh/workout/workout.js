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

let container = document.querySelector('.container')

// for (let {firstName, lastName, country, score, userId, createdDate} of users) {
//     let item = `<section class="userObject">
//     <div class="nameDate">
//         <h2 class="userName">${firstName} ${lastName}</h2>
//         <p class="accountCreatedDate">${createdDate}</p>
//     </div>
//     <p class="userCountry">${country}</p>
//     <p class="userScore">${score}</p>
//     <div class="btnHolder">
//         <button class="delUser" id='${userId}'><img src="../../assets/delete.png" alt="delete bin icon"></button>
//         <button class="incFive">+5</button>
//         <button class="decFive">-5</button>
//     </div>
//     </section>`
//     container.innerHTML = item
// }

function displayPlayers() {
    let htmlContent = users.map((user) => {
        return `<section class="userObject">
        <div class="nameDate">
        <h2 class="userName">${user.firstName} ${user.lastName}</h2>
        <p class="accountCreatedDate">${user.createdDate}</p>
        </div>
        <p class="userCountry">${user.country}</p>
        <p class="userScore">${user.score}</p>
        <div class="btnHolder">
        <button class="delUser" id='${user.userId}'><img src="../../assets/delete.png" alt="delete bin icon"></button>
        <button class="incFive">+5</button>
        <button class="decFive">-5</button>
        </div>
        </section>`
    }).join('')
    container.innerHTML = htmlContent
}
displayPlayers()
