const setup = () => {
    let student1 ={
        voornaam: "Fiel",
        familienaam: "Elslander",
        geboortedatum: new Date("2003-06-04")
    }
    let text = JSON.stringify(student1)
    console.log(text)

    let student2 = JSON.parse('{"voornaam":"Fiel","familienaam":"Elslander","geboortedatum":"2003-06-04T00:00:00.000Z"}');
    console.log("voornaam: " + student2.voornaam)
    console.log(" ");
    console.log("Welk formaat wordt er eigenlijk gebruikt om het Date object?");
    console.log("YYYY-MM-DDTHH:mm:ss:sssZ")
    console.log(" ");
    console.log("Wat gebeurt er als eenzelfde object meermaals voorkomt bij het opbouwen van een json tekst?");
    console.log("Hij gaat het overschrijven.")
}
window.addEventListener("load", setup);