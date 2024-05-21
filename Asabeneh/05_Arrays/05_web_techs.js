export const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

console.log('Level 2')

console.log('---Question 5---')

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
}
else {
    webTechs.push('Sass')
    console.log('Sass added into the list')
    console.log(webTechs)
}
