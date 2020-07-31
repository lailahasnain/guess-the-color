var numSquare = 6;
var pickedColor; //pick a  random color to guess
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); /* select span with id "colorDisplay" */
colorDisplay.textContent = pickedColor; /*change its content anytime the pickedColor change*/
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButton();
    setupSquares();
    resetAll();
}


function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        //add click listeners
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor; // get the clicked color
            if (clickedColor === pickedColor) {            // check if the clicked color is same as picked
               messageDisplay.textContent = "Correct!";
               reset.textContent = "Play Again?";
               changeColor(clickedColor);
               h1.style.backgroundColor = clickedColor; // change h1 bg to clicked color
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function resetAll() {
    //generate new colors
    colors = generateRandomColors(numSquare);
//change picked colors
    pickedColor = pickColor();
//change colorDisplay
    colorDisplay.textContent = pickedColor;
//change color of squares
for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
    else {
        squares[i].style.display = "none";
    }
}
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    reset.textContent = "New Colors";

}

reset.addEventListener("click", function() {
    resetAll();
});



function setupModeButton() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
             modeButtons[0].classList.remove("selected");
             modeButtons[1].classList.remove("selected");
             this.classList.add("selected");

             this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
             resetAll();
        });
     }
}
function changeColor(color) {  //change color of all square to picked color
    //loop through all square
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {  //random pick color
    var random = Math.floor(Math.random() * colors.length) //math floor remove decimal
                                                            //math random generate 0 - 0.99
    return colors[random];
}

function generateRandomColors(num) {
    //create array
    var arr = [];
    //add num colors to array
    for(var i = 0; i < num; i++) {
        arr.push(randomColor()); //push random number into the arr num times

    }
    //return array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256); //generate up to 255
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
