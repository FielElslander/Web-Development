const setup = () => {
    let btnSubstring=document.getElementById("Substring");
    btnSubstring.addEventListener("click", substring);
}
const substring = () => {
    let leftnumber = document.getElementById("txtleft");
    let rightnumber = document.getElementById("txtright");
    let input = document.getElementById("txtInput");
    let output = document.getElementById("txtOutput");
    output.innerHTML = input.value.substring(leftnumber.value,rightnumber.value);
}
window.addEventListener("load", setup);