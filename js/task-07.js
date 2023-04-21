const fontInd = document.querySelector("#text")
 
const currentFont = document.querySelector("#font-size-control");
 
 const currentTempFont = currentFont.getAttribute("font-size-control");
    console.log("🚀 ~ file: task-07.js:14 ~ fontChanger ~ currentTempFont:", currentTempFont)
    
//     currentFont.addEventListener ("input", fontTracker)
// function fontTracker(event) {
//    console.log(event.target.value)  
// }


currentFont.addEventListener ("input", fontChanger)

function fontChanger(event) {
    fontInd.style.fontSize=`${event.target.value}px`
}




// ФОНТ кверіселектор спан техт

// фонтю евентлиснер (инпут . чендж колор)

// черндж колокр(ивент)
// конст КАРРфонт = фонт контрол.каррТаргет.валуе
// ФОНТ.аддКласс.чендж то КАРРфонт
// elem.classList.replace(oldClass, newClass)

// nameOut.textContent = event.currentTarget.value;
// }

// Завдання 7​

// Напиши скрипт, який реагує на зміну значення 
// input#font - size - control(подія input) 
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи
// повзунок, буде змінюватися розмір тексту.