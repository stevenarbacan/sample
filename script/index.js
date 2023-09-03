const navBar = document.querySelector(".nav-bar");
const toggle = document.querySelector("#toggle");
var setToggle = false;

toggle.addEventListener("click" , () =>{
    if(setToggle === false){
        navBar.classList.add("side-bar");
        setToggle = true;
    }else if(setToggle === true){
        navBar.classList.remove("side-bar");
        setToggle = false;
    }
});