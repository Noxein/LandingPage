

window.addEventListener('keyup',()=>{
    let firstpass = document.querySelector('.pass').value;
    let secondpass = document.querySelector('.pass2').value;
    let validate = true;

    if(firstpass.length<6){
        document.querySelector('.short-password').innerText = "Password too must have at least 6 characters"
        validate = false;
    }
    if(firstpass.length>=6){
        document.querySelector('.short-password').style = "color: green;"
    }
    if(firstpass!==secondpass){
        document.querySelector('.same-passwords').innerText = "Passwords must be identical";
        validate = false;
    }
    if(firstpass==secondpass){
        document.querySelector('.same-passwords').innerText = "Passwords must be identical";
        document.querySelector('.same-passwords').style = "color: green";
    }
    if(validate==true){
        document.querySelector('button').disabled = false;
    }
})