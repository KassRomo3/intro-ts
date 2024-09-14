class calcular{
    constructor(public x: number, public y: number) {}

    static distancia(punto1: calcular, punto2: calcular): number {
        const dx = punto2.x - punto1.x;
        const dy = punto2.y - punto1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const puntoA = new calcular(1, 2);
const puntoB = new calcular(4, 6);
const distancia = calcular.distancia(puntoA, puntoB);

console.log(`La distancia entre el punto A y el punto B es: ${distancia}`);




//definir una clase que represente el punto cartesano
//crear metodos para calcular la distancia
// calcular la distancia con el teorema de pitagoras sqrt(A^2 + B^2)
