let closeBut = document.querySelector("#closeR");
let closeForgot = document.querySelector("#closeForgot");
let logView = document.querySelector(".logMet")
let logBox = document.querySelector(".loginCont");
let signBT = document.querySelector("#signBut");
let fogPass = document.querySelector("#forGot");
let fCont = document.querySelector(".fogCont");
let fLogBut = document.querySelector("#fLogBut");
let createCon = document.querySelector("#createCon");
let closeCrt = document.querySelector("#closeCrt");
let reG = document.querySelector("#reG");
let regBut = document.querySelector("#regBut");
let logBack = document.querySelector("#logBack");

closeBut.addEventListener("click", (e)=>{
    e.preventDefault();
    logBox.classList.add("fadeOut");
    logBox.addEventListener("animationend", ()=>{
        logBox.classList.remove("fadeOut");
        logView.style.display = "none"
    }, {once: true})
})

signBT.addEventListener("click", (e)=>{
    e.preventDefault();
    logView.style.display = "flex";

    logBox.style.display = "grid";
    fCont.style.display = "none";
    createCon.style.display = "none";

    logBox.classList.add("fadeIn");
    logBox.addEventListener("animationend", ()=>{
        logBox.classList.remove("fadeIn")
    }, {once: true});
})

window.addEventListener("click", (e)=>{
    if(e.target === logView){
        if(logBox.style.display !== "none"){
            logBox.classList.add("fadeOut");
            logBox.addEventListener("animationend", ()=>{
                logBox.classList.remove("fadeOut");
                logView.style.display = "none";
            }, {once: true})
        }else if(fCont.style.display !== "none"){
            fCont.classList.add("fadeOut");
            fCont.addEventListener("animationend", ()=>{
                fCont.classList.remove("fadeOut");
                logView.style.display = "none";
            }, {once: true})
        }else if(createCon.style.display !== "none"){
                createCon.classList.add("fadeOut");
                createCon.addEventListener("animationend", ()=>{
                logView.style.display = "none";
            }, {once: true})
        }
    }
})
    
fogPass.addEventListener("click", (e) => {
    fCont.style.display = "none";
    e.preventDefault();
    logBox.classList.add("fadeOut");
    logBox.addEventListener("animationend", ()=>{
        logBox.classList.remove("fadeOut");
        logBox.style.display = "none";

        fCont.classList.add("fadeIn");
        fCont.style.display = "grid"
        fCont.addEventListener("animationend", ()=>{
            fCont.classList.remove("fadeIn");
        }, {once: true})
    }, {once: true})
})
    
fLogBut.addEventListener("click", (e)=>{
    e.preventDefault();
    fCont.classList.add("fadeOut");
    fCont.addEventListener("animationend", ()=>{
        fCont.classList.remove("fadeOut");
        fCont.style.display = "none";

        logBox.style.display = "grid";
        logBox.classList.add("fadeIn");
        logBox.addEventListener("animationend", ()=>{
            logBox.classList.remove("fadeIn");
        }, {once: true})
    }, {once: true})
})

closeForgot.addEventListener("click", (e)=>{
    fCont.classList.add("fadeOut");
    fCont.addEventListener("animationend", ()=>{
        fCont.classList.remove("fadeOut");
        logView.style.display = "none";
    }, {once: true})
})

closeCrt.addEventListener("click", (e)=>{
    createCon.classList.add("fadeOut");
    createCon.addEventListener("animationend", ()=>{
        createCon.classList.remove("fadeOut");
        logView.style.display = "none";
    }, {once: true})
})

reG.addEventListener("click", (e)=>{
    logBox.classList.add("fadeOut");
    logBox.addEventListener("animationend", ()=>{
        logBox.classList.remove("fadeOut");
        logBox.style.display = "none";

        createCon.style.display = "flex"
        createCon.classList.add("fadeIn");
        createCon.addEventListener("animationend", ()=>{
            createCon.classList.remove("fadeIn");
        },{once: true})
    },{once: true})
})

regBut.addEventListener("click", (e)=>{
    e.preventDefault();
    createCon.classList.add("fadeOut");
    createCon.addEventListener("animationend", ()=>{
            createCon.classList.remove("fadeOut");
            createCon.style.display = "none";

        logBox.style.display = "grid";
        logBox.classList.add("fadeIn");
        logBox.addEventListener("animationend", ()=>{
            logBox.classList.remove("fadeIn");
        }, {once: true})
    }, {once: true})
})

logBack.addEventListener("click", (e)=>{
    e.preventDefault();
    createCon.classList.add("fadeOut");
    createCon.addEventListener("animationend", ()=>{
    createCon.classList.remove("fadeOut");
    createCon.style.display = "none";

            logBox.style.display = "grid";
            logBox.classList.add("fadeIn");
            logBox.addEventListener("animationend", ()=>{
            logBox.classList.remove("fadeOut");
        }, {once: true})
    }, {once: true})
})

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".content");
    
    setTimeout(() => {
    preloader.style.opacity = "0"; 
        setTimeout(() => {
            preloader.style.display = "none"; 
            content.style.display = "block"; 
        }, 500);
    }, 800);
});

document.getElementById("loginForm").addEventListener("submit", (event)=>{
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    localStorage.setItem("userName", userName);
    window.location.href = "database.html"
})