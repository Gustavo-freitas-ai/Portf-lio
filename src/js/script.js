const texto_gustavo_developer = "Gustavo Developer";
const texto_gustavo = "Gustavo";

const digitando = document.getElementById("digitando");
const nome = document.getElementById("gustavo");

const textoSobre = document.querySelector(".text");
const h2Sobre = document.querySelector(".h2-about-me");
const h2Knowledge = document.querySelector(".h2-knowledge");
const imagemSobre = document.querySelector(".img-about-me img");
const cards = document.querySelectorAll(".card-knowledge");

let i = 0;
let j = 0;
let nomeJaDigitado = false;

function digitarTitulo() {
    if (i < texto_gustavo_developer.length) {
        digitando.innerHTML += texto_gustavo_developer.charAt(i);
        i++;
        setTimeout(digitarTitulo, 80);
    }
}

digitarTitulo();


function digitarNome() {
    if (j < texto_gustavo.length) {
        nome.innerHTML += texto_gustavo.charAt(j);
        j++;
        setTimeout(digitarNome, 150);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("aparecer");

            if (entry.target === textoSobre && !nomeJaDigitado) {
                digitarNome();
                nomeJaDigitado = true;
            }

        }

    });
}, { threshold: 0.6 });


observer.observe(textoSobre);
observer.observe(h2Sobre);
observer.observe(imagemSobre);
observer.observe(h2Knowledge);

cards.forEach((card, index) => {
    observer.observe(card);
    card.style.transitionDelay = `${index * 0.2}s`;
});