const texto_gustavo_developer = "Gustavo Developer";
const texto_gustavo = "Gustavo";

const digitando = document.getElementById("digitando");
const nome = document.getElementById("gustavo");

const textoSobre = document.querySelector(".text");
const h2Sobre = document.querySelector(".h2-about-me");
const imagemSobre = document.querySelector(".img-about-me img");

let i = 0;
let j = 0;

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
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("aparecer");

            if (entry.target === nome) {
                digitarNome();
            }

        }

    });
}, { threshold: 0.9 });

observer.observe(nome);
observer.observe(textoSobre);
observer.observe(h2Sobre);
observer.observe(imagemSobre);