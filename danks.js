const hamburguerr = document.querySelector(".hamburguerr");
const list = document.querySelector(".list");

hamburguerr.addEventListener("click", ()=> {
    hamburguerr.classList.toggle("active");
    list.classList.toggle("active");
})

document.querySelectorAll(".list").forEach(n => n.addEventListener("click", () =>{
    hamburguerr.classList.remove("active");
    list.classList.remove("active");
}))