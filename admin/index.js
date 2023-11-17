document.addEventListener("DOMContentLoaded", async function() {
    const request = indexedDB.open('KinglyShadeDB', 1);

    request.onsuccess = (event) => {
        const db = event.target.result;

        // Abre la transacción en modo de solo 
        const transaction = db.transaction(['pregntasyrespuestas'], 'readonly');
        const objectStore = transaction.objectStore('pregntasyrespuestas');

        // Abre el cursor para recorrer los datos
        const cursorRequest = objectStore.openCursor();

        cursorRequest.onsuccess = (event) => {
            const cursor = event.target.result;

            if (cursor) {
                document.getElementById('historial').innerHTML +=
                    `<div class="division">
                    <p>author: ${cursor.value.author}</p>
                    <p>Pregunta: ${cursor.value.question}</p>
                     <p>Respuesta: ${cursor.value.text}</p>
                     </div>`;

                // Mueve el cursor al siguiente elemento
                cursor.continue();
            }
        };
    };

    request.onerror = (event) => {
        console.error('Error abriendo IndexedDB', event.target.error);
    };
});