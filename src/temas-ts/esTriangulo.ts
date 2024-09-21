import { Calcular } from "./distancia-entre-2-puntos";

export class Triangulo extends Calcular {
    x3: number;
    y3: number;
  
    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
      super(x1, y1, x2, y2);
      this.x3 = x3;
      this.y3 = y3;
    }
 
    // Imprimir las coordenadas de los tres puntos
    imprimir() {
    console.log(`Las coordenadas de los puntos A, B y C son: 
        A(${this.x1}, ${this.y1}), 
        B(${this.x2}, ${this.y2}), 
        C(${this.x3}, ${this.y3})`);
    }
  
    // 1 y 3
    Distancia2(): number {
      const dx = this.x3 - this.x1;
      const dy = this.y3 - this.y1;
      return Math.sqrt(dx * dx + dy * dy);
    }
  
    //2 y 3
    Distancia3(): number {
      const dx = this.x3 - this.x2;
      const dy = this.y3 - this.y2;
      return Math.sqrt(dx * dx + dy * dy);
    }

    // Verificar si es triángulo
    esTriangulo(): boolean {
      const lado1 = this.Distancia(); // Distancia entre 1 y 2
      const lado2 = this.Distancia2(); // Distancia entre 1 y 3
      const lado3 = this.Distancia3(); // Distancia entre 2 y 3
  
      return (
        lado1 + lado2 > lado3 &&
        lado1 + lado3 > lado2 &&
        lado2 + lado3 > lado1
      );
    }
  }

//                        (x1, y1, x2, y2, x3, y3)
const puntosT = new Triangulo(-4, -3, 2, 5, 1, 1);
puntosT.imprimir();


// Calcular distancia: (x1, y1) y (x2, y2)
//const distancia = puntosT.Distancia();

//console.log(`La distancia es: ${distancia}`);


if (puntosT.esTriangulo()) {
  console.log("Los puntos forman un triángulo.");
} else {
  console.log("Los puntos no forman un triángulo.");
}
















/*
    esTriangulo(): (lado1: number, lado2: number, lado3: number){
      const lado1 = this.Distancia(this.x1, this.y1, this.x2, this.y2);  // Distancia entre (x1, y1) y (x2, y2)
      const lado2 = this.Distancia2(this.x2, this.y2, this.x3, this.y3);  // Distancia entre (x2, y2) y (x3, y3)
      const lado3 = this.Distancia3(this.x3, this.y3, this.x1, this.y1);  // Distancia entre (x3, y3) y (x1, y1)
      return { lado1, lado2, lado3 };
  }
*/



/*
      // verificar si los puntos forman un triángulo
      esTriangulo(): boolean {
        const { lado1, lado2, lado3 } = this.calcularDistancias();
        // Verificar si es triángulo
        return (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2);
    }

*/

/*

    // Imprimir las distancias y verificar si es un triángulo
    esTriangulo(){
      const { lado1, lado2, lado3 } = this.Distancias();
      console.log(Distancia entre Punto 1 y Punto 2: ${lado1});
      console.log(Distancia entre Punto 2 y Punto 3: ${lado2});
      console.log(Distancia entre Punto 3 y Punto 1: ${lado3});

      if (this.esTriangulo()) {
          console.log('Los puntos forman un triángulo');
      } else {
          console.log('Los puntos no forman un triángulo');
      }}

/*const puntos = new Calcular(-4, 2, -3, 5);
puntos.imprimir();
*/