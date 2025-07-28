// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const nombres = [];

function agregarAmigo() {
    const nombre = document.getElementById("amigo").value;

    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("El nombre ya está en la lista.");
        return;
    }

    nombres.push(nombre);

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
    }

    document.getElementById("amigo").value = ""; 
}

function sortearAmigo(){
    if (nombres.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const aleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSorteado = nombres[aleatorio];

    document.getElementById("resultado").innerHTML = "El amigo sorteado es : " + amigoSorteado;
}