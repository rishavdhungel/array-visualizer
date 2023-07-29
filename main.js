const container = document.querySelector('.mainContainer');
const arrayItems = document.querySelector('.arrayItem');
const arraydisplay = document.querySelector('.arraydisplay');
let arrayValue = [];
function rgbavalue(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let transparency = Math.random().toFixed(2);
    let randomvalue = "rgba("+red+","+green+","+blue+","+transparency+")";
    return randomvalue;
}

function generateArray(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    let arrayLength = document.querySelector("#arraysize").value;
    for (let i = 0 ; i <arrayLength; i++){
        const arrayItem = document.createElement('div');
        arrayValue[i] = Math.floor(Math.random()*200);
        arrayItem.classList.add('arrayItem');
        arrayItem.style.height = arrayValue[i]+"px";
        arrayItem.style.backgroundColor = rgbavalue();
        container.appendChild(arrayItem);

    } 


}



