const Op = document.getElementById("Options");
const moveIN = document.getElementById("eventNav");

var bool = -1;
   

Op.onclick = () => {

    console.log(bool+ "aftreaer")
    bool = bool * -1;
    console.log(bool+ "after")
    console.log("run")
    
    console.log(bool+ "s")
    if(bool == 1){
        console.log(bool + "if")
        console.log(moveIN)
        console.log(Op)
        moveIN.style.transform ="translateX(0vh)";
    }
    console.log(bool+ "a")
    if(bool === -1){
        console.log(bool + "if -")
        console.log(moveIN)
        console.log(Op)
        moveIN.style.transform ="translateX(-40vh)";
    }
    console.log(bool+ "now")
}
