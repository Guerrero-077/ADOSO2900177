class Persona {

    #nombre;
    #edad;

    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;    
    }
    
    set Nombre(nombre){
        this.#nombre = nombre;
    }
    get Nombre(){
        return this.#nombre;
    }

    set Edad(edad){
        this.#edad = edad;
    }
    get Edad(){
        return this.#edad;
    }

    describir(){
        return `Soy ${this.#nombre} y tengo ${this.#edad} años`
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
    describir(){
        return `${super.describir()}, estoy en ${this.grado} grado`;
    }
    
}

const persona1 = new Estudiante('Juan',18,10)

console.log(persona1.describir());

