const setup = () => {
    let btnChange = document.getElementById("change");
    btnChange.addEventListener("click", veranderen);
}

const veranderen = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);