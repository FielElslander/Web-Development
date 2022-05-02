const setup = () => {
    let vandaag = new Date();
    let geboorte = new Date(2003,5, 4)

    let dagen = (vandaag - geboorte) / (1000 * 60 * 60 *24)

    console.log("Mijn geboorte is " + Math.floor(dagen) + " dagen geleden.");
}
window.addEventListener("load", setup);