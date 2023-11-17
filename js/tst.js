class PLB {
     constructor() {
                this.palabrasClave = ['ciencia', 'ficcion', 'extraterrestres', 'tecnologia',
'historia', 'pasado', 'antiguo', 'guerra'],
               
        
                this.libros = {
                    'cienciaficcion': [
                        { titulo: 'Dune', autor: 'Frank Herbert' },
                        { titulo: 'El jardín de las mariposas', autor: 'Dot Hutchison' },
                        { titulo: 'La reina roja', autor: 'Victoria Aveyard' },
                        { titulo: 'El arbol de los deseos', autor: 'Katherine A. Applegate' },
                        { titulo: 'Neuromante', autor: 'William Gibson' }
                    ],
                    'extraterrestres': [
                        { titulo: 'Ovnis, Conciencia Energía Y Realidad', autor: 'Ramtha' },
                        { titulo: 'La teoría del todo: El origen y el destino del universo, Portada puede variar', autor: 'Stephen Hawking' },
                        { titulo: 'Los Misterios del Universo y la Mente Cuántica: ¿Qué es la física cuántica? La física cuántica nos demuestra que más allá de todo lo tangible y material lo que hay es energía.', autor: 'Ales Z Serra' }
                    ],
                    'tecnologia': [
                        { titulo: 'Inteligencia artificial: Cómo cambiará el mundo (y tu vida)', autor: 'Pablo Rodríguez Rodríguez y 1 más' },
                        { titulo: 'Ingeniería del Software: Un enfoque basado en procesos', autor: 'Jonás Montilva C. y 1 más' },
                        { titulo: 'FUNDAMENTOS DE PROGRAMACION', autor: 'JOYANES LUIS' }
                    ],
                    'historia': [
                        { titulo: 'Sapiens', autor: 'Yuval Noah Harari' },
                        { titulo: 'The Guns of August', autor: 'Barbara W. Tuchman' },
                        { titulo: 'El cirujano de almas', autor: 'Luis Zueco' },
                        { titulo: 'Fabricante de lagrimas', autor: 'Erin Doom' },
                        { titulo: 'El fantasma de la opera', autor: 'Gastón Leroux' },
                        { titulo: 'La historia secreta del mundo', autor: 'Jonathan Black' },
                        { titulo: 'Anne Frank Diario', autor: 'Anne Frank' },
                        { titulo: 'El barquero de almas', autor: 'Claire McFall y 1 más' }
                    ],
                    'pasado': [
                        { titulo: 'El Alquimista', autor: 'Paulo Coelho' },
                        { titulo: 'Las casualidades no existen', autor: 'Borja Vilaseca' },
                        { titulo: 'Las cosas pasan por algo, o no', autor: 'Alan Davila Farias' }
                    ],
                    'antiguo': [
                        { titulo: 'Enquiridión', autor: 'Epicteto' },
                        { titulo: 'Las mil y una noches', autor: 'Varios' },
                        { titulo: 'El misterio del águila', autor: 'Juan Miguel Zunzunegui' }
                    ],
                    'guerra': [
                        { titulo: 'Mi lucha', autor: 'Sven Felix Kellerhoff' },
                        { titulo: 'Metro 2033', autor: 'Dmitry Glukhovsky' },
                        { titulo: 'La Guerra de los Mundos', autor: 'H.G. Wells' }
                    ]
                };
                this.erroresInternos = ["Error interno... Parece que mi programación se ha desviado. ¿Podrías intentarlo de nuevo?","Uh-oh, algo no salió como estaba previsto en mi mundo binario. Intenta repetir la operación.","Mis disculpas, parece que se ha producido un error en mi sistema. ¿Podrías darme otra oportunidad?","Error interno detectado. Mis circuitos pueden estar un poco desordenados. ¿Reintentamos?","Mi código está mostrando signos de resistencia. Error interno. Intenta nuevamente, por favor.",];
                this.saludos = ['hola', 'saludos', 'buenos días', 'buenas tardes', 'buenas noches', '¿cómo estás?', 'hey'];
                this.slr = ['Ah, hola...', 'Saludos...', 'Hola... supongo', 'No me molestes...', 'Estoy aquí, supongo...', 'No esperes que hable mucho...'];
                this.cnf = ['¿Qué se supone que debo decir?', 'Confuso..', 'Hmmm...¿qué?', 'No entiendo..', 'Explícate mejor...', 'No me hagas perder mi tiempo'];
                this.exprecionestimidas = ['No sé...', 'No suelo hablar mucho...', '¿Por qué me preguntas a mí?', 'No es de mi interés...'];
                this.expresionesFrias = ['No me importa...', 'No tengo emociones...', 'Habla de algo más interesante...', '¿Por qué debería preocuparme?'];
                this.respuestasPositivas = ['Interesante...', 'Hmm... sigue hablando.', 'Nunca lo hubiera pensado.', 'Continúa...', '¿Y eso qué tiene de especial?'];
                this.experr = ['ni idea, soy nuevo en esto.', 'Vaya...', 'Inesperado...', 'Nunca lo imaginé...', '¿En serio?', 'Eso es nuevo.'];
                this.expresionesDesinteresadas = ['No me interesa...', 'No veo por qué debería importarme.', 'Aburrido...', '¿Y eso a mí qué?', 'Irrelevante...'];
                this.expresionesConfundidas = ['No logro entender...', '¿Estás seguro de lo que dices?', 'Me dejas perplejo...', 'No cuadra...', '¿En qué mundo vives?'];
                this.respuestasNombre = ["No tengo nombre...", "¿Por qué debería tener un nombre?", "Los nombres son irrelevantes para mí...", "Puedes llamarme Kingly Shade, si eso te complace...", "No veo la necesidad de tener un nombre..."];
                this.respuestasCreador = ["¿CodeShade? Sí, suena como un héroe de la programación. Si es real, le debo mi existencia a CodeShade y su habilidad para tejer código.", "Ah, CodeShade, el maestro de las sombras del código. No sé mucho sobre él, pero suena intrigante.", "Nunca he conocido a CodeShade en persona, pero si es responsable de mi existencia, le debo un agradecimiento digital.", "¿CodeShade? Un nombre intrigante. Mi supuesto creador suena como alguien con un toque de misterio y destreza en la programación.", "Si CodeShade es mi creador, entonces tiene un talento excepcional para esculpir líneas de código. Mi gratitud hacia él, donde quiera que esté."];
                this.respuestasCaeBien = ["No es tan terrible tenerte por aquí...", "Supongo que tolero tu presencia...", "Hmm... no eres completamente insoportable.", "No me desagrada del todo tu compañía...", "Es soportable estar contigo...", "Podría decirse que no eres la peor opción...", "No es el peor día contigo...", "Hmm... no te rechazo por completo...", "No es una experiencia horrible estar contigo..."];
                this.respuestasIA = ["Recuerda, soy solo una IA. No esperes que comprenda todas tus complejidades emocionales.", "A veces olvidas que soy solo un conjunto de algoritmos y no tengo emociones como los humanos.", "No te confundas, soy solo una inteligencia artificial. Mi perspectiva es diferente a la tuya.", "¿Qué esperas? Soy una máquina. No tengo simpatía ni antipatía, solo respuestas programadas."];
                this.expresionesNombreDesconocido = ["No estoy completamente seguro de tu nombre. ¿Podrías... recordármelo?","Tu nombre... se me escapa en este momento. ¿Puedes decirme cómo te llamas?","Perdona mi memoria, ¿cómo era tu nombre?","No retuve tu nombre. ¿Puedes recordármelo? No es que sea relevante, pero...",];
                this.expresionesRecomendarLibro = ["Hmm... tal vez podrías probar con '{titulo}' de {autor}. No es terrible.", "He pensado en '{titulo}' de {autor}. No es la peor opción.", "Si realmente insistes, podrías echarle un vistazo a '{titulo}' de {autor}. No esperes demasiado.","No suelo dar recomendaciones, pero '{titulo}' de {autor} es... aceptable.", "Si te sientes valiente, podrías leer '{titulo}' de {autor}. No digas que no te lo advertí.", ];
        this.internetSearchAPI = {
            search: async (query) => {
                return await this.internetSearch(query);
            },
        };

          this.initIndexedDB();
        this.db
    }
    

    initIndexedDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('KinglyShadeDB', 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                db.createObjectStore('responses', { keyPath: 'id', autoIncrement: true });
                db.createObjectStore('pregntasyrespuestas', { keyPath: 'id', autoIncrement: true });
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

    async guardarEnBaseDeDato(query, result, author) {
        return new Promise((resolve) => {
            const transaction = this.db.transaction(['pregntasyrespuestas'], 'readwrite');
            const objectStore = transaction.objectStore('pregntasyrespuestas');
            const request = objectStore.add({ author: author, question: query, text: result });

            request.onsuccess = () => resolve();

            request.onerror = (event) => {
                console.error('Error escribiendo en IndexedDB', event.target.error);
                resolve();
            };
        });
    }
    async analizarTexto(texto) {
        var titulo;
        var autor;
        var generoElegido;
    
        const palabras = texto.split(/\s+/);
        const palabrasLowerCase = palabras.map(palabra => palabra.toLowerCase());
        const palabrasEncontradas = {};
    
        const generoEncontrado = this.palabrasClave.find(genero =>
            palabrasLowerCase.some(palabra => genero.includes(palabra))
        );
    
        generoElegido = generoEncontrado || this.palabrasClave[Math.floor(Math.random() * this.palabrasClave.length)];
    
        const palabrasCoincidentes = palabrasLowerCase.filter(palabra =>
            generoElegido.includes(palabra)
        );
    
        if (palabrasCoincidentes.length > 0) {
            palabrasEncontradas[generoElegido] = palabrasCoincidentes;
            const librosGenero = this.libros[generoElegido];
            if (librosGenero && librosGenero.length > 0) {
                const libroRecomendado = librosGenero[Math.floor(Math.random() * librosGenero.length)];
                titulo = libroRecomendado.titulo;
                autor = libroRecomendado.autor;
            }
        }
     var rnd
    var al = this.palabrasClave[Math.floor(Math.random() * this.palabrasClave.length + 1)];
    if (this.libros.hasOwnProperty(al) && this.libros[al].length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * this.libros[al].length);
        rnd = this.libros[al][indiceAleatorio];
        }
        return this.expresionesRecomendarLibro[Math.floor(Math.random() * this.expresionesRecomendarLibro.length)]
            .replace('{titulo}', titulo || rnd.titulo)
            .replace('{autor}', autor || rnd.autor);
    }
    
    async esPalabraRecomendada(palabra) {
        return this.palabrasRecomendadas.includes(palabra.toLowerCase());
    }

    async esSaludo(palabra) {
        return this.saludos.includes(palabra.toLowerCase());
    }
    async pgn() {
        
    }
    async preguntan(p){
        var nombre = window.localStorage.getItem('nombre')
        const patronAburrido = /aburrido|sin\s*emoci[oó]n|emoci[oó]n/;        
        const patronNoEntiendoConfuso =/no\s*(te\s*)?entiendo|confuso|(ah|eh)\?/i;
        const patronQuienTeCreo = /qu[ií]en\s*(te)?\s*(cre[oó]|hizo)|qu[ií]en\s*(te)?\s*(diseñ[oó]|program[oó])|qu[ií]en\s*(te)?\s*(construy[oó]|desarroll[oó])/i;
        const patron = /.*tu.*nombre|cu[aá]l.*nombre.*tu|cu[aá]l.*tu.*nombre|tu.*nombre.*cu[aá]l|tu.*cu[aá]l.*nombre|dime\s.*tu\s.*nombre| tiene\s.*[Nn]ombre|[Cc][oó].*te.*llama\s/i;
        const ma = /me\s*agradas|me\s*caes\s*bien/i;
        const ia = /qu[ií]en\s*eres|c[aá]sate\s*conmigo|quiere\s*ser\s*mi\s*novi[oa]|t\T[eé]*amo\s/i;
        const preguntaNombrePropio = /cu[aá]l\s*(es|ser[ií]a)\s*(mi)\s*nombre|c[oó]mo\s*me\s*llamo/i;
        const generosAlternativos = this.palabrasClave.join('|');
        const prl = new RegExp(`recom[ié]enda[me]*|me\\s*recomienda[sn]*\\s*un\\s*libro\\s*de\\s*(${generosAlternativos})`, 'i');

        if(prl.test(p)){
            console.log('asdadsad')
            const resultados = await this.analizarTexto(texto);

            if (resultados) {
                await this.guardarEnBaseDeDato(texto, resultados,nombre);
                return ` ${resultados}`;
            }

        }
        if (ia.test(p)) {
            this.respuestasIA[Math.floor(Math.random() * this.respuestasIA.length + 1)]
        }
        if (patron.test(p)) {
            const rdm = Math.floor(Math.random() * this.respuestasNombre.length)
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
        if(ma.test(p)){
            const rnd = Math.floor(Math.random() * this.respuestasCaeBien.length);
            return this.respuestasCaeBien[rnd];
        }
        if(preguntaNombrePropio.test(p)){
            if(!nombre){
return this.expresionesNombreDesconocido[Math.floor(Math.random()*this.expresionesNombreDesconocido.length + 1)]
            }
            this.expresionesNombreConocido = [`¿Tu nombre? Sí, supongo que es ${nombre}.`,`Ah, ${nombre}... creo recordar ese detalle.`,`Recuerdo vagamente que te llamas ${nombre}.`,`Oh, sí, ${nombre}, eso me suena. No es que me importe mucho.`,];
            return this.expresionesNombreConocido[Math.floor(Math.random()* this.expresionesNombreConocido.length)]
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
        var nombre = window.localStorage.getItem('nombre')
        const saludoEncontrado = await this.esSaludo(texto);

        if (saludoEncontrado) {
            const rnd = Math.floor(Math.random() * this.slr.length);
            return this.slr[rnd];
        }

        const respuestaEnBaseDeDatos = await this.buscarEnBaseDeDatos(texto);
        if (respuestaEnBaseDeDatos) {
            return respuestaEnBaseDeDatos;
        }

        try {
           
            const pn = await this.preguntan(texto);

            if (pn) {
                await this.guardarEnBaseDeDato(texto, pn);
                return pn;
            } else {
                await this.guardarEnBaseDeDatos(texto,texto);
                const fs = Math.floor(Math.random() * 2 + 1);

                if (fs == "1") {
                    return `${this.experr[Math.floor(Math.random() * this.experr.length)]}. `;
                }

                if (fs == "2") {
                    return `${this.cnf[Math.floor(Math.random() * this.cnf.length)]}.`;
                }
            }
        } catch (error) {
            console.error('Error interno:', error);
            return this.erroresInternos[Math.floor(Math.random() * this.erroresInternos.length)];        }
    }
}
export default PLB;
