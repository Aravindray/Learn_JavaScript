import { personDetails } from "./22_project_data.js";

// Center the elements

let body = document.body
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.width = '80%'
body.style.margin = '0 auto'

let main = document.querySelector('main')
main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'

// header

let challengeTitle = document.querySelector('#challengeTitle')
challengeTitle.textContent = `${personDetails.challengeTitle} in `

let challengeYear = document.createElement('span')
challengeYear.id = 'challengeYear'
challengeYear.textContent = `${personDetails.challengeYear}`
challengeTitle.appendChild(challengeYear)

// Colorful Year

let hue = () => {
    return Math.floor(Math.random() * 361)
}

setInterval(() => {
    challengeYear.style.color = `hsl(${hue()}, 100%, 50%)`
}, 1000);

// center Main article 1

let allArticles = document.getElementsByTagName('article')
allArticles[0].style.display = 'flex'
allArticles[0].style.flexDirection = 'column'
allArticles[0].style.justifyContent = 'center'
allArticles[0].style.alignItems = 'center'

// Challenge Subtitle

let challengeSubtitle = document.querySelector('#challengeSubtitle')
challengeSubtitle.textContent = personDetails.challengeSubtitle
challengeSubtitle.style.textDecoration = 'underline'

// Current Date Time

let currentDateTime = document.querySelector('#currentDateTime')

let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

setInterval(() => {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    currentDateTime.textContent = `${monthNames[month]} ${date}, ${year} ${hours}:${minutes}:${seconds}`
    currentDateTime.style.padding = '10px'
    currentDateTime.style.backgroundColor = `hsl(${hue()}, 100%, 50%)`
}, 1000);

// challengeList

let challengeList = document.querySelector('#challengeList')

// challengeList the container
challengeList.style.display = 'flex'
challengeList.style.flexDirection = 'column'
challengeList.style.justifyContent = 'center'
challengeList.style.alignItems = 'center'
challengeList.style.width = '100%'
challengeList.style.gap = '0.75rem'

let challenges = personDetails.challenges

for (const challenge of challenges) {
    let newDiv = document.createElement('div')
    let newName = document.createElement('h3')
    let newDetails = document.createElement('details')
    let newStatusDiv = document.createElement('div')
    let newAnchor = document.createElement('a')
    if (!(challenge.githubUrl === '')) {
        newAnchor.textContent = `${challenge.name}`
        newAnchor.setAttribute('href', `${challenge.githubUrl}`)
        newName.appendChild(newAnchor)
    } else {
        newAnchor.textContent = `${challenge.name}`
        newName.appendChild(newAnchor)
    }
    let summaryName = challenge.name.replace('30 Days Of ', '')
    let newSummary = document.createElement('summary')
    newSummary.textContent = summaryName
    newDetails.appendChild(newSummary)
    let challengeDetails = challenge.topics
    for (let detail of challengeDetails) {
        let newTopic = document.createElement('p')
        newTopic.textContent = detail
        newDetails.appendChild(newTopic)
    }
    newStatusDiv.textContent = challenge.status
    newDiv.appendChild(newName)
    newDiv.appendChild(newDetails)
    newDiv.appendChild(newStatusDiv)
    // newDiv style
    newDiv.style.display = 'flex'
    newDiv.style.flexDirection = 'row'
    newDiv.style.width = '100%'
    newDiv.style.justifyContent = 'space-between'
    newDiv.style.alignItems = 'center'
    newDiv.style.gap = '2rem'
    newDiv.style.padding = '0.5rem 2.5rem'
    newSummary.style.cursor = 'pointer'
    if (challenge.status === 'Done') {
        newDiv.style.backgroundColor = '#21bf73'
    } else if (challenge.status === 'Ongoing') {
        newDiv.style.backgroundColor = '#fddb3a'
    } else {
        newDiv.style.backgroundColor = '#fd5e53'
    }
    challengeList.appendChild(newDiv)
}

// Author Details

let authorDetails = document.querySelector('#authorDetails')

// center
authorDetails.style.display = 'flex'
authorDetails.style.flexDirection = 'column'
authorDetails.style.justifyContent = 'center'
authorDetails.style.alignItems = 'center'

// section 1
let newSection1 = document.createElement('section')
let authorName = document.createElement('h2')
authorName.textContent = `${personDetails.author.firstName} ${personDetails.author.lastName}`
authorName.style.fontSize = '2rem'
let newParaSec1 = document.createElement('p')

let newAnc1ParaSec1 = document.createElement('a')
let newImg1ParaSec1 = document.createElement('img')
newImg1ParaSec1.src = '../../assets/icons8-linkedin-48.png'
newAnc1ParaSec1.setAttribute('href', `${personDetails.author.socialLinks[0].url}`)
newAnc1ParaSec1.setAttribute('target','_blank')
newAnc1ParaSec1.appendChild(newImg1ParaSec1)

let newAnc2ParaSec1 = document.createElement('a')
let newImg2ParaSec1 = document.createElement('img')
newImg2ParaSec1.src = '../../assets/icons8-github-48.png'
newAnc2ParaSec1.setAttribute('href', `${personDetails.author.socialLinks[1].url}`)
newAnc2ParaSec1.setAttribute('target','_blank')
newAnc2ParaSec1.appendChild(newImg2ParaSec1)

newParaSec1.appendChild(newAnc1ParaSec1)
newParaSec1.appendChild(newAnc2ParaSec1)
newSection1.appendChild(authorName)
newSection1.appendChild(newParaSec1)
authorDetails.appendChild(newSection1)

// section 2

let newSection2 = document.createElement('section')
let newParaSec2 = document.createElement('p')
newParaSec2.textContent = personDetails.author.bio
newParaSec2.style.textAlign = 'center'
newSection2.appendChild(newParaSec2)
authorDetails.appendChild(newSection2)

// section 3
let newSection3 = document.createElement('section')
let newTitle = document.createElement('div')
let newSkills = document.createElement('div')
let newQualifications = document.createElement('div')
let newTitleH2 = document.createElement('h2')
let newSkillsH2 = document.createElement('h2')
let newQualificationsH2 = document.createElement('h2')

newTitleH2.textContent = 'Titles'
newTitle.appendChild(newTitleH2)

newSkillsH2.textContent = 'Skills'
newSkills.appendChild(newSkillsH2)

newQualificationsH2.textContent = 'Qualifications'
newQualifications.appendChild(newQualificationsH2)

let titles = personDetails.author.titles
let skills = personDetails.author.skills
let qualifications = personDetails.author.qualifications

for (let title of titles) {
    let newPara = document.createElement('p')
    newPara.textContent = `${title[0]} ${title[1]}`
    newTitle.appendChild(newPara)
}

for (let skill of skills) {
    let newPara = document.createElement('p')
    newPara.textContent = `✅ ${skill}`
    newSkills.appendChild(newPara)
}

for (let qualification of qualifications) {
    let newPara = document.createElement('p')
    newPara.textContent = `📖 ${qualification}`
    newQualifications.appendChild(newPara)
}

newSection3.appendChild(newTitle)
newSection3.appendChild(newSkills)
newSection3.appendChild(newQualifications)
newSection3.style.display = 'flex'
newSection3.style.width = '100%'
newSection3.style.justifyContent = 'space-between'
authorDetails.appendChild(newSection3)

// keywords

let keywords = document.querySelector('#keywords')

let keywordsTitle = document.createElement('h2')
keywordsTitle.textContent = 'Keywords'

let newKeywordsPara = document.createElement('p')

let listOfKeywords = personDetails.keywords

for (let keyword of listOfKeywords) {
    let newSpan = document.createElement('span')
    newSpan.textContent = `#${keyword}`
    newSpan.style.display = 'block'
    newSpan.style.border = '1px solid black'
    newSpan.style.margin = '0.5rem'
    newSpan.style.padding = '0.5rem'
    newSpan.style.borderRadius = '25px'
    newSpan.style.backgroundColor = `hsl(${hue()}, 100%, 50%)`
    newKeywordsPara.appendChild(newSpan)
}

// style
newKeywordsPara.style.display = 'flex'
newKeywordsPara.style.flexWrap = 'wrap'

keywords.appendChild(keywordsTitle)
keywords.appendChild(newKeywordsPara)
