const keys = document.getElementById('calculator-keys')
const screen = document.getElementById('screen')

function printScreen(number){
    let num = number.textContent
    if (screen.textContent == '0') {
        screen.textContent = num
    } else {
        screen.textContent += num
    } 
}

function clearScreen(){
    screen.textContent = 0
}

function addOper(element, number){
    number1 = number
    typeOper = 'addOper'
    screen.textContent = element.textContent
    return {number1, typeOper}
}

const calculatorFunc = () => {
    keys.addEventListener('click', function(e){
        let element = e.target
        let oper = element.getAttribute('data-oper')

        if(oper == 'number'){
            printScreen(element)
        }

        if (oper == 'draft') {
            clearScreen()
        }

        if (oper == 'sum') {
            addOper(element, screen.textContent)
        }
    })
}

calculatorFunc()