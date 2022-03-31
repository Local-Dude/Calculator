let display = document.querySelector("#total")
let clear = document.querySelector("#calc_clear")
let ChangeSign = document.querySelector("#calc_neg")
let share = document.querySelector("#calc_denom")
let sqrt = document.querySelector('#calc_sqrt')
let square = document.querySelector('#calc_square')
let decimal = document.querySelector('#calc_decimal')
let num = document.querySelectorAll('.calc_int')
let calc_back = document.querySelector('#calc_back')
let calc_op = document.querySelectorAll('.calc_op')
let exponent = document.querySelector('.exponent')
let calc_eval = document.querySelector('#calc_eval')
let calc_powerof = document.querySelector('#calc_powerof')
let calc_percent = document.querySelector('#calc_percent')
let calc_sin = document.querySelector('#calc_sin')
let calc_cos = document.querySelector('#calc_cos')
let calc_PI = document.querySelector('#calc_PI')
let calc_add = document.querySelector('#calc_add')
let results_list = document.querySelector('#results_list')
let calc_data = document.querySelector('#calc_data')
let calc_show = document.querySelector('#calc_show')

clear.addEventListener('click', ()=>{
    display.textContent = '0'
})

ChangeSign.addEventListener('click', () => {
    if(display.textContent < 0) {
        display.textContent = Math.abs(display.textContent)
    } else if(display.textContent > 0 ) {
        display.textContent = -display.textContent
    }
})

share.addEventListener('click', () => {
    display.textContent = 1/display.textContent
})

sqrt.addEventListener('click', () => {
    display.textContent = Math.sqrt(display.textContent)
})

square.addEventListener('click', () => {
    display.textContent = Math.pow(display.textContent, 2)
})

decimal.addEventListener('click', () => {
    console.log(1);
    display.textContent = display.textContent + '.'
})

calc_back.addEventListener('click', ()=> {
    if(display.textContent !== '0' && display.textContent.length !== 1 ) {
        display.textContent =  display.textContent.split('').slice(0, -1).join('')
    } else if(display.textContent.length === 1) {
        display.textContent = '0'
    }   
})

calc_op.forEach(item => {
    item.addEventListener('click', ()=>{
        display.textContent += item.textContent
    })
    
})

num.forEach(item => {
    item.addEventListener('click', ()=> {
        if(display.textContent === '0') {
            display.textContent = item.textContent
        } else {
           display.textContent += item.textContent 
        }
        
    })
})

calc_powerof.addEventListener('click', () => {
    display.textContent += ''
})

calc_eval.addEventListener('click', ()=>{
    if(eval(display.textContent)) {
        display.textContent = eval(display.textContent)
    }
    
})

calc_percent.addEventListener('click', ()=> {
    display.textContent = display.textContent/100
})

calc_sin.addEventListener('click', ()=> {
    display.textContent =Math.sin(display.textContent * Math.PI / 180.0).toFixed(2)
    
})

calc_cos.addEventListener('click', () => {
    display.textContent =Math.cos(display.textContent * Math.PI / 180.0).toFixed(2) 
})

calc_PI.addEventListener('click', ()=> {
    display.textContent =Math.PI.toFixed(2) 

})

calc_add.addEventListener('click', ()=> {
    let li = document.createElement('li')
    li.classList.add('result')
    li.append(display.textContent + ' ')
    results_list.prepend(li)
})

calc_data.addEventListener('click', ()=> {
    results_list.textContent = ''
})

calc_show.addEventListener('click', ()=> {
    
    display.textContent = results_list.textContent.split(' ')[0]
})
