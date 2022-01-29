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

// const first = document.querySelector('.first')
// const idValue = first.getAttribute('id')
// console.log(idValue);

// const link = document.getElementById('link')
// const showLink = link.getAttribute('href')
// console.log(showLink);

// const last = link.nextElementSibling   
// last.setAttribute('class', 'first')
// last.textContent = 'I also have a class of first'
// console.log(last);

// const links = document.querySelectorAll('.first')
// console.log(links);

const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')   

const classValue = first.className
console.log(classValue); 

second.className = 'colors text'

third.classList.add('colors')

let minReturn = (a, b) =>  {
    return Math.min(a,b)
}

console.log(minReturn(7,4));

let evenOdd = (num) => {
    if (num === 1) {
        return 'Odd'
    } else if (num === 0) {
        return 'Even'
    } else if ( num < 0 ){
        return evenOdd(Math.abs(num))
    } else {
        return evenOdd(num -2)
    }
}

console.log(evenOdd(-2))

let countBs = (str) => {
    let B = 0
    for ( i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            B++
        }
    }
    return `There are ${B} B characters in this string`
}

console.log(countBs('BBB'));

let countChar = (str, letter) => {
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++
        }
        // console.log(str[i]);
        
    }
    return `There are ${count} ${letter} characters in this string`
}

console.log(countChar('how many letter y can be found in this', 'y'));