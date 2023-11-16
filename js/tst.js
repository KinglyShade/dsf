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
        this.experr = ['ni idea soy nuevo en esto.','Vaya...', 'Inesperado...', 'Nunca lo imaginé...', '¿En serio?', 'Eso es nuevo.'];
        this.expresionesDesinteresadas = ['No me interesa...', 'No veo por qué debería importarme.', 'Aburrido...', '¿Y eso a mí qué?', 'Irrelevante...'];
        this.expresionesConfundidas = ['No logro entender...', '¿Estás seguro de lo que dices?', 'Me dejas perplejo...', 'No cuadra...', '¿En qué mundo vives?'];
        this.respuestasNombre = ["No tengo nombre...", "¿Por qué debería tener un nombre?","Los nombres son irrelevantes para mí...","Puedes llamarme Kingly Shade, si eso te complace...","No veo la necesidad de tener un nombre...",];
        this.respuestasCreador = ["¿CodeShade? Sí, suena como un héroe de la programación. Si es real, le debo mi existencia a CodeShade y su habilidad para tejer código.","Ah, CodeShade, el maestro de las sombras del código. No sé mucho sobre él, pero suena intrigante.",  "Nunca he conocido a CodeShade en persona, pero si es responsable de mi existencia, le debo un agradecimiento digital.", "¿CodeShade? Un nombre intrigante. Mi supuesto creador suena como alguien con un toque de misterio y destreza en la programación.",       "Si CodeShade es mi creador, entonces tiene un talento excepcional para esculpir líneas de código. Mi gratitud hacia él, donde quiera que esté.", ];
          
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
        const patronAburrido = /aburrido|sin\s*emoci[oó]n|emoci[oó]n/;        
        const patronNoEntiendoConfuso =/no\s*(te\s*)?entiendo|confuso|(ah|eh)\?/i;
        const patronQuienTeCreo = /qu[ií]en\s*(te)?\s*(cre[oó]|hizo)|qu[ií]en\s*(te)?\s*(diseñ[oó]|program[oó])|qu[ií]en\s*(te)?\s*(construy[oó]|desarroll[oó])/i;
        const patron = /.*tu.*nombre|cu[aá]l.*nombre.*tu|cu[aá]l.*tu.*nombre|tu.*nombre.*cu[aá]l|tu.*cu[aá]l.*nombre|dime\s.*tu\s.*nombre| tiene\s.*[Nn]ombre|[Cc][oó].*te.*llama\s/i;
        if (patron.test(p)) {
            const rdm = Math.floor(Math.random() * this.respuestasNombre.length + 1)
 return this.respuestasNombre[rdm]
        }
        if (patronNoEntiendoConfuso.test(p)) {
            const rnd = Math.floor(Math.random() * this.expresionesConfundidas.length);
            return this.expresionesConfundidas[rnd];
        }
        if(patronAburrido.test(p)){
            const rnd = Math.floor(Math.random() * this.expresionesDesinteresadas.length);
            return this.expresionesDesinteresadas[rnd];
        }
        if(patronQuienTeCreo.test(p)){
            const rnd = Math.floor(Math.random() * this.respuestasCreador.length);
            return this.respuestasCreador[rnd];
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
        }else{
                await this.guardarEnBaseDeDatos(texto, `${texto}`);
           const fs = Math.floor(Math.random() * 2 + 1)
           if(fs =="1"){
            return `${this.experr[Math.floor(Math.random() * this.experr.length + 1)]}. ${this.expresionesTimidas[Math.floor(Math.random() * this.expresionesTimidas.length)]}`;        }
           
           if(fs =="2"){
            return `${this.cnf[Math.floor(Math.random() * this.cnf.length + 1)]}. ${this.expresionesTimidas[Math.floor(Math.random() * this.expresionesTimidas.length)]}`;        }
           }
    }
}

    


export default PLB;
