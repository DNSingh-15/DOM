var a = document;
console.log(a)

var b = document;
// b = document.body;
// b = document.forms
// b = document.forms[0];

// manupulation about links
// b = document.links
// b = document.links[0];
b = document.links[0].href;
console.log(b)


// element selector
// id selector
var element = document.getElementById("child1")
console.log(element)

var c = document.getElementById("child2")
// c = c.className;
// c = c.childNodes;
// c = c.parentNode
c.style.color = "red";
c.innerText = "this is a good by";
c.innerText = "<b>this is not a good by </b>";
console.log(c.innerText)
console.log(c)



// class selector
var d = document.getElementsByClassName("child-4")
d.innerHTML = "Hello this is child 4";
console.log(d.innerText)
console.log(d)

// sel.forEach(element => {  
//     console.log(element);
// });
// in DOM forEach is not a function by resolving this we can use Array.form(vraNmae)
Array.from(d).forEach(element => {
    element.style.color = "blue"
    console.log(element);
});



// Query selector
var sel = document.querySelector("#child1")
var sel = document.querySelector(".container")
var sel = document.querySelector("div")
var sel = document.querySelector(".child-2")
sel.style.color = "purple";
console.log(sel);




// Events
console.log("this is about Events");
document.getElementById("heading").addEventListener("click", function () {
    // console.log("you have clicked on heading");
    document.location.href = "https://www.flipkart.com/";
})

document.getElementById("heading2").addEventListener("click", function(element){
    console.log(element);
})


document.getElementById("btn").addEventListener("click", _func1)
// or
// var btn = document.getElementById("btn");
// btn.addEventListener("click", _func1)
function _func1() {
    console.log("clicked on submit button");
}

var btn = document.getElementById("btn");

// double click event
btn.addEventListener("mousedown", _func2)
function _func2() {
    console.log("Thanks it's mousedown event");       
}



var btn2 = document.getElementById("btn2");

btn2.addEventListener("click", _funcl)
function _funcl(element) {
    console.log("clicked on submit button again", element);
    element.preventDefault();                // preventDefault() is used for avoiding the default page
}



document.querySelector(".container-2").addEventListener("mouseenter", _func3)
function _func3 () {
    console.log("container-2 it's mouse enter");
}


document.body.addEventListener("mouseleave", _func4 = () => {
    console.log("Thanks! it's mouse leave");
})


// document.body.addEventListener("mousemove", _func5)
// function _func5 () {
//     console.log("Thanks --- it's mouse move");
// }
// or 
document.body.addEventListener("mousemove", _func5 = () => {
    console.log("Thanks --- it's mouse move");
});


document.querySelector(".container-2").addEventListener("mouseover", _func6 = () => {
    console.log("container-2 thanks it's mouse over");
});




