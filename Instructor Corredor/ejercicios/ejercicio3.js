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
const persona1 = new Persona('Juan',18)
persona1.saludar();

// CIpersona1.Nombre;

persona1.Nombre = 'jose'
persona1.Edad = 18

console.log(persona1.Nombre)
console.log(persona1.Edad)