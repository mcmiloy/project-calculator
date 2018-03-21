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
btnresult.addEventListener('click', () => display.textContent = simpleEval(display.textContent.split(/([\+\-\*\/])/g)))

function simpleEval(anArray) {
    console.log(anArray)
    
    if(anArray.length==1) return anArray[0]

    if(anArray.includes('*')){
        leftSide = anArray.slice(0,anArray.indexOf('\*')-1)
        rightSide = anArray.slice(anArray.indexOf('\*')+2)
        tempResult = (anArray[anArray.indexOf('\*')-1] * anArray[anArray.indexOf('\*')+1]).toString()

        newArray = leftSide.concat(tempResult).concat(rightSide)

        return simpleEval(newArray)
    
    }else if(anArray.includes('/')){
        leftSide = anArray.slice(0,anArray.indexOf('\/')-1)
        rightSide = anArray.slice(anArray.indexOf('\/')+2)
        tempResult = (anArray[anArray.indexOf('\/')-1] / anArray[anArray.indexOf('\/')+1]).toString()

        newArray = leftSide.concat(tempResult).concat(rightSide)

        return simpleEval(newArray)

    
    }else if(anArray.includes('+')){
        leftSide = anArray.slice(0,anArray.indexOf('\+')-1)
        rightSide = anArray.slice(anArray.indexOf('\+')+2)
        tempResult = (Number(anArray[anArray.indexOf('\+')-1]) + Number(anArray[anArray.indexOf('\+')+1])).toString()

        newArray = leftSide.concat(tempResult).concat(rightSide)

        return simpleEval(newArray)
    
    }else if(anArray.includes('-')){
        leftSide = anArray.slice(0,anArray.indexOf('\-')-1)
        rightSide = anArray.slice(anArray.indexOf('\-')+2)
        tempResult = (anArray[anArray.indexOf('\-')-1] - anArray[anArray.indexOf('\-')+1]).toString()

        newArray = leftSide.concat(tempResult).concat(rightSide)

        return simpleEval(newArray)
    }        
}


function myReduce(anArray,anOperator){
    leftSide = anArray.slice(0,anArray.indexOf('\\'+anOperator)-1)
    rightSide = anArray.slice(anArray.indexOf('\\'+anOperator)+2)
    tempResult = (Number(anArray[anArray.indexOf('\\'+anOperator)-1]) + Number(anArray[anArray.indexOf('\\'+anOperator)+1])).toString()

    newArray = leftSide.concat(tempResult).concat(rightSide)
}






















// console.log('leftside: ')
// console.log(leftSide)
// console.log('rightside: ')
// console.log(rightSide)
// console.log(tempResult)
// console.log('newarray: ')
// console.log(newArray)










// function myinsert(anArray,index, value) {
//     if(index==0){
//         anArray.unshift(value)
//         return anArray
//     } else {
//         return [anArray[0]].concat(myinsert(anArray,index-1,value))
//     }
// }
