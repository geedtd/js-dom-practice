// const h1 = document.getElementById('title')
// h1.style.color = 'red'

// const btn = document.getElementById('btn')

// btn.style.backgroundColor = 'blue'  

// const result = document.querySelector('#result')

// const children = result.children

// console.log(children);

// const heading = document.querySelector('h2')

// const parent = heading.parentElement;

// parent.style.color = 'red'

// console.log(heading.parentElement);

const first = document.querySelector('.first')
const idValue = first.getAttribute('id')
console.log(idValue);

const link = document.getElementById('link')
const showLink = link.getAttribute('href')
console.log(showLink);

const last = link.nextElementSibling   
last.setAttribute('class', 'first')
last.textContent = 'I also have a class of first'
console.log(last);

const links = document.querySelectorAll('.first')
console.log(links);