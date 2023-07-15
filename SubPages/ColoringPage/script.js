let container = document.getElementById('container');
let contwidth = container.clientWidth;;
let color = document.getElementById('color');

let sliderValue = document.getElementById('sliderValue');

let myRange = document.getElementById('myRange');
console.log(myRange.value)
colorselected = true;
rainbowSelected = false;

function grid(width){
    container.innerHTML='';
for(i=0;i<width;i++){
    divCol = document.createElement('div');
    divCol.classList.add('smoldivMain')
    container.appendChild(divCol);
    let containers = document.querySelectorAll('.smoldivMain');
    for(j=0;j<width;j++){
        divCol2 = document.createElement('div');
        divCol2.classList.add('smoldiv');
        containers[i].appendChild(divCol2);
    }
}
let smoldivs = document.querySelectorAll('.smoldiv');

let smoldivwidth = contwidth/width;
smoldivwidth +="px";
        smoldivsMain = document.querySelectorAll('.smoldivMain');
        smoldivsMain.forEach(div=>{
            div.style.width = smoldivwidth;
        })
        smoldivs = document.querySelectorAll('.smoldiv');
        smoldivs.forEach(div=>{
            div.style.width = smoldivwidth;
            div.style.height = smoldivwidth;
        })

let eraser = document.getElementById('eraser');
    eraser.addEventListener('click',()=>{
    colorselected = false;
    rainbowSelected = false
})
color.addEventListener('click',()=>{
    colorselected = true;
    rainbowSelected = false;
})
let rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click',()=>{
    rainbowSelected = true
})
smoldivs.forEach(div=>{
    div.addEventListener('click',()=>{
        if(rainbowSelected==true){
            div.style.backgroundColor = randomColor();
        }
        else if(colorselected==true){
            div.style.backgroundColor = color.value
        }else if(colorselected==false){
            div.style.backgroundColor = "rgba(0, 0, 0, 0)"
            }
        })
    })
}

const buttons = document.querySelectorAll('.grid')


buttons.forEach(button=>{
    button.addEventListener('click' ,()=>grid(Number(button.innerText)))
})
myRange.addEventListener('change',()=>{
    grid(Number(myRange.value))
    sliderValue.innerHTML =myRange.value +" x "+myRange.value
})
window.addEventListener('keypress', event=>{
    if(event.key=="r"){
        container.innerHTML='';
    }
})

function randomColor(){
    number1 = Number((Math.random()*255).toFixed(0));
    number2 = Number((Math.random()*255).toFixed(0));
    number3 = Number((Math.random()*255).toFixed(0));
    return "rgb("+number1+","+number2+","+number3+")";
}
