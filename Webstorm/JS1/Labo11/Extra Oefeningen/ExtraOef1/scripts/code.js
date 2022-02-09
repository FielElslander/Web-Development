const optellen = () => {
    console.log("f");
    let txtOutput=document.getElementById("txtOutput");
    let txtLinks=document.getElementById("txtLinks");
    let txtRechts=document.getElementById("txtRechts");

    let g1=parseInt(txtLinks.value, 10);
    let g2=parseInt(txtRechts.value, 10);
    let resultaat = 0;

    if(g1 === g2){
        resultaat = (g1 + g2) * 3;
    }
    else{
        resultaat = (g1 + g2);
    }

    let resultaatTekst=g1+" + "+g2+" = "+resultaat;
    txtOutput.innerHTML=resultaatTekst;
}
const setup = () => {
    let btnOptellen=document.getElementById("btnOptellen");
    btnOptellen.addEventListener("click",optellen);
    console.log("f");
}
window.addEventListener("load", setup);