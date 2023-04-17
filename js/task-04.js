 let counterValue = 0;
  
const  minusButton = document.querySelector('button[data-action="decrement"]');

const plusButton = document.querySelector('button[data-action="increment"]');
        
const valueSpan = document.querySelector("#value");
 

plusButton.addEventListener ("click", plusOne)
minusButton.addEventListener("click", minusOne)

function plusOne(event) {
    // console.log("Button + was clicked");
    counterValue += 1;
    valueSpan.textContent = counterValue;
}

function minusOne(event) {
//    console.log("Button - was clicked");
    counterValue -= 1;
    valueSpan.textContent = counterValue;
}

 
