/* ============================================================
   ETAPA 6 — puzzle
   Cambia fotos/puzzle.jpg por la foto real de ustedes.
============================================================ */
const puzzle=document.getElementById("puzzle");
const puzzleMessage=document.getElementById("puzzle-message");
const puzzleNext=document.getElementById("puzzle-next");

const correctPositions=[
    "0% 0%","50% 0%","100% 0%",
    "0% 50%","50% 50%","100% 50%",
    "0% 100%","50% 100%","100% 100%"
];

let puzzleState=[...Array(9).keys()];
let selectedIndex=null;

function shuffle(array){
    let a=[...array];
    do{
        for(let i=a.length-1;i>0;i--){
            const j=Math.floor(Math.random()*(i+1));
            [a[i],a[j]]=[a[j],a[i]];
        }
    }while(a.every((v,i)=>v===i));
    return a;
}

puzzleState=shuffle(puzzleState);

function renderPuzzle(){
    puzzle.innerHTML="";
    puzzleState.forEach((sourceIndex,currentIndex)=>{
        const piece=document.createElement("div");
        piece.className="puzzle-piece";
        piece.style.backgroundPosition=correctPositions[sourceIndex];
        piece.dataset.index=currentIndex;
        piece.addEventListener("click",()=>selectPuzzlePiece(currentIndex));
        puzzle.appendChild(piece);
    });
}

function selectPuzzlePiece(index){
    const pieces=document.querySelectorAll(".puzzle-piece");

    if(selectedIndex===null){
        selectedIndex=index;
        pieces[index].classList.add("selected");
        return;
    }

    if(selectedIndex===index)return;

    [puzzleState[selectedIndex],puzzleState[index]]=
    [puzzleState[index],puzzleState[selectedIndex]];

    selectedIndex=null;
    renderPuzzle();
    checkPuzzle();
}

function checkPuzzle(){
    const solved=puzzleState.every((v,i)=>v===i);

    if(solved){
        puzzleMessage.textContent="Lo encontraste... nuestro recuerdo volvió a estar completo. ♡";
        puzzleNext.classList.remove("hidden");
    }
}

renderPuzzle();
