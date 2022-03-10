const setup = () => {
    let txtBelangrijk = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < txtBelangrijk.length; i++) {
        txtBelangrijk[i].className = "opvallend belangrijk";
    }
}
window.addEventListener("load", setup);