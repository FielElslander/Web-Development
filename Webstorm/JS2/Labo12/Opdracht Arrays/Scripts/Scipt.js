const setup = () => {
    var namen = ['Fiel','Lara','Noor','Marino','Fanny'];
    console.log(namen.length);
    console.log(namen[0],namen[2],namen[4]);
    let input = prompt("Please enter a name","bruh")
    const voegNaamToe = (input) => {
        namen.push(input);
        console.log(input + " werd toegevoegd.");
    }
    voegNaamToe(input);
    console.log(namen.join(", "))
}
window.addEventListener("load", setup);