function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
   
}
function generatePin(){
    const pin = getPin();
    document.getElementById('diplay-pin').value = pin;
    
}

document.getElementById('key-pad').addEventListener('click', function(event){
    
   const number = event.target.innerText;
   const calc = document.getElementById('type-numbers');
   if(isNaN(number)){
    if(number == 'C'){
        calc.value = '';
    }
   }
   else{
   const previousNumber = calc.value;
   const newNumber = previousNumber + number;
   calc.value = newNumber;
}
});

function varyfyPin(){
    const pin = document.getElementById('diplay-pin').value;
    const typedNumbers = document.getElementById('type-numbers').value;
    const successMessage = document.getElementById('succes');
    const failError = document.getElementById('fail');
    if(pin == typedNumbers){
        
        successMessage.style.display = 'block';
        failError.style.display = 'none'
    }
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block'
        
    }

}


