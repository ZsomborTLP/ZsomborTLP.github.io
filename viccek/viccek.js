var tomb=[
"Házsártos feleség mondja a férjének: Mennyivel jobban tettem volna, ha magához az ördöghöz mentem volna feleségül! Erre ne is gondolj! Közeli rokonok nem házasodhatnak!",
"- Mivel magyarázza - faggatja a válóperes ügyvéd a tárgyaláson a férjet -, hogy öt évig nem beszélgetett a feleségével? Nem akartam a szavába vágni.",
"- Mit kér a szőke nő a svédasztalnál? Tolmácsot.",
"Móricka, amikor elmentem itthonról, a hűtőszekrényben még két szelet torta volt, most viszont csak egy van. Hogyan lehetséges ez?kérdi morcosan az anyuka. Hát úgy, hogy a másikat nem vettem észre.",
"Vicc",
]
var kepek=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.png",
]
vicc()
function vicc(){
    //alert("Hello");
    var veletlen=Math.floor(Math.random() * tomb.length);
    console.log(veletlen);
    document.getElementById("vicchelye").innerHTML=tomb[veletlen];
    document.getElementById("vicckepe").src=kepek[veletlen];
}
