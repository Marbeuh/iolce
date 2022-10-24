"use strict"; 

// Burger menu

let navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", toggleNavigation);

function toggleNavigation(){
    if(!document.body.hasAttribute("data-menu")){
        document.body.setAttribute("data-menu", true);
    }else{
        document.body.removeAttribute("data-menu");
    }
}

// // Darkmode

var toggleButton = document.querySelector(".btn__dark");
toggleButton.addEventListener("click", toggleCallback);
var activeTheme = localStorage.getItem("theme");
if(activeTheme == "dark"){
    document.body.classList.add("dark");
    toggleButton.checked = true;
}
function toggleCallback(){
    if(document.body.classList.toggle("dark")){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}




// date
var dateEl = new Date();
document.querySelector("#date")
.innerHTML = dateEl.getFullYear();


