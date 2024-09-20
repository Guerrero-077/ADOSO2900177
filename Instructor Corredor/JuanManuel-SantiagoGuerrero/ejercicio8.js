class FiguraGeometrica {
    
    calcularArea(){
        return "El área de la figura es: ";
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        console.log(` ${super.calcularArea()} ${this.lado * this.lado}`);
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        console.log(`${super.calcularArea()} ${Math.PI * (this.radio * this.radio)}`);
    }
}

const figura1 = new Cuadrado(5);
const area1 = figura1.calcularArea();

const figura2 = new Circulo(3);
const area2 = figura2.calcularArea();