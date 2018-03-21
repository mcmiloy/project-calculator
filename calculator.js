function add(num1,num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num2 === 0 ? 'OOPS!' : num1/num2;
}

function operate(operator,num1,num2) {
    if([add,subtract,multiply,divide].includes(operator)) {
        return operator(num1,num2);
    }
}

display = document.querySelector('.display');

btn0 = document.querySelector('#zero');
btn0.addEventListener('click', () => display.textContent += '0');

btn1 = document.querySelector('#one');
btn1.addEventListener('click', () => display.textContent += '1');

btn2 = document.querySelector('#two');
btn2.addEventListener('click', () => display.textContent += '2');

btn3 = document.querySelector('#three');
btn3.addEventListener('click', () => display.textContent += '3');

btn4 = document.querySelector('#four');
btn4.addEventListener('click', () => display.textContent += '4');

btn5 = document.querySelector('#five');
btn5.addEventListener('click', () => display.textContent += '5');

btn6 = document.querySelector('#six');
btn6.addEventListener('click', () => display.textContent += '6');

btn7 = document.querySelector('#seven');
btn7.addEventListener('click', () => display.textContent += '7');

btn8 = document.querySelector('#eight');
btn8.addEventListener('click', () => display.textContent += '8');

btn9 = document.querySelector('#nine');
btn9.addEventListener('click', () => display.textContent += '9');

btnadd = document.querySelector('#add');
btnadd.addEventListener('click', () => display.textContent += '+');

btnsubtract = document.querySelector('#subtract');
btnsubtract.addEventListener('click', () => display.textContent += '-');

btnmultiply = document.querySelector('#multiply');
btnmultiply.addEventListener('click', () => display.textContent += '*');

btndivide = document.querySelector('#divide');
btndivide.addEventListener('click', () => display.textContent += '/');

btnclear = document.querySelector('#clear');
btnclear.addEventListener('click', () => display.textContent = '');

btnresult = document.querySelector('#result')
btnresult.addEventListener('click', () => display.textContent = eval(display.textContent))


