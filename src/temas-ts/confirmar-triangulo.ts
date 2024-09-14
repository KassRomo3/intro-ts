import { Calcular } from "./distancia-entre-2-puntos";

export class Triangulo extends Calcular {
    x3: number;
    y3: number;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super(x1, y1, x2, y2);
        this.x3 = x3;
        this.y3 = y3;
    }
    imprimir() {
        super.imprimir(); 
        console.log(`El punto C es: (${this.x3}, ${this.y3})`);
    }

    // Método para verificar si los tres puntos forman un triángulo o son colineales
    esTriangulo(): boolean {
        const area = Math.abs(
            this.x1 * (this.y2 - this.y3) +
            this.x2 * (this.y3 - this.y1) +
            this.x3 * (this.y1 - this.y2)
        ) / 2;

        // Si el área es 0 y los puntos son lineales
        return area !== 0;
    }
}

// Crear una instancia con tres puntos
const puntos = new Triangulo(1, 2, 4, 6, 7, 10);
//puntos.imprimir();

const distancia = puntos.Distancia();
console.log(`La distancia entre el punto A y B es: ${distancia}`);

// Verificar
if (puntos.esTriangulo()) {
    console.log("Los puntos forman un triángulo.");
} else {
    console.log("Los puntos son lineales");
}




/*Clase heredada
class Triangulo extends Calcular {
    constructor(x: number, y: number) {
        super(x, y);
    }

    static esTriangulo(p1: Calcular, p2: Calcular, p3: Calcular): boolean {
        const pendiente1 = (p2.y - p1.y) * (p3.x - p2.x);
        const pendiente2 = (p3.y - p2.y) * (p2.x - p1.x);
        return pendiente1 === pendiente2;
    }
}
const pA = new Triangulo(1, 1);
const pB = new Triangulo(2, 2);
const pC = new Triangulo(3, 5);

const esTriangulo = Triangulo.esTriangulo(pA, pB, pC);

if (esTriangulo) {
    console.log("Los puntos son lineales, no forman un triángulo.");
} else {
    console.log("Los puntos si forman un triángulo.");
}

*/