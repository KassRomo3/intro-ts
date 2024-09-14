class Triangulo extends calcular {
    constructor(x: number, y: number) {
        super(x, y); // Llama al constructor de la clase Point
    }

    // Método estático para verificar si tres puntos son colineales
    static esTriangulo(punto1: calcular, punto2: calcular, punto3: calcular): boolean {
        const pendiente1 = (punto2.y - punto1.y) * (punto3.x - punto2.x);
        const pendiente2 = (punto3.y - punto2.y) * (punto2.x - punto1.x);

        // Si las pendientes son iguales, los puntos son colineales
        return pendiente1 === pendiente2;
    }
}


// Crear tres puntos
const puntoA = new Triangulo(1, 1);
const puntoB = new Triangulo(2, 2);
const puntoC = new Triangulo(3, 3);

// Verificar si los tres puntos son colineales
const esTriangulo = Triangulo.esTriangulo(puntoA, puntoB, puntoC);

if (esTriangulo) {
    console.log("Los puntos son colineales, no forman un triángulo.");
} else {
    console.log("Los puntos no son colineales, forman un triángulo.");
}
