export class Calcular{
    x1:number;
    x2:number;
    y1:number;
    y2:number;
    constructor(x1:number, x2:number, y1:number, y2:number){
            this.x1=x1;
            this.x2=x2;
            this.y1=y1;
            this.y2=y2;
    }
    imprimir(){
        //console.log(`Las coordenadas de los puntos son: (${this.x1}, ${this.x2}, ${this.y1}, ${this.y2})`);
        console.log(`Las coordenadas de los puntos A y B son: (${this.x1}, ${this.y1}) y (${this.x2}, ${this.y2})`);
    }

    Distancia(): number{
        const dx = this.x2 - this.x1;  
        const dy = this.y2 - this.y1;  
        return Math.sqrt(dx * dx + dy * dy); 
    }
}
//crea obj pts
const puntos = new Calcular(-4, 2, -3, 5);
puntos.imprimir();

// Calcular distancia: (x1, y1) y (x2, y2)
const distancia = puntos.Distancia();

console.log(`La distancia es: ${distancia}`);




/*
const puntoA = new Calcular(1, 2);
const puntoB = new Calcular(4, 6);
const distancia = Calcular.distancia(puntoA, puntoB);

console.log(`La distancia entre el punto A y el punto B es: ${distancia}`);


//definir una clase que represente el punto cartsano
//metodos para calcular la distancia
//calcular la distancia con el teorema de pitagoras sqrt(A^2 + B^2)









/*static distancia(p1: calcular, p2: calcular): number {
        const dx = p1.x1 - p2.x2;
        const dy = p1.y1 - p2.y2;
        return Math.sqrt(dx * dx + dy * dy);
    }*/