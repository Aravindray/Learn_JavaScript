// Level 1

console.log('Level 1')

console.log('---Question 1---')

let income = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let incomeArray = income.match(/\d+/gi)
console.log(incomeArray)

let annualIncome = (Number(incomeArray[0]) * 12) + (Number(incomeArray[2]) * 12) + Number(incomeArray[1])
console.log(annualIncome)

console.log('---Question 2---')

let position = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'

let points = position.match(/\-*\d+/gi)
console.log('points',points)

for (let i = 0; i < points.length; i++) {
    points[i] = Number(points[i])
}
points.sort((a, b) => a - b)
console.log('Sorted Points', points)

let distance

console.log('---Question 3---')

function is_valid_variable(str) {
    let pattern = /^[a-zA-Z\$\_]+[^\D\W]*[a-zA-Z0-9\$\_]*$/g
    return pattern.test(str)
}
console.log(is_valid_variable('firstname'))

// Level 2

console.log('Level 2')

console.log('---Question 1---')

let paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'

function MostFrequentWords(str, counter) {
    let newStr = str.trim().replace(/\./g,'')
    let strOfArr = newStr.split(' ')
    let setOfStr = new Set(strOfArr)
    let resultObj = []
    for (const char of setOfStr) {
        let result = strOfArr.filter(ele => ele === char)
        let obj = {
            word: char,
            count: result.length
        }
        resultObj.push(obj)
    }
    resultObj.sort((a, b) => {
        return b.count - a.count
    })
    return resultObj.slice(0, counter)
}
console.log(MostFrequentWords(paragraph, 10))

// Level 3

console.log('Level 3')

console.log('---Question 1---')

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

let clearedSentence = sentence.replace(/[^\w\s]*/g, '')
console.log(clearedSentence)

console.log('---Question 2---')

console.log(MostFrequentWords(clearedSentence, 3))
