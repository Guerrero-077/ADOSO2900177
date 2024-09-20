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
const persona1 = new Persona('Juan',18)

persona1.setNombre('Santiago')
persona1.setEdad(18)

console.log(persona1.getNombre())
console.log(persona1.getEdad())

console.log(persona1)