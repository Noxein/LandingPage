//SELECTORS FOR HTML
let firstnumber = document.querySelector('.firstnubmer');
let operatoroutput = document.querySelector('.operatoroutput');
let secondnumber = document.querySelector('.secondnumber');
let output = document.querySelector('.output');

let numbers = document.querySelectorAll('.nubmer');
let operators = document.querySelectorAll('.operator');
let dot = document.querySelector('.dot');
let MC = document.querySelector('.MC');
let equals = document.querySelector('.equals');

MC.addEventListener('click', ()=>{
    firstnumber.innerText = '';
    secondnumber.innerText = '';
    operatoroutput.innerText = '';
    output.innerText = '';
    calcdata.operatorNUM = undefined;
    calcdata.outputNUM = undefined;
})

const calcdata ={
    firstNUM: 0,
    operatorNUM: undefined,
    secondNUM: 0,
    outputNUM: 0,
}

function firstNUMBER(){
    dot.addEventListener('click',function one(){
        if((firstnumber.innerText.includes('.')==false)&&(secondnumber.innerText==''))
        firstnumber.innerText += '.'
    })
    numbers.forEach(number =>{
        number.addEventListener('click',()=>{
            if(operatoroutput.innerText==''){
            firstnumber.innerText += number.innerText
            calcdata.firstNUM = Number(firstnumber.innerText);
            }
        })
    })
    if(firstnumber.innerText==""){
        operatorsCLICK();
    }
}

function secondNUMBER(){
    dot.addEventListener('click',function one2(){
        if((secondnumber.innerText.includes('.')==false)&&(secondnumber.innerText!='')){
        secondnumber.innerText += '.'
    }})
    numbers.forEach(number =>{
        number.addEventListener('click', ()=>{
            if(operatoroutput.innerText!=''){
            secondnumber.innerText += number.innerText
            calcdata.secondNUM = Number(secondnumber.innerText);
            }
            
        })
    })
}

function operatorsCLICK(){
    operators.forEach(operator =>{
        operator.addEventListener('click', ()=>{
            operatorfn(operator);
            operatoroutput.innerText = operator.innerText
        })
    })
    secondNUMBER();

}

window.firstNUMBER();


 function operatorfn(operator){
     if(operator.innerText=="+"){
         calcdata.operatorNUM = 'add';
     }else if(operator.innerText=="-"){
         calcdata.operatorNUM = 'suntract';
     }
     else if(operator.innerText=="X"){
         calcdata.operatorNUM = 'multiply';
     }
     else if(operator.innerText=="/"){
        calcdata.operatorNUM = 'divide';
     }
 }

 equals.addEventListener('click',()=> functions(calcdata.firstNUM,calcdata.secondNUM,calcdata.operatorNUM));

 //EQUALS OPERATION
function functions(a,b,oper){
    
    if(oper=='add'){output.innerText =(a+b);calcdata.outputNUM = calcdata.firstNUM+calcdata.secondNUM;}
    else if(oper=='suntract'){output.innerText =(a-b); calcdata.outputNUM = calcdata.firstNUM-calcdata.secondNUM;} 
    else if(oper=='multiply'){output.innerText =(a*b); calcdata.outputNUM = calcdata.firstNUM*calcdata.secondNUM;}
    else if(oper=='divide'){output.innerText =(a/b); calcdata.outputNUM = calcdata.firstNUM/calcdata.secondNUM;}
    calcdata.firstNUM = calcdata.outputNUM;
    firstnumber.innerText = calcdata.firstNUM;
    calcdata.secondNUM = 0;
    secondnumber.innerText ='';
    calcdata.operatorNUM = undefined;
    operatoroutput.innerText = '';
    output.innerText='';
}