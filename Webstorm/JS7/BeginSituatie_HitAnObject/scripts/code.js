let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",

    MOVE_DELAY: 3000,

    score: 0,
    timeoutid: 0
};
let timer;
const setup = () => {
    let image = document.getElementsByClassName("image")[0];
    image.addEventListener('click', klik);
    let startbutton = document.getElementById("start");
    startbutton.addEventListener('click', Game);
};

const Game = () => {
    timer = setInterval(position, 2500);
}

const klik = () => {
    let image = document.getElementsByClassName("image")[0]
    if(image.getAttribute("src") == "images/0.png"){
        alert("Game over!");
        clearInterval(timer);
    }
    else{
        position();
    }
}

const position = () => {
    let image = document.getElementsByClassName("image")[0];
    image.style.marginLeft = (Math.random() * 552) + "px";
    image.style.marginTop = (Math.random() * 752) + "px";
    let newimage = "images/" + Math.round((Math.random() * 4)) + ".png";
    image.setAttribute("src", newimage);
}
window.addEventListener("load", setup);


