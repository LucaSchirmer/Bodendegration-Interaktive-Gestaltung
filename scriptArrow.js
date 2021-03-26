

const contentSVGCOR = document.getElementById('contentSVG');

// Arrows


const arrowUp = document.getElementById('Arrow-up');

const Vector3 = document.getElementById('Vector_3');

const Vector4 = document.getElementById('Vector_4');

const arrowDown = document.getElementById('Arrow-down');

const arrowLeft = document.getElementById('Arrow-left');

const Vector7 = document.getElementById('Polygon 1');

const Vector8 = document.getElementById('Rectangle 1');

const arrowRight = document.getElementById('Arrow-right');

const Vector = document.getElementById('Vector');

const Vector2 = document.getElementById('Vector_2');

const Vector5 = document.getElementById('Vector_5');

const Vector6 = document.getElementById('Vector_6');

let vBcor = [];

var ii = 12;

const corX = [
    "-1000",//0
    "-900",//1
    "-800",
    "-700",
    "-600",
    "-500",
    "-400",//5
    "-300",
    "-250",
    "-200",
"    -150",
    "-100",//10
    "-50",
    "0",//12
    "50",
    "100",
    "150",//15
    "200",
    "250",
    "300",
    "400",
    "500",//20
    "600",
    "700",
    "800",
    "900",
    "1000"
];

const corY = [
    "-1000",//0
    "-900",//1
    "-800",
    "-700",
    "-600",
    "-500",
    "-400",//5
    "-300",
    "-250",
    "-200",
"    -150",
    "-100",//10
    "-50",
    "0",//12
    "50",
    "100",
    "150",//15
    "200",
    "250",
    "300",
    "400",
    "500",//20
    "600",
    "700",
    "800",
    "900",
    "1000"
];
/*
arrowUp.onclick = () =>{

    i = i + 1;
    console.log(i)
    if( i > 25){
        i = 24;
        return
    }
    else{
    vBcor = contentSVG.getAttribute("viewBox").split(" ");
    console.log(vBcor)
    console.log(vBcor)
    console.log(vBcor)
    cngViewboxCor(i);
    contentSVGCOR.setAttribute("viewBox", vBcor.join(" "))
    }
}
*/
function cngViewboxCor (){
        console.log(i)
        console.log(vBcor);
        console.log(vBcor[0]);
        console.log(i)
        vBcor[1] = corY[i];
        console.log(vBcor);
        vBcor.join(" ");
    }


arrowUp.onclick = () => {

    ii = ii + 1;
    console.log(ii)
    if( ii > 25){
        ii = 24;
        return
    }
    else{
        let x;
        x = contentSVG.getAttribute("transform");
        console.log(`my number ${corY[ii]}`);
        contentSVGCOR.setAttribute("transform", `translateX(${corY[ii]}px)`)
        console.log(`translateX(${corX[ii]})`);
    }  
}


arrowDown.onmouseover = () => {
    Vector5.style.fill = '#242424';
    Vector6.style.fill = '#242424';
}

arrowDown.onmouseout = () => {
    Vector5.style.fill = 'white';
    Vector6.style.fill = 'white';
}

arrowUp.onmouseover = () => {
    Vector3.style.fill = '#242424';
    Vector4.style.fill = '#242424';
}

arrowUp.onmouseout = () => {
    Vector3.style.fill = 'white';
    Vector4.style.fill = 'white';
}

arrowRight.onmouseover = () => {
    Vector.style.fill = '#242424';
    Vector2.style.fill = '#242424';
}

arrowRight.onmouseout = () => {
    Vector.style.fill = 'white';
    Vector2.style.fill = 'white';
}

arrowLeft.onmouseover = () => {
    Vector7.style.fill = '#242424';
    Vector8.style.fill = '#242424';
}

arrowLeft.onmouseout = () => {
    Vector7.style.fill = 'white';
    Vector8.style.fill = 'white';
}
