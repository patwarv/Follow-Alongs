console.log("Ready");
let counter = 0;
document.querySelector("#decrementbutton").onclick = event =>{
    console.log("decrement");
    counter = counter - 1;
    updateView();
}
document.querySelector("#resetbutton").onclick = event =>{
    console.log("reset");
    counter = 0;
    updateView();
}
document.querySelector("#incrementbutton").onclick = event =>{
    console.log("increment");
    counter = counter + 1;
    updateView();
}
updateView = function(){
    document.querySelector("#counterText").innerHTML = `${counter}`
}

function updateColor(color) {
    document.querySelector("#favoriteColorBox").style.backgroundColor= color;
}

document.querySelector("#blue").onclick = event => {
    console.log("Blue Selected");
    updateColor('blue');
}

document.querySelector("#green").onclick = event => {
    console.log("Green Selected");
    updateColor('green');
}

document.querySelector("#red").onclick = event => {
    console.log("Red Selected");
    updateColor('red');
}

document.querySelector("#purple").onclick = event => {
    console.log("Purple Selected");
    updateColor('purple');
}


