let a = '' // first numbder.
let b = '' // second number. 
let sign = '' //Знак операции.
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
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
    //нажата не кнопка 
    if(!event.target.classList.contains('button')) return
    //нажата кнопка clearAll
    if(event.target.classList.contains('ac-btn')) return

    out.textContent = ""
    //получаю нажатую кнопку 
    const key = event.target.textContent

    // если нажата кнопка от 0 до 9 или .
    if (digit.includes(key)) {
        a+= key
        console.log(a, b , sign);
    }

}



// const clearBtn = document.querySelector('.ac-btn')
// const allBtn = document.querySelectorAll('.button')

// console.log(allBtn)

// clearBtn.addEventListener('click', clearAll)

