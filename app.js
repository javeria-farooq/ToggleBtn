let modeBtn = document.querySelector("#modeBtn")

let currMode = "light"

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark"
        let body = document.querySelector("body")
        body.classList.add("dark")
        body.classList.remove("light")
        modeBtn.classList.add("modeBtnDark")
        modeBtn.classList.remove("modeBtnLight")
    }

    else{
        currMode = "light"
        let body = document.querySelector("body")
        body.classList.add("light")
        body.classList.remove("dark")
        modeBtn.classList.add("modeBtnLight")
        modeBtn.classList.remove("modeBtnDark")
    }
})