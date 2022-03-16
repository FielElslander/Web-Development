const setup = () => {
    let btnString = document.getElementById("btnString");
    btnString.addEventListener("click", print);
}
const print = () => {
    let input = document.getElementById("txtInput");
    console.log(input.value);
    let nieuweTekst = "";
    for (let i = 0; i < input.value.length; i++) {
        nieuweTekst += input.value.charAt(i) + " ";
    }
    console.log(nieuweTekst);
}
window.addEventListener("load", setup);