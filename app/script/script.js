//hamburger menu
let hambMenu = document.querySelector(".hamb"),
    openHamb = document.querySelector("#hambOpen")

hambMenu.addEventListener("click", () => {
    //close menu
    if (hambMenu.classList.contains("openMenu")) {
        hambMenu.classList.remove("openMenu")
        openHamb.classList.add("hide")

        document.body.classList.remove("noScroll")
    }
    //open menu
    else {
        hambMenu.classList.add("openMenu")
        openHamb.classList.remove("hide")

        document.body.classList.add("noScroll")
    }
})