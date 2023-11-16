class PLB {
    constructor() {
        this.palabrasClave = {
            'ciencia_ficcion': ['ciencia', 'ficcion', 'extraterrestres', 'tecnologia'],
            'historia': ['historia', 'pasado', 'antiguo', 'guerra'],
            // Agregar más géneros y palabras clave según sea necesario
        };

        this.palabrasRecomendadas = ['recomiendo', 'recomendación', 'sugerencia'];
        this.saludos = ['hola', 'saludos', 'buenos días', 'buenas tardes', 'buenas noches'];
        this.slr = ['Ah, hola...','Saludos...','Hola... supongo','No me molestes...','Estoy aquí, supongo...','No esperes que hable mucho...']
        this.cnf = ['¿Qué se supone que debo decir?','Confuso..','Hmmm...¿que?','No entiendo..','Explicate mejor...','No me hagas perder mi tiempo']
    }

    async esPalabraRecomendada(palabra) {
        return this.palabrasRecomendadas.includes(palabra.toLowerCase());
    }

    async esSaludo(palabra) {
        return this.saludos.includes(palabra.toLowerCase());
    }

    async analizarTexto(texto) {
        const palabras = texto.split(/\s+/);
        const palabrasLowerCase = palabras.map(palabra => palabra.toLowerCase());

        const generosEncontrados = Object.keys(this.palabrasClave).filter(genero =>
            palabrasLowerCase.some(palabra => this.palabrasClave[genero].includes(palabra))
        );

        const importantes = palabras.filter(palabra =>
            generosEncontrados.some(genero => this.palabrasClave[genero].includes(palabra))
        );

        const largas = palabras.filter(palabra => palabra.length > 5);
        const recomendadas = palabras.filter(palabra => this.esPalabraRecomendada(palabra));

        return {
            generosEncontrados,
            importantes,
            largas,
            recomendadas
        };
    }

    async tomarDecision(texto) {
        const resultados = await this.analizarTexto(texto);
        const saludoEncontrado = this.esSaludo(texto);


        if (saludoEncontrado) {
           const rnd = Math.floor(Math.random() * this.slr.length + 1)
           return this.slr[rnd]
        }

        if (resultados.generosEncontrados.length > 0) {
            const generos = resultados.generosEncontrados.join(', ');
            return `Este texto parece estar relacionado con los géneros: ${generos}.`;
        }
 const rdm = Math.floor(Math.random() * this.cnf.length + 1);
        return this.cnf[rdm];
    }
}

export default PLB;
