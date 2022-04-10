//Test de connexion
console.log("Be water my Friend");
console.log("-----")

//Beginning of the project
//Blue side 
const BLUE_SIDE = document.getElementById("blue");

//Initial width
let blueWidth = 50;

//Event listener
document.addEventListener("keydown", fight);

//width++ or width-- of Blue Side Function 
function fight(e) {
    let keyClick = e.key;
    switch (keyClick) {
        case "q":
            blueWidth = blueWidth + 2.5;
            BLUE_SIDE.style.setProperty("--blue-width", blueWidth + "%");
            break;
        case "m":
            blueWidth = blueWidth - 2.5;
            BLUE_SIDE.style.setProperty("--blue-width", blueWidth + "%");
            break;
    }
}