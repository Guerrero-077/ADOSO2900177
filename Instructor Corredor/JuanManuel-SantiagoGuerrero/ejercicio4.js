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

    saludar(){
        console.log(`Hola, me llamo ${this.#nombre} y tengo ${this.#edad} años`)
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,grado){
        super(nombre,edad);
        this.grado = grado;
    }

    estudiar(){
        console.log('Estoy estudiando')
    }
}

const persona1 = new Estudiante('Juan',18,10)

persona1.estudiar();
