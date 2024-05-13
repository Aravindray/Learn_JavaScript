// Regular Expression

/*
Regular Expression or RegExp is small programming language which help find patter in a data for different data types. To create a regular expression we can use RegExp constructor or we use declare by using two (//) backward slash with optional flag parameter which are g, i, m, u, s, or y.

RegEx Syntax:

It takes 2 parameters one is pattern and another one is flag

1. Using /pattern/flag
2. RegExp(pattern, flag)

some flag define

g: a global flag which look for entire data.
i: case insensitive
m: multiline
*/

// Creating a pattern with regular expression constructor

console.log('Creating a pattern with regular expression constructor')

// Without global flag

let pattern1 = 'love'

let regEx1 = new RegExp(pattern1)
console.log(regEx1)

// Declaring with flags gi

let flag1 = 'gi'

let regEx2 = new RegExp(pattern1, flag1)
console.log(regEx2)

// Writing the pattern and the flag inside the RegEx Constructor

let regEx3 = new RegExp('love', 'gi')
console.log(regEx3)

// Creating a pattern without RegExp constructor

// Creating a pattern with flag gi

let regEx4 = /love/gi // same as RegExp('love', 'gi')

// RegExp Object Methods

// test() Method

/*
It search the given pattern and return true or false. instead of match() or search() syntax it works like this syntax.

let data = 'some random data with different data types'
let pattern = /pattern/
let result = pattern.test(data)
*/

console.log('Using test() Method')

let str = 'I love JavaScript'
let pattern2 = /love/
let result1 = pattern2.test(str)
console.log(result1)

// match() Method

/*
This method return array with all the matches from the data. if no match found it return null. If we don't use global flat it return array of "pattern, index, input, group". This method is applied with data. 

syntax:

let data = 'Some string goes here'
let pattern = /go/g
let result = data.match(pattern)
*/

console.log('match() Method')

console.log('null case')
let str1 = 'I Love JavaScript'
let result2 = str1.match(pattern2)
console.log(result2)

console.log('Without g flag case')
let result3 = str.match(pattern2)
console.log(result3)

console.log('With g flat case')
let pattern3 = /love/g
let result4 = str.match(pattern3)
console.log(result4)

// search() method
/*
This method applied with data like match() syntax. similar to test() method instead of returning true or false it returns index number for first match only.
*/

let str2 = 'I love JavaScript, I love Python.'
let result5 = str2.search(pattern3)
console.log(result5)

// replace() Method

/*
Search for a pattern in a data and replace the substring with the given substring. This method work with data.
*/

console.log('.replace() Method')

let someText = 'Python is the most beautiful language that a human begin has ever created.\
I Recommend python for a first programming language'

let replaceResult = someText.replace(/Python|python/,'JavaScript') // It will replace first match only
console.log(replaceResult)

let replaceAllResult = someText.replace(/Python|python/g, 'JavaScript') // It will replace all instance
console.log(replaceAllResult)

//  same with gi flag

let replaceAllWithFlagResult = someText.replace(/Python/gi, 'JavaScript')
console.log('replaceAllWithFlagResult')

let someRandomText = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

console.log('\nBefore\n')
console.log(someRandomText)
let removePercentage = someRandomText.replace(/%/g,'')
console.log('\nAfter\n')
console.log(removePercentage)

// More about Pattern

/*
1. a set of characters - []
    [a-c] means, a or b or c
    [a-z] means, any letter a to z
    [A-Z] means, any letter between A to Z in Uppercase
    [0-3] means, 0 or 1 or 2 or 3
    [0-9] means, any numbers 0 to 9
    [a-zA-Z0-9] means, any letter with lower a to z, upper A to Z or any digits 0 to 9

2. \ is used to escape special character
    \d means, match where string contain digits (0-9)
    \D means, match where string does not contain digits
    \b means, word bounder matches with beginning or ending of the word
    \s means, whitespace
    \S means, not whitespace
    \w means, word character
    \W means, not word character

3. . period is used to any character except new line \n

4. ^ Starts With
    /^love/ means sentence starts with word love, but
    [^abc] means not starts with a or b or c

5. $ Ends With
    /love$/ means sentence ends with word love

6. * zero or more times */
// /a*/ means, zero or more times
/*
7. + one or more times
    /a+/ one or more times, at least one

8. ? zero or one time
    /a?/ means, zero times or once or optional character

9. {} Quantifiers
    {3} means, Exactly 3 characters
    {3, } means, at least 3 characters
    {3, 8} means, 3 to 8 characters

10. | Either or
    /apple|orange/ means, select either apple or orange

11. () Captures and group
    (?:) means, not capture the group
    (?=) means, positive lookahead with <, > we check before and after characters
    (?!) means, negative lookahead
*/

// Square brackets []

console.log('Square bracket [] example')

let pattern4 = /[Aa]pple/
let sillyProverb = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.'
let matches1 = sillyProverb.match(pattern4)
console.log(matches1)

let pattern5 = /[Aa]pple/g
let matches2 = sillyProverb.match(pattern5)
console.log(matches2)

let pattern6 = /[Aa]pple|[Bb]anana/g
let matches3 = sillyProverb.match(pattern6)
console.log(matches3)

// Escape Character

console.log('Escape Character')

let pattern7 = /\d/g
const example1 = 'This regular expression example was made in January 12, 2020'
let matches4 = example1.match(pattern7)
console.log(matches4)

let pattern8 = /\d+/g
let matches5 = example1.match(pattern8)
console.log(matches5)

// Period .

console.log('. Period Example')

let pattern9 = /[a]./g
let text1 = 'Apple and Orange are fruits.\nGrapes and mango are also fruits.'
let matches6 = text1.match(pattern9)
console.log(matches6)

let pattern10 = /[a].+/g
let matches7 = text1.match(pattern10)
console.log(matches7)

// * Zero or more times

console.log('* Zero or More times')

let pattern11 = /[a].*/g
let matches8 = text1.match(pattern11)
console.log(matches8)

// ? Zero or one time / or optional

console.log('? Zero or one time / or optional')

let emailConfusion = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
let pattern12 = /[Ee]-?mail/g
let matches9 = emailConfusion.match(pattern12)
console.log(matches9)

// Quantifier in RegExp

console.log('Quantifier in RegExp')

let pattern13 = /\b\w{4}\b/g // exactly four words
let matches10 = example1.match(pattern13)
console.log(matches10)

let pattern14 = /\b[a-zA-Z]{4}\b/g // exactly four words without numbers
let matches11 = example1.match(pattern14)
console.log(matches11)

let pattern15 = /\d{4}/g // exactly four digits only
let matches12 = example1.match(pattern15)
console.log(matches12)

let pattern16 = /\d{1,4}/g // 1 to 4 digits
let matches13 = example1.match(pattern16)
console.log(matches13) 
