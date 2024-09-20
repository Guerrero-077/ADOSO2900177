class Persona {

    #nombre;
    #edad;

    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;    
    }
    
    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }

    setEdad(edad){
        this.#edad = edad;
    }
    getEdad(){
        return this.#edad;
    }

    describir(){
        console.log(`Soy ${this.#nombre} y tengo ${this.#edad} años`);
    }
}

class Estudiante extends Persona{

    constructor(nombre,edad,grado){
        super(nombre,edad);
        this.grado = grado;
    }

    estudiar(){
        console.log('Estoy estudiando');
    }
    describir(){
        console.log(`${this.getNombre()}, tengo ${this.getEdad()} estoy en ${this.grado} grado`);
    }
}

const persona1 = new Estudiante('Juan',28,10);
persona1.describir();


