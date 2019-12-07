const keys = document.getElementById('calculator-keys')
const screen = document.getElementById('screen')

var operState = true

function printScreen(number){
    let num = number.textContent
    let symbol = screen.textContent
    if (symbol == '0' || symbol == '+' || symbol == '*' || symbol == '/' || symbol == '-') {
        screen.textContent = num
    } else {
        screen.textContent += num
    } 
}

function clearScreen(){
    screen.textContent = 0
    operState = false
}

function initOper(element, number, operation){
    number1 = number
    typeOper = operation
    screen.textContent = element.textContent
    operState = true
    return {number1, typeOper}
}

function getOper(){
   let number2 = screen.textContent

   number1 = parseInt(number1)
   number2 = parseInt(number2)

   let result = 0
   switch (typeOper){
        case "addOper":
        result = number1 + number2
        break;

        case "minOper":
        result = number1 - number2
        break;

        case "divOper":
        result = number1 / number2
        break;

        case "multOper":
        result = number1 * number2
        break;
   }
   
   screen.textContent = result

   operState = false
}

const calculatorFunc = () => {
    keys.addEventListener('click', function(e){
        let element = e.target
        let oper = element.dataset.oper
        
        if(oper == 'number' || oper == 'pointer'){
            printScreen(element)
        }

        if (oper == 'draft') {
            clearScreen()
        }

        if (oper == 'oper') {
            let math = element.dataset.math
            initOper(element, screen.textContent, math)
        }

        if (oper == 'result') {
            if (operState == true) {
                getOper()   
            }
        }
    })
}

calculatorFunc()