let button = document.querySelector(".btn");
let colors = ["blue", "red"];
let resultat = beregnForhold(4, 3);
let resultat2 = beregnForhold2(4, 0);

button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.style.backgroundColor = button.classList.contains("active") ? colors[1] : colors[0];
});


function beregnForhold(a, b) {
    return a / b;
}
console.log(resultat.toFixed(4));


function beregnForhold2(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}
console.log(resultat2);



function skjulElementViaCssSelector(cssSelector) {
    let element = document.querySelector(cssSelector);
    if (element) {
        element.style.display = 'none';
    }
}

 // Skjul knappen i .produkt
//  skjulElementViaCssSelector("#køb-knap");

 // Skjul billedet i .profil
//  skjulElementViaCssSelector(".profil img");
