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
    document.querySelector("#counterText").innerHTML = `Count = ${counter}`
}






