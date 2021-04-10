//Global Ones
var i = 0;

const contentSVG = document.getElementById('contentSVG');

const viewBox1 = [
    "1680",
    "2100",
    "3150",
    "4200",
    "5250",
    "6300",
    "8400"
];

const viewBox2 = [
    "3900",
    "4875",
    "7312.5",
    "9750",
    "12187.5",
    "14625",
    "19500"
];

// zoomButtons

    const zoomInRect = document.getElementById('Zoom-In-Rect');

    const zoomInLine1 = document.getElementById('Zoom-In-Line-1');

    const zoomInLine2 = document.getElementById('Zoom-In-Line-2');

    const iconPlus    = document.getElementById('Plus');

    const zoomOutRect = document.getElementById('Zoom-Out-Rect')

    const zoomOutLine = document.getElementById('Zoom-Out-Line')

    const iconMinus   = document.getElementById('Minus');
    
    let vB=[];
    
    let newVB=[];

    console.log(i)

    iconMinus.onclick = () =>{
        console.log('pressed')
        
        i = i +1;
        console.log(i)
        if( i >= 6){
            i = 5;
            return
        }
        else{
        
        vB = contentSVG.getAttribute("viewBox").split(" ");
        console.log(vB)
        //vB_Size = vB.slice(2, 4)
        //vB_Cor = vB.slice(0, 2)
        //vB = vB.slice(2,4);
        //vB.join(viewBox1[i]);
        console.log(vB)
        //vB.join(viewBox2[i]);
        //console.log(vB_Size)
        //console.log(vB_Cor)
        console.log(vB)
        cngViewbox(i);
        contentSVG.setAttribute("viewBox", vB.join(" "))
        }
    }

    function cngViewbox (){
        console.log(i)
        vB[2] = viewBox1[i];
        console.log(vB);
        console.log(i)
        vB[3] = viewBox2[i];
        console.log(vB);
        vB.join("")
    }


    iconPlus.onclick = () =>{
        console.log('pressed')
        
        i = i - 1;
        console.log(i)
        if( i < 0){
            i = 1;
            return
        }
        else{
        
        vB = contentSVG.getAttribute("viewBox").split(" ");
        console.log(vB)
        //vB_Size = vB.slice(2, 4)
        //vB_Cor = vB.slice(0, 2)
        //vB = vB.slice(2,4);
        //vB.join(viewBox1[i]);
        console.log(vB)
        //vB.join(viewBox2[i]);
        //console.log(vB_Size)
        //console.log(vB_Cor)
        console.log(vB)
        cngViewboxSIZE(i);
        contentSVG.setAttribute("viewBox", vB.join(" "))
        }
    }

    function cngViewboxSIZE (){
        console.log(i)
        vB[2] = viewBox1[i];
        console.log(vB);
        console.log(i)
        vB[3] = viewBox2[i];
        console.log(vB);
        vB.join("")
    }

    iconPlus.onmouseover = () => {
        zoomInLine1.style.stroke = "white";
        zoomInLine2.style.stroke = "white";
        zoomInRect.style.fill = "black";
    }

    iconPlus.onmouseout = () => {
        zoomInLine1.style.stroke = "black";
        zoomInLine2.style.stroke = "black";
        zoomInRect.style.fill = "white";
    }


    
    iconMinus.onmouseover = () => {
        zoomOutLine.style.stroke = "white";
        zoomOutRect.style.fill = "black";
    }

    iconMinus.onmouseout = () => {
        zoomOutLine.style.stroke = "black";
        zoomOutRect.style.fill = "white";
    }
