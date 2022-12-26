let a = '' // first numbder.
let b = '' // second number. 
let sign = '' //Знак операции.
let finish = false

const digt = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']

// Экран
const out = document.querySelector('.calc-display p')

function clearAll() {
    a = '' // first numbder.
    b = '' // second number. 
    sign = '' //Знак операции.
    finish = false
    out.textContent = 0
}

document.querySelector('.ac-btn').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('.button')) return
}



// const clearBtn = document.querySelector('.ac-btn')
// const allBtn = document.querySelectorAll('.button')

// console.log(allBtn)

// clearBtn.addEventListener('click', clearAll)

