const input = document.getElementById('validation-input');
const validLength = input.getAttribute("data-length");

input.addEventListener('blur', () => {
  const inputValue = input.value.trim().length;
  
  if (inputValue === Number(validLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});

 

// Завдання 6​

// Напиши скрипт, який під час втрати фокусу 
// на інпуті(подія blur), перевіряє його вміст 
// щодо правильної кількості введених символів.

// <inpu...AbortController.apply.

//     Яка кількість символів повинна бути в інпуті,
//         зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
//     то border інпуту стає зеленим, якщо 
//     неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи 
// valid і invalid, які ми вже додали у вихідні 
// файли завдання.

