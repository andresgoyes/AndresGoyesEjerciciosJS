let idGlobal = 2;
let notas = [
    {
        id: 1,
        titulo: 'Sacar basura',
        texto: 'Mi mamá me regaña si no lo hago',
        realizada: false
    },
    {
        id: 2,
        titulo: 'Organizar casa',
        texto: 'Mi esposa me regaña si no lo hago',
        realizada: false
    }
];

let contenedorNotas = document.getElementById('contenedor-notas');
let filtroTexto = document.getElementById('filtro-texto');
let filtroRealizadas = document.getElementById('filtro-realizadas');
let guardarNota = document.getElementById('guardar-nota');
let limpiarCampos = document.getElementById('limpiar-campos');
let tituloInput = document.getElementById('titulo-input');
let textoTextarea = document.getElementById('texto-textarea');

pintarNotas(notas, contenedorNotas);

function asignarEventListeners() {
    filtroTexto.addEventListener('input', aplicarFiltros);
    filtroRealizadas.addEventListener('change', aplicarFiltros);
    guardarNota.addEventListener('click', agregarNota);
    limpiarCampos.addEventListener('click', () => {
        tituloInput.value = '';
        textoTextarea.value = '';
    });
}

function pintarNotas(arregloAPintar, divPadre) {
    divPadre.innerHTML = '';

    if (arregloAPintar.length === 0) {
        divPadre.innerHTML = '<p class="empty-message">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    for (let i = 0; i < arregloAPintar.length; i++) {
        crearNota(divPadre, arregloAPintar[i]);
    }
    
}

function crearNota(divPadre, nota) {
    let nuevaNota = document.createElement('div');
    nuevaNota.classList.add('note');

    const tachado = nota.realizada ? 'line-through' : 'none';
    nuevaNota.innerHTML = `
        <div class="note-header">
            <input type="checkbox" onClick="marcarRealizada(${nota.id})" ${nota.realizada ? "checked" : ""}>
            <h3>${nota.titulo}</h3>
        </div>
        <p class="texto" style="text-decoration: ${tachado}">${nota.texto}</p>
        <button class="boton" onClick="borrarNota(${nota.id})">Borrar nota</button>
    `;

    divPadre.appendChild(nuevaNota);
}

function agregarNota() {
    const titulo = tituloInput.value;
    const texto = textoTextarea.value;

    if (titulo.trim() !== '' && texto.trim() !== '') {
        const nuevaNota = {
            id: ++idGlobal,
            titulo: titulo,
            texto: texto,
            realizada: false
        };

        notas.push(nuevaNota);
        pintarNotas(notas, contenedorNotas);

        tituloInput.value = '';
        textoTextarea.value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas(notas, contenedorNotas);
}

function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id);
    nota.realizada = !nota.realizada;
    pintarNotas(notas, contenedorNotas);
}

function filtrarPorTexto(arreglo, texto) {
    if (!texto) {
        return arreglo;
    }

    let textoLowerCase = texto.toLowerCase();
    return arreglo.filter(nota =>
        nota.titulo.toLowerCase().includes(textoLowerCase) ||
        nota.texto.toLowerCase().includes(textoLowerCase)
    );
}

function filtrarPorRealizadas(arreglo) {
    return arreglo.filter(nota => nota.realizada);
}

function aplicarFiltros() {
    let texto = filtroTexto.value;
    let realizadas = filtroRealizadas.checked;

    let notasFiltradas = notas;

    notasFiltradas = filtrarPorTexto(notasFiltradas, texto);

    if (realizadas) {
        notasFiltradas = filtrarPorRealizadas(notasFiltradas);
    }

    pintarNotas(notasFiltradas, contenedorNotas);
}

function iniciarAplicacion() {
    pintarNotas(notas, contenedorNotas);
    asignarEventListeners();
}

iniciarAplicacion();