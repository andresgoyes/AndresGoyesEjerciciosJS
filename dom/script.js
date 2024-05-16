let idGlobal = 2;
let notas = [
    {
        id: 1,
        titulo: 'sacar basura',
        texto: 'mi mama me regaña sino lo hago',
        realizada: false
    },
    {
        id: 2,
        titulo: 'organizar casa',
        texto: 'mi esposa me regaña sino lo hago',
        realizada: false
    }
];

function pintarNotas(notas) {
    let contenedor = document.getElementById('contenedor-notas');
    contenedor.innerHTML = '';

    if (notas.length === 0) {
        contenedor.innerHTML = '<p class="empty-message">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    notas.forEach(nota => {
        const tachado = nota.realizada ? 'line-through' : 'none';
        contenedor.innerHTML += `
            <div class="note">
                <div class="note-header">
                    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                    <h3>${nota.titulo}</h3>
                </div>
                <p class="texto" style="text-decoration: ${tachado}">${nota.texto}</p>
                <button onClick="borrarNota(${nota.id})">Borrar nota</button>
            </div>
        `;
    });
}

function agregarNota() {
    const tituloInput = document.getElementById('titulo-input');
    const textoTextarea = document.getElementById('texto-textarea');
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
        pintarNotas(notas);

        tituloInput.value = '';
        textoTextarea.value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas(notas);
}

function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id);
    nota.realizada = !nota.realizada;
    pintarNotas(notas);
}

function filtrarPorRealizadas(notas) {
    return notas.filter(nota => nota.realizada);
}

function filtrarPorTexto(notas, texto) {
    if (!texto) {
        return notas;
    }

    let textoLowerCase = texto.toLowerCase();
    return notas.filter(nota =>
        nota.titulo.toLowerCase().includes(textoLowerCase) ||
        nota.texto.toLowerCase().includes(textoLowerCase)
    );
}

function aplicarFiltros() {
    let filtroTexto = document.getElementById('filtro-texto').value;
    let filtroRealizadas = document.getElementById('filtro-realizadas').checked;

    let notasFiltradas = notas;

    notasFiltradas = filtrarPorTexto(notasFiltradas, filtroTexto);

    if (filtroRealizadas) {
        notasFiltradas = filtrarPorRealizadas(notasFiltradas);
    }

    pintarNotas(notasFiltradas);
}

document.getElementById('filtro-texto').addEventListener('input', aplicarFiltros);
document.getElementById('filtro-realizadas').addEventListener('change', aplicarFiltros);

document.getElementById('guardar-nota').addEventListener('click', agregarNota);
document.getElementById('limpiar-campos').addEventListener('click', () => {
    document.getElementById('titulo-input').value = '';
    document.getElementById('texto-textarea').value = '';
});

pintarNotas(notas);