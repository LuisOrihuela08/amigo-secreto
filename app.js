// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo === "") {
        alert("Por favor, inserte un nombre.")
    }

    amigos.push(amigo);
    document.getElementById("amigo").value = "";

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos = [];

}
