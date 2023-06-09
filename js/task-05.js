
const nameIn = document.querySelector("#name-input");

const nameOut = document.querySelector("#name-output");

const outputNameText = nameOut.textContent;

nameIn.addEventListener("input", addDataFunct);

function addDataFunct(event) {
    nameOut.textContent = event.currentTarget.value;
    
    event.currentTarget.value.trim() === ""?
      nameOut.textContent = outputNameText:
    nameOut.textContent = event.currentTarget.value
}



// Завдання 5​

// Напиши скрипт, який під час набору тексту в інпуті 
// input#name - input(подія input), підставляє його 
// поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// < input type = "text" id = "name-input"
// placeholder = "Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>