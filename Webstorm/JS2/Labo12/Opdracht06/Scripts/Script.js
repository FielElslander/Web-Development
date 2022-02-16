const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");

    btnKopieer.addEventListener("click", kopieer);
}
const kopieer = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtinput = document.getElementById("txtInput");
    txtOutput.innerHTML=txtinput.value;
}
window.addEventListener("load", setup);