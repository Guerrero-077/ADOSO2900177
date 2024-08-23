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
persona1.saludar();
persona1.estudiar();

// CIpersona1.Nombre;
