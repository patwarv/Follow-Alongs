const turn = document.getElementById("turn");
const boxes = document.querySelectorAll("#main div");
let X_or_0 = 0;
let gameActive = true;

function main(){
    boxes.forEach((box) =>{
        box.addEventListener("click", handleBoxClick);
    });
    document.getElementById("replay").addEventListener("click", replay);
    turn.innerHTML = "Play";
    turn.style.fontSize = "25px";

}

function selectWinnerBoxes(winnerBoxes){
    winnerBoxes.forEach((box) => {
        box.classList.add("win");
    });

    turn.innerHTML=winnerBoxes[0].innerHTML + " is a winner";
    turn.style.fontSize = "40px";

}

function getWinner(){
    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8], [2,4,6]
    ];
    
    for (const combination of winningCombinations){
        const [a,b,c] = combination;
        const boxA = boxes[a], boxB = boxes[b],boxC = boxes[c];
        console.log(boxA,boxB,boxC)
        if(boxA.innerHTML !== "" && boxA.innerHTML === boxB.innerHTML && boxA.innerHTML === boxC.innerHTML){
            selectWinnerBoxes([boxA, boxB, boxC]);
            return boxA.innerHTML;
        }
    }
    return null;
}

function handleBoxClick(){
    if (!gameActive) return; 

    if(this.innerHTML !== "X" && this.innerHTML !== "0"){
        const currentPlayer = X_or_0 % 2 === 0 ? "X" : "0";

        this.innerHTML= currentPlayer;
        console.log(currentPlayer);

        turn.innerHTML = (currentPlayer === "X" ? "0" : "X") + " Turn Now";
        X_or_0 += 1;
    }
    const winner = getWinner();
    if(winner){
        X_or_0 = 0;
        gameActive = false;
        return;
    }

}

function replay(){
    boxes.forEach((box) => {
        box.classList.remove("win");
        box.innerHTML = "";
    });

    X_or_0 = 0;
    gameActive = true;

}

main();