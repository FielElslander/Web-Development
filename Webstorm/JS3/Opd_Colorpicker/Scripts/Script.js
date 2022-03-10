const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemo = document.getElementsByClassName("colorDemo");
    let Red = document.getElementsByClassName("Red");
    let Green = document.getElementsByClassName("Green");
    let Blue = document.getElementsByClassName("Blue");

    Red[0].innerText = "R: " + sliders[0].value;
    Green[0].innerText = "G: " + sliders[1].value;
    Blue[0].innerText = "B: " + sliders[2].value;


    colorDemo[0].style.backgroundColor = "rgb(" + sliders[0].value + "," +
        sliders[1].value + "," + sliders[2].value +")";

}
window.addEventListener("load", setup);