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

console.log('Adding Attributes')

/*
An attributes added in the opening tag of HTML element, a common attributes we add are id, class, src, style, href, disables, title, alt.
*/

// Adding attributes using setAttribute

console.log('Adding attributes using setAttribute')

/*
setAttribute() method sets any HTML attribute. It takes 2 parameters type of attribute and value of 
attributes.
*/

let title = document.querySelectorAll('h3')
title[3].setAttribute('class', 'title')
title[3].setAttribute('id','fourth-title')

// Adding attributes without setAttribute

console.log('Adding attributes without setAttribute')

/*
This method can "not" work for all element. some attribute are DOM object property and they can be set 
directly.

Syntax:

document.querySelectorAll('tagName')
index the element
selectedElement.className = 'new-class-name'
selectedElement.id = 'id-name'
*/

let titleWithOut = document.querySelectorAll('h3')
titleWithOut[3].className = 'title'
titleWithOut[3].id = 'fourth-title'

// Adding class using classList

console.log('Adding class using classList')

/*
This is the good method to add class, because it did not overwrite the old class, except it add / append new 
class in the selected element(s).

Syntax:

selectedElement.classList.add('newClassName-1', 'newClassName-2')
*/

let usingClassList = document.querySelectorAll('h3')
usingClassList[3].classList.add('title')
usingClassList[3].classList.add('header-title')

// Removing class using remove

/*
Similar to adding we can also remove class from an element. we can remove specific class from an element.

Syntax:

selectedElement.classList.remove('removeClassName')
*/

let removeUsingClassList = document.querySelectorAll('h3')
removeUsingClassList[3].classList.remove('title')
