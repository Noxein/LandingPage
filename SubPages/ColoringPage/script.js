let container = document.getElementById('container');
let contwidth = container.clientWidth;;
let color = document.getElementById('color');


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

    smoldivs.forEach(div=>{
        div.addEventListener('click',()=>{

            div.style.backgroundColor = color.value
        })
    })

}

const buttons = document.querySelectorAll('.grid')


buttons.forEach(button=>{
    button.addEventListener('click' ,()=>grid(Number(button.innerText)))
})
window.addEventListener('keypress', event=>{
    if(event.key=="r"){
        container.innerHTML='';
    }
})


