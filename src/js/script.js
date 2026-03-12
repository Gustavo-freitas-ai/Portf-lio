const texto = "Gustavo Developer";
const elemento = document.getElementById("digitando");

let i = 0;

function digitar(){
    if(i < texto.length){
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 80);
    }
}

digitar();
