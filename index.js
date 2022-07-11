
document.querySelector("button").addEventListener("click", _func)
function _func() {
    alert("I got clicked");
};

//  select the all elements
document.querySelectorAll("button")[0].addEventListener("click", _func)
document.querySelectorAll("button")[1].addEventListener("click", _func)
document.querySelectorAll("button")[2].addEventListener("click", _func)
function _func() {
    alert("I got clicked");
};




// it take lot of code we are going to use for loop for selecting the all elements
// var lenOfbuttons = document.querySelectorAll(".drum").length;
// for (i = 0; i <= lenOfbuttons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", _func)
//     function _func() {
//         alert("I got clicked!");
//     };
// }


// or    ---   using while loop for selecting the all elements
// var lenOfbuttons = document.querySelectorAll(".drum").length;
// i = 0;
// while (i <= lenOfbuttons){
//     document.querySelectorAll(".drum")[i].addEventListener("click", _func)
//     function _func () {
//         alert("I got clicked!");
//     };
//     i++;
// }




// play sound on a website
var lenOfbuttons = document.querySelectorAll(".drum").length;
for (i = 0; i <= lenOfbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", _func)
    function _func() {
        console.log(this.inerHTML);

    }
}

// var audio = new Audio('/sounds/snare.mp3');
// audio.play();



// heigher order function   
function add(num1, num2) {
    return num1 + num2;
};
function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}


// add,substract,multiply and divide heigher order function
function add(num1, num2) {
    return num1 + num2;
};
function substract(num1, num2) {
    return num1 - num2;
};
function multiply(num1, num2) {
    return num1 * num2;
};
function divide(num1, num2) {
    return num1 / num2;
};

function calculator1(num1, num2, operator) {
    return operator(num1, num2);
}
