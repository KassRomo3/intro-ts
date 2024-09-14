class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log("Nombre: "+this.nombre+ " Edad: "+this.edad);
    }
}
//herencia de persona 3 para generar empleado 
//creamos la herencia usando extendes
class Empleado extends Persona3{
    private sueldo:number;
    constructor(nombre:string,edad:number,sueldo:number){
        super(nombre,edad); //la funcion "super" envia esos dos parámetros al padre
        this.sueldo=sueldo;
    }
    imprimir(): void {
        console.log(`Sueldo ${this.sueldo}`)
    }
    pagaImpuesto(){
        if(this.sueldo >5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else
        console.log(`${this.nombre} no debe pagar impuestos`)
    }
}
const persona3=new Persona3('Juan',44);
persona3.imprimir();

const empleado1=new Empleado('Ana', 22, 7000)
empleado1.imprimir();
empleado1.pagaImpuesto();