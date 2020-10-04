// button black website

//btn
let btnWhite = document.querySelector(".buttonWhite");
let btnBlack = document.querySelector(".buttonBlack");

//section
let body = document.querySelector("body");
let headerH1 = document.querySelector("header");
let logoNav = document.querySelector(".navbar-brand");
let navFond = document.querySelector("nav");
let navA = document.querySelectorAll("nav>div>div>a");
let sections = document.querySelectorAll(".sectionBlack");
let buttonCar = document.querySelectorAll(".buttoncar>button");


//code black button

btnBlack.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    logoNav.style.color = "white";
    sections[1].style.color = "white";
    sections[2].style.color = "white";
    headerH1.style.backgroundColor = "black";
    headerH1.style.color = "white";
    navFond.style.backgroundColor = "black";
    navA[0].style.color = "white";
    navA[1].style.color = "white";
    navA[2].style.color = "white";
    navA[3].style.color = "white";
    navA[4].style.color = "white";
    navA[5].style.color = "white";
    buttonCar[0].style.backgroundColor = "black";
    buttonCar[0].style.border = "white 1px solid";
    buttonCar[1].style.backgroundColor = "black";
    buttonCar[1].style.border = "white 1px solid";
    buttonCar[2].style.backgroundColor = "black";
    buttonCar[2].style.border = "white 1px solid";
    buttonCar[3].style.backgroundColor = "black";
    buttonCar[3].style.border = "white 1px solid";
    navFond.style.borderBottom = "solid white 2px";
})

//code white button

btnWhite.addEventListener("click", () => {
    body.style.backgroundColor = "white";
    logoNav.style.color = "black"
    sections[1].style.color = "black"
    sections[2].style.color = "black"
    headerH1.style.backgroundColor = "white";
    headerH1.style.color = "black";
    navFond.style.backgroundColor = "white";
    navA[0].style.color = "black";
    navA[1].style.color = "black";
    navA[2].style.color = "black";
    navA[3].style.color = "black";
    navA[4].style.color = "black";
    navA[5].style.color = "black";
    buttonCar[0].style.backgroundColor = "white"
    buttonCar[0].style.border = "black 1px solid"
    buttonCar[1].style.backgroundColor = "white"
    buttonCar[1].style.border = "black 1px solid"
    buttonCar[2].style.backgroundColor = "white"
    buttonCar[2].style.border = "black 1px solid"
    buttonCar[3].style.backgroundColor = "white"
    buttonCar[3].style.border = "black 1px solid"
    navFond.style.borderBottom = "solid black 2px"

})

//navbar scroll change
let navOffsetTop = navFond.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY >= navOffsetTop) {
        navFond.style.position = "fixed";
        navFond.style.top = 0;
        navFond.style.width = "100%";
        navFond.style.height = "12%";
        navFond.style.margin = "0%";
        logoNav.style.display = "block";
        navFond.style.borderBottom = "solid black 2px";
        if (btnWhite) {
            navFond.style.borderBottom = "solid black 2px";
        }

    } else {
        navFond.style.position = "static";
        logoNav.style.display = "none";
        navFond.style.borderBottom = "none"
    }
})

//button connexion
let btnCo = document.querySelector(".buttonLogin")
let popup = document.querySelector(".connexion");
let Signup = document.querySelector(".signup>.signup2>button");
let Register = document.querySelector(".register>.register2>button")
let Croix = document.querySelector(".croix")

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input3");

btnCo.addEventListener("click", () => {
    popup.style.display = "flex"
})

Croix.addEventListener("click", () => {
    popup.style.display = "none"
})

Signup.addEventListener("click", () => {
    input1.style.display = "block"
    input2.style.display = "none"

})
Register.addEventListener("click", () => {
    input2.style.display = "block"
    input1.style.display = "none"

})

window.addEventListener("scroll", () => {
    popup.style.position = "fixed"
    popup.style.top = "150px"
})

//carrousel

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-14%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains('third')) {
            slides.style.transform = 'translatex(-28.5%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('quatrieme')) {
            slides.style.transform = 'translatex(-42.9%)';
            e.target.classList.add('active');
        }
    }
});


