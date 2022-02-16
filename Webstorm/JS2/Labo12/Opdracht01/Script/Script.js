const setup = () => {
    let alert = window.alert("Dit is een mededeling");
    let confirm = window.confirm("weet je dit zeker?");
    let prompt = window.prompt("wat is uw naam","onbekend");

    console.log(alert);
    console.log(confirm);
    console.log(prompt);
}
window.addEventListener("load", setup);