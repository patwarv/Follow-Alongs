window.onresize = screen;
window.onload = screen;

function screen() {
    Width = window.innerWidth;
    document.querySelector("#size").innerHTML = `Width : ${Width} px`
}

main = function() {
    console.log("Ready");
    console.log(window.innerWidth)
    screen();
}

main()