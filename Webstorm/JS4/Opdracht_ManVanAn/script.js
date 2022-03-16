const setup = () => {
    AantalKeerAn("De man van An geeft geen hand aan ambetante verwanten");
}
const AantalKeerAn = (tekst) => {
    let zin = tekst.toLowerCase();
    let count = 0;
    let found = true;
    while(found == true){
        if(zin.indexOf("an") !== -1){
            count++;
            zin = zin.substring(zin.indexOf("an")+2,zin.length);
        }
        else{
            found = false;
        }
    }
    console.log("An kwam " + count + " keer voor.");
}
window.addEventListener("load", setup);