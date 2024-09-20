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

class Biblioteca{
    libros = [];
    
    constructor(){
        this.libros = [];
    }
    agregarLibro(libro){
        this.libros.push(libro);
    }

    mostrarLibros(){
        this.libros.forEach((data) => {
            console.log(`titulo: ${data.titulo}`);
            console.log(`Autor: ${data.autor}`);
            console.log(`----------------------------------`);
        })
    }
}

//creamos un objeto de la clase libro
const libro1 = new Libro('El Tunel','Ernesto Sabato');
const libro2 = new Libro('Harry Potter','J. K. Rowling');
const libro3 = new Libro('Cian años de soledad','Gabriel García Márquez');

//creamos un objeto de la clase biblioteca
const biblioteca = new Biblioteca();

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

biblioteca.mostrarLibros();