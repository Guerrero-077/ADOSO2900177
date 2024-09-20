class Libro{
    
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    getTitulo(){
        this.titulo;
    }
    getAutor(){
        this.autor;
    }
}

const libro1 = new Libro('El Tunel','Ernesto Sabato');
console.log(libro1);