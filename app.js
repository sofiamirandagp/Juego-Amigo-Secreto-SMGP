let amigos= [];
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value; // lee el nombre
    if (nombre.trim() === ''){ // valida si está vacío
        alert ('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(nombre)){// si ya está repetido
        alert ('Este nombre ya está en la lista.');
        return;
    }

    if (nombre.length < 2){// El nombre debe de tener más de dos letras
        alert ('El nombre debe tener al menos 2 caracteres.');
        return;
    }

    if (/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre)) { // Solo puede tener letras de la a-z mayúsculas y minúsculas, con acentos, también esapcios en blanco
        
    } else {
        alert('El nombre solo puede contener letras y espacios.');
        return;
    }
    
    amigos.push(nombre);
    document.getElementById('amigo').value= '';// limpia el campo de entrada
    actualizarListaAmigos();
    console.log(amigos);

}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos'); // Obtener el elemento de la lista
    lista.innerHTML = ''; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) { // recorre cada elemento del array
        let li = document.createElement('li'); // Crear un nuevo elemento de lista li
        li.textContent = amigos[i];// Coloca el nombre del amigo dentro de la lista
        lista.appendChild(li);  // Agregar el elemento a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Validar que haya amigos disponibles para hacer el sorteo
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Nombre sorteado

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `${amigoSorteado} es el amigo secreto.`; // Mostrar el resultado

    //Limpia todo
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = '';
}

//NUEVOS MÉTODOS USADOS: appendChild(), trim() y test().