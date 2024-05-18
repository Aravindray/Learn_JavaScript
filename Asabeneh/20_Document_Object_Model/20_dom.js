// Getting Element

// Getting Elements by tag name

/*
getElementsByTagName() takes tag name as a string parameter and this method return an HTMLCollection 
object. HTMLCollection is an array like object of HTML elements. Note: We can't able to use all the 
array methods like forEach

Syntax:

document.getElementsByTagName('tagName')
*/

let allH3 = document.getElementsByTagName('h3')
console.log(allH3)
console.log(allH3[1]) // now working as expected

for (let i = 0; i < allH3.length; i++) {
    console.log(allH3[i])
}

// Getting Elements by Class Name

/*
getElementsByClassName() this method return HTMLCollection Object. HTML Collection is an array like list of HTML elements.

Syntax:

document.getElementsByClassName('className')
*/

let selectAllH3ByClass = document.getElementsByClassName('title')
console.log(selectAllH3ByClass)
console.log(selectAllH3ByClass.length)

for (let i = 0; i < allH3.length; i++) {
    console.log(selectAllH3ByClass[i])
}

// Getting Element by Id

/*
Getting a single HTML Element.

Syntax:

document.getElementById('idName')
*/

let firstH3 = document.getElementById('first-title')
console.log(firstH3)

// Getting elements by using querySelector methods

/*
The document.querySelector() method select an HTML or HTML Elements by it tag, id or class name. There 
are two methods available which are:
1. querySelector()
2. querySelectorAll()
*/

// querySelector()

/*
It select only one element by it tag, id or class name. for example if we have four h3 element by querying by it's tag name it will select only first element.

Syntax:

document.querySelector('idName' | 'className' | 'tagName')
*/

let selectTagUsingQS = document.querySelector('h3')
let selectIdUsingQS = document.querySelector('#first-title')
let selectClassUsingQS = document.querySelector('.title')

console.log(selectTagUsingQS)
console.log(selectIdUsingQS)
console.log(selectClassUsingQS)

// querySelectorAll()

/*
This querySelectorAll() can be used select all the element by it tag name or class name. It return 
nodeList which is an array like object which support array methods. Note: We can use for loop or forEach 
to loop through each of these elements.
*/

let selectTagUsingQSA = document.querySelectorAll('h3') // select all available h3 elements in this page

console.log(selectTagUsingQSA)
console.log(selectTagUsingQSA.length)

for (let i = 0; i < selectTagUsingQSA.length; i++) {
    console.log(selectTagUsingQSA[i])
}

selectTagUsingQSA.forEach(title => console.log(title))

// Adding Attributes
