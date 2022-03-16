const setup = () => {
    let btnString = document.getElementById("btnString");
    btnString.addEventListener("click", tussenfunctie);
}
const tussenfunctie = () => {
    let text = document.getElementById("txtInput");
    maakMetSpaties(text);
}
const maakMetSpaties = (inputText) => {
    let nieuweTekst = "";
    for (let i = 0; i < inputText.value.length; i++) {
        nieuweTekst += inputText.value.charAt(i) + " ";
    }
    console.log(nieuweTekst);
}
window.addEventListener("load", setup);