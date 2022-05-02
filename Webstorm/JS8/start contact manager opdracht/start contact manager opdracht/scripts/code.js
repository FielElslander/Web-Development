let personen = [{
    voornaam: 'Jan',
    familienaam: 'Janssens',
    geboorteDatum: new Date('2010-10-10'),
    email: 'jan@example.com',
    aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }];

const addStandard = () => {
    let list = document.getElementById("lstPersonen");
    for(let i = 0; i < personen.length; i++){
        let persoon = personen[i];
        let optie = new Option(persoon.voornaam + " " + persoon.familienaam);
        optie.dataset.index = i;
        optie.addEventListener("click",showData);
        list.appendChild(optie);
    }
}
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    let fout = document.getElementsByClassName("invalid");
    if(fout.length === 0){
        personen.push({
            voornaam : document.getElementById("txtVoornaam").value,
            familienaam : document.getElementById("txtFamilienaam").value,
            geboortedatum : new Date(document.getElementById("txtGeboorteDatum").value),
            email : document.getElementById("txtEmail").value,
            aantalKinderen : document.getElementById("txtAantalKinderen").value
        })
    }

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    let lstpersonen = document.getElementById("lstPersonen");
    let nieuweoption = document.createElement("option");
    nieuweoption.dataset.index = personen.length-1;
    let persoon = personen[personen.length-1];
    let textnode = document.createTextNode(persoon.voornaam + " " + persoon.familienaam);
    nieuweoption.appendChild(textnode);
    lstpersonen.appendChild(nieuweoption);
    nieuweoption.addEventListener("click",showData);
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

    let voornaam = document.getElementById("txtVoornaam");
    let achternaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalkinderen = document.getElementById("txtAantalKinderen");
    voornaam.value = '';
    achternaam.value = '';
    geboortedatum.value = '';
    email.value = '';
    aantalkinderen.value = '';
};

const showData = () => {
    let list = document.getElementById("lstPersonen");
    let persoon = personen[list.selectedIndex];

    let voornaam = persoon.voornaam;
    let achternaam = persoon.familienaam;
    let geboortedatum = persoon.geboorteDatum;
    let email = persoon.email;
    let aantalkinderen = persoon.aantalKinderen;

    document.getElementById("txtVoornaam").value = voornaam;
    document.getElementById("txtFamilienaam").value = achternaam;
    try {
        document.getElementById('txtGeboorteDatum').value = formatDate(geboortedatum);
    } catch (e) {
        document.getElementById('txtGeboorteDatum').value = geboortedatum;
    }
    document.getElementById("txtEmail").value = email;
    document.getElementById("txtAantalKinderen").value = aantalkinderen;
}

const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if(month.length < 2){
        day = '0' + day;
    }
    if(day.length < 2){
        day = '0' + day;
    }
    return [year,month,day].join('-');
}

// onze setup functie die de event listeners registreert
const setup = () => {
    addStandard();
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);


    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);