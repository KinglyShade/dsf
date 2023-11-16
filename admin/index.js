// Importa la clase PLB
import PLB from './ruta-a-tu-archivo-de-plb';

// Crea una instancia de la clase PLB
const plbInstance = new PLB();

// Función para cargar y mostrar todas las preguntas sin respuesta
async function mostrarPreguntasSinRespuesta() {
    const preguntasSinRespuesta = await obtenerPreguntasSinRespuesta();

    // Muestra las preguntas en la página
    mostrarListaDePreguntas(preguntasSinRespuesta);
}

// Función para obtener todas las preguntas sin respuesta de la base de datos
async function obtenerPreguntasSinRespuesta() {
    const transaction = plbInstance.db.transaction(['responses'], 'readonly');
    const objectStore = transaction.objectStore('responses');
    const todasLasPreguntas = await objectStore.getAllKeys();

    const preguntasSinRespuesta = await Promise.all(todasLasPreguntas.map(async (pregunta) => {
        const respuesta = await plbInstance.buscarEnBaseDeDatos(pregunta);
        return { pregunta, respuesta };
    }));

    // Filtra solo las preguntas sin respuesta
    return preguntasSinRespuesta.filter(item => !item.respuesta);
}

// Función para mostrar una lista de preguntas en la página
function mostrarListaDePreguntas(preguntas) {
    const listaPreguntasContainer = document.getElementById('lista-preguntas-container');

    if (preguntas.length > 0) {
        listaPreguntasContainer.innerHTML = '<h2>Preguntas sin Respuesta:</h2><ul id="lista-preguntas"></ul>';

        const listaPreguntas = document.getElementById('lista-preguntas');

        preguntas.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.pregunta;
            
            const inputRespuesta = document.createElement('input');
            inputRespuesta.type = 'text';
            inputRespuesta.placeholder = 'Ingrese la respuesta...';

            const btnAsignarRespuesta = document.createElement('button');
            btnAsignarRespuesta.textContent = 'Asignar Respuesta';
            btnAsignarRespuesta.onclick = async () => {
                await asignarRespuesta(item.pregunta, inputRespuesta.value);
                mostrarPreguntasSinRespuesta();
            };

            listItem.appendChild(inputRespuesta);
            listItem.appendChild(btnAsignarRespuesta);
            listaPreguntas.appendChild(listItem);
        });
    } else {
        listaPreguntasContainer.innerHTML = '<p>No hay preguntas sin respuesta en la base de datos.</p>';
    }
}

// Función para asignar una respuesta a una pregunta en la base de datos
async function asignarRespuesta(pregunta, respuesta) {
    await plbInstance.guardarEnBaseDeDatos(pregunta, respuesta);
}

// Llama a la función para mostrar todas las preguntas sin respuesta al cargar la página
mostrarPreguntasSinRespuesta();
