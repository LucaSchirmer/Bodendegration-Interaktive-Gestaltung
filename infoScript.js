const Arrow = document.getElementById("imgSy");
const infoArray = document.getElementById("info");
console.log(Arrow)
Arrow.onclick = () => {
    Arrow.style.transform ="rotate(180deg)"
    console.log("preee")
}
var boolA = -1;
var boolB = -1;
Arrow.onclick = () => {

    boolA = boolA * -1;
    boolB = boolB * -1;
    if(boolA == 1){
        Arrow.style.transform ="rotate(180deg)"  
    }
    if(boolA === -1){  
        Arrow.style.transform ="rotate(0deg)"
    }
    if(boolB == -1){
        infoArray.style.height = "7.5vh"  
    }
    if(boolB === 1){  
        infoArray.style.height = "40vh" 
    }

}

const Menschunten = document.getElementById(`Menschunten`);

const Menschoben = document.getElementById(`Menscheoben`);

const arrowsBodendegZUBodenre = document.getElementById(`arrows Bodendegration Bodenregeneration`);

const Bodendegration = document.getElementById(`Bodendegration`);

const Bodenregeneration = document.getElementById(`Bodendegration_3`);

const arrowsFolgenZUBodendeg = document.getElementById(`arrows Folgen Bodendegration_7`);

const arrowsMassnahmenzuBodendeg = document.getElementById(`arrows MassnahmenBodendegration`);

const arrowsMenschzuBodendeg = document.getElementById(`arrows Mensch Bodendegration`);

const arrowsUrsachenzuFolgen = document.getElementById(`arrows Ursachen Folgen`);

const Folgen = document.getElementById(`Folgen`);

const Ursachen = document.getElementById(`Ursachen`);

const arrowsMenschzuUrsache = document.getElementById(`arrow Mensch Ursache`);

/*
Menschunten.onclick = () => {
    
}

*/