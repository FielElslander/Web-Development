const setup = () => {
    let btnBereken = document.getElementById("herbereken");
    btnBereken.addEventListener("click", herbereken)
}
const herbereken = () => {
    let prices = document.getElementsByClassName("prijs");
    let total = document.getElementById("total");
    let amount = document.getElementsByClassName("amount");
    let percentage = document.getElementsByClassName("percentages");
    let subtotals = document.getElementsByClassName("subtotaal");
    let totaleke = 0;

    for (let i = 0; i < 3; i++) {
        subtotals[i].value = parseInt(prices[i].textContent,10) * amount[i].value;
        subtotals[i].value += subtotals[i].value * (parseInt(percentage[i].textContent,10)/100);
        subtotals[i].innerHTML = subtotals[i].value + " Eur";
    }

    for (let i = 0; i < 3; i++) {
        totaleke += subtotals[i].value
    }
    total.innerHTML = totaleke + " Eur";
}
window.addEventListener("load", setup);