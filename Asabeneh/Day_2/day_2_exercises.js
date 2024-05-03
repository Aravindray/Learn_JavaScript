// Level 2
console.log()
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log()
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')
console.log()
console.log(typeof +'10')
console.log()
console.log(Math.ceil(parseFloat('9.8')))
console.log()
let py = 'Python'
let ja = 'Jargon'
console.log(py.includes('on'))
console.log(ja.includes('on'))
console.log()
let phrase = 'I hope this course is not full of jargon'
console.log(phrase.includes('jargon'))
console.log()
console.log('Let\'s generate a random numbers between 0 to 100 inclusively')
console.log(Math.floor(Math.random() * 101))
console.log('Let\'s generate a random numbers between 50 to 100 inclusively')
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50)
console.log('Let\'s generate a random numbers between 0 to 255 inclusively')
console.log(Math.floor(Math.random() * 256))
console.log()
let js = 'JavaScript'
let randomIndex = Math.floor(Math.random() * 10)
console.log('Random Generated Character in JavaScript is:',js.charAt(randomIndex))
console.log()
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
console.log()
let newPhrase = 'You cannot end a sentence with because because because is a conjunction'
console.log('newPhrase Slice',newPhrase.substr(31, 23))
console.log()
console.log('----End of Level 2----')
console.log()
// Level 3
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let loveCount = love.match(/Love/gi)
console.log(loveCount)
console.log('Count of love is',loveCount.length)
let becauseCount = newPhrase.match(/because/gi)
console.log(becauseCount)
console.log('Count of because is',becauseCount.length)
console.log()

// Not solved Questions

/*
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/
