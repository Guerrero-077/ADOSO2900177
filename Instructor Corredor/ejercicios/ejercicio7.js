class Biblioteca{
    
    constructor(tituloP,autorP){
        this.titulo = tituloP
        this.autor = autorP

        this.libro = []
    }
    agregarLibro(){
        this.libro.push({titulo: this.titulo, autor: this.autor})
        // return this.libro;
    }


    mostrarLibros(){
        return this.libro;
    }


}
libro1 = new Biblioteca('El Tunel','Ernesto Sabato')
libro2 = new Biblioteca('Harry Potter','J. K. Rowling')
libro3 = new Biblioteca('Cian años de soledad','Gabriel García Márquez')

libro1.agregarLibro()
libro2.agregarLibro()
libro3.agregarLibro()

console.log(libro1.mostrarLibros())
console.log(libro2.mostrarLibros())
console.log(libro3.mostrarLibros())

