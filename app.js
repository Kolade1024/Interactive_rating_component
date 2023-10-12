const COMPONENTS = document.querySelector(".components");
const THANK_STATE = document.querySelector(".thanks");
const STATE_1 = document.querySelector(".state1");
const SUBMIT = document.querySelector("button");
const selectedVal =  THANK_STATE.querySelector(".selected span");
const warning = document.querySelector(".warning");

COMPONENTS.addEventListener("click", (e)=>{
let reset = COMPONENTS.querySelectorAll(".rating");
reset.forEach((a)=>{a.classList.remove("rated")});

if(e.target.classList.contains("rating")){
    e.target.classList.toggle("rated");
    e.target.classList.toggle("over");
}

selectedVal.textContent = e.target.textContent;
warning.style.display = "none";


});

SUBMIT.addEventListener("click", (e)=>{
    if(selectedVal.textContent>0){
THANK_STATE.style.display = "flex";
STATE_1.style.display = "none";
    }else{
        warning.style.display = "block";
    }
});
