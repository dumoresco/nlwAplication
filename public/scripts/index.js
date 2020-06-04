let btnSearch = document.querySelector("#page-home main a")
let modal = document.querySelector("#modal")
let close = document.querySelector("#modal .header a")

btnSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})


close.addEventListener("click", () =>{
    modal.classList.add("hide");
})
