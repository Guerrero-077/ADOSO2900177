class Persona{
    #nombre;
    #edad;

    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    get Nombre(){
        return this.#nombre;
    }
    get Edad(){
        return this.#edad;
    }

    set Nombre(nombre) {
        this.nombre = nombre
    }
    set Edad(edad) {
        this.edad = edad
    }

    salaudar(){
    
        let saludo = "";
        
        saludo = `Hola mi nombre es ${this.#nombre} y tengo ${this.#edad} años`;

        return saludo;
    }

    escribir(){
        let msg2 = "";

        msg2 = `Hola mi nombre es ${this.#nombre} y tengo ${this.#edad} años`;
        return msg2;
    }
    
} 
class Estudiante extends Persona{

    constructor(nombre,edad,grado){
        super(nombre,edad);
        this.grado = grado
    }
    
    set Nombre(nombre) {
        this.nombre = nombre
    }
    set Edad(edad) {
        this.edad = edad
    }
    get Nombre(){
        return this.nombre;
    }
    get Edad(){
        return this.edad;
    }


    estudiar(){
        let msg = ""

        msg = `Estoy estudiando`
        return msg;
    }

    
    escribir(){

        let msg3 = ""
        msg3 = `${super.escribir()} años y mi grado es ${this.grado}`;
        return msg3
    }

}
// Instanciamos la clase Persona

let persona1 = new Persona('juan', 21);
let persona2 = new Persona('santiago', 22);

// mostramos los datos
console.log(persona1);
console.log(persona2);

// Funcion salaudar
console.log(persona1.salaudar(persona1));
console.log(persona2.salaudar(persona2));

// datos privados

console.log(persona1.nombre);
console.log(persona2.nombre);

// encapsulamiento

console.log(persona1.Nombre)
console.log(persona1.Edad)


persona1 = new Persona('juan', 21);
persona1.Nombre = "Alex";
console.log(persona1.nombre)


persona1.Edad = 25;
console.log(persona1.edad)

// Herencia

let persona3 = new Estudiante('juan', 21, 10);
console.log(persona3);

console.log(persona3.estudiar(persona3));



console.log(persona1.escribir(persona1))

console.log(persona3.escribir(persona3))