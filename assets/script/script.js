//Test de connexion
console.log("Be water my Friend");
console.log("-----")

//Beginning of the project
//Blue side 
const BLUE_SIDE = document.getElementById("blue");
const RED_SIDE = document.getElementById("gameFieldRed");
const RED_SIDE_STYLE = getComputedStyle(RED_SIDE).width
let blueSideStyle = ""

//Initial width
let blueWidth = 50;

//Event listener
document.addEventListener("keydown", fight);

//width++ or width-- of Blue Side Function 
function fight(e) {
    let keyClick = e.key;
    switch (keyClick) {
        //Blue Side 
        case "q":
            //Add Width +2.5
            blueWidth = blueWidth + 2.5;
            BLUE_SIDE.style.setProperty("--blue-width", blueWidth + "%");
            //Get de With for the win 
            blueSideStyle = getComputedStyle(BLUE_SIDE).width;
            console.log('blueSideStyle', blueSideStyle)
            console.log('RED_SIDE_STYLE', RED_SIDE_STYLE)
            break;
        //RED Side     
        case "m":
            //Add Width +2.5
            blueWidth = blueWidth - 2.5;
            BLUE_SIDE.style.setProperty("--blue-width", blueWidth + "%");
            //Get de With for the win 
            blueSideStyle = getComputedStyle(BLUE_SIDE).width;
            console.log('blueSideStyle', blueSideStyle)
            console.log('RED_SIDE_STYLE', RED_SIDE_STYLE)
            break;
    }
    //Victory condition
    if (blueSideStyle == "0px") {
        console.log("Red Team Win")
    } else if (blueSideStyle === RED_SIDE_STYLE) {
        console.log("Blue Team Win")
    }
}