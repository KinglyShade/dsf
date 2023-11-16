class PLB {
    constructor() {
        this.palabrasClave = {
            'ciencia_ficcion': ['ciencia', 'ficcion', 'extraterrestres', 'tecnologia'],
            'historia': ['historia', 'pasado', 'antiguo', 'guerra'],
        };

        this.palabrasRecomendadas = ['recomiendo', 'recomendación', 'sugerencia'];
        this.saludos = ['hola', 'saludos', 'buenos días', 'buenas tardes', 'buenas noches', '¿cómo estás?', 'hey'];
        this.slr = ['Ah, hola...', 'Saludos...', 'Hola... supongo', 'No me molestes...', 'Estoy aquí, supongo...', 'No esperes que hable mucho...'];
        this.cnf = ['¿Qué se supone que debo decir?', 'Confuso..', 'Hmmm...¿qué?', 'No entiendo..', 'Explícate mejor...', 'No me hagas perder mi tiempo'];
        this.expresionesTimidas = ['No sé...', 'No suelo hablar mucho...', '¿Por qué me preguntas a mí?', 'No es de mi interés...'];
        this.expresionesFrias = ['No me importa...', 'No tengo emociones...', 'Habla de algo más interesante...', '¿Por qué debería preocuparme?'];
        this.respuestasPositivas = ['Interesante...', 'Hmm... sigue hablando.', 'Nunca lo hubiera pensado.', 'Continúa...', '¿Y eso qué tiene de especial?'];
        this.expresionesSorprendidas = ['Vaya...', 'Inesperado...', 'Nunca lo imaginé...', '¿En serio?', 'Eso es nuevo.'];
        this.expresionesDesinteresadas = ['No me interesa...', 'No veo por qué debería importarme.', 'Aburrido...', '¿Y eso a mí qué?', 'Irrelevante...'];
        this.expresionesConfundidas = ['No logro entender...', '¿Estás seguro de lo que dices?', 'Me dejas perplejo...', 'No cuadra...', '¿En qué mundo vives?'];
        this.respuestasNombre = [
            "No tengo nombre...",
            "¿Por qué debería tener un nombre?",
            "Los nombres son irrelevantes para mí...",
            "Puedes llamarme Kingly Shade, si eso te complace...",
            "No veo la necesidad de tener un nombre...",
          ];
        this.internetSearchAPI = {
            search: async (query) => {
                return await this.internetSearch(query);
            },
        };

        this.initIndexedDB();
    
    }

    initIndexedDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('PLBDB', 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                db.createObjectStore('responses', { keyPath: 'id', autoIncrement: true });
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve();
            };

            request.onerror = (event) => {
                console.error('Error abriendo IndexedDB', event.target.error);
                reject(event.target.error);
            };
        });
    }

    async buscarEnBaseDeDatos(query) {
        return new Promise((resolve) => {
            const transaction = this.db.transaction(['responses'], 'readonly');
            const objectStore = transaction.objectStore('responses');
            const request = objectStore.get(query);

            request.onsuccess = (event) => {
                const row = event.target.result;
                resolve(row ? row.text : null);
            };

            request.onerror = (event) => {
                console.error('Error leyendo de IndexedDB', event.target.error);
                resolve(null);
            };
        });
    }

    async guardarEnBaseDeDatos(query, result) {
        return new Promise((resolve) => {
            const transaction = this.db.transaction(['responses'], 'readwrite');
            const objectStore = transaction.objectStore('responses');
            const request = objectStore.add({ text: result });

            request.onsuccess = () => resolve();

            request.onerror = (event) => {
                console.error('Error escribiendo en IndexedDB', event.target.error);
                resolve();
            };
        });
    }

    async esPalabraRecomendada(palabra) {
        return this.palabrasRecomendadas.includes(palabra.toLowerCase());
    }

    async esSaludo(palabra) {
        return this.saludos.includes(palabra.toLowerCase());
    }
    async preguntan(p){
        const patron = /nombre.*cual.*tu|nombre.*tu.*cual|cual.*nombre.*tu|cual.*tu.*nombre|tu.*nombre.*cual|tu.*cual.*nombre/;
        if (patron.test(p)) {
            const rdm = Math.floor(Math.random() * this.respuestasNombre.length + 1)
 return this.respuestasNombre[rdm]

        }
    }

    async internetSearch(query) {
        try {
            // const response = await fetch(`https://search.brave.com/search?q=${encodeURIComponent(query)}`);
            // const data = await response.json();
            // const internetResult = data.results[0].snippet;
            // this.guardarEnBaseDeDatos(query, internetResult);
            // return internetResult;
                        return 'Lo siento, no pude realizar la búsqueda en Internet en este momento.';

        } catch (error) {
            console.error('Error en la búsqueda en Internet', error);
            return 'Lo siento, no pude realizar la búsqueda en Internet en este momento.';
        }
    }

    async tomarDecision(texto) {
        const saludoEncontrado = await this.esSaludo(texto);
    
        if (saludoEncontrado) {
            const rnd = Math.floor(Math.random() * this.slr.length);
            return this.slr[rnd];
        }
    
        const respuestaEnBaseDeDatos = await this.buscarEnBaseDeDatos(texto);
        if (respuestaEnBaseDeDatos) {
            return respuestaEnBaseDeDatos;
        }
    
        const pn = await this.preguntan(texto);
        if (pn) {
            return pn;
        }
    
        if (texto.includes('gracias')) {
            return 'De nada... supongo.';
        } else if (texto.includes('interesante') || texto.includes('curioso')) {
            const rnd = Math.floor(Math.random() * this.respuestasPositivas.length);
            return this.respuestasPositivas[rnd];
        } else if (texto.includes('sorprendeme') || texto.includes('cuéntame algo nuevo')) {
            const rnd = Math.floor(Math.random() * this.expresionesSorprendidas.length);
            return this.expresionesSorprendidas[rnd];
        } else if (texto.includes('aburrido') || texto.includes('sin emoción')) {
            const rnd = Math.floor(Math.random() * this.expresionesDesinteresadas.length);
            return this.expresionesDesinteresadas[rnd];
        } else if (texto.includes('confuso') || texto.includes('no entiendo')) {
            const rnd = Math.floor(Math.random() * this.expresionesConfundidas.length);
            return this.expresionesConfundidas[rnd];
        } else {
            // Guardar en la base de datos cuando no hay respuesta
            await this.guardarEnBaseDeDatos(texto, 'No tengo respuesta en este momento.');
            return `No tengo respuesta en este momento. ${this.expresionesTimidas[Math.floor(Math.random() * this.expresionesTimidas.length)]}`;
        }
    }
    }


export default PLB;
