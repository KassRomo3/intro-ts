const alumno:Alumno={
    nombre:"Kass",
    apellido:"Romo",
    edad: 22,
    curso: "ingles"
}

interface Alumno{
    nombre: string;
    apellido: string;
    edad: number;
    curso: string;
    direccion?: string;
}   //si tiene ?, significa que el campo es opcional para que no marque error al conectarlas

console.table(alumno)

let mascotas=['perro','gato','perico'];

console.log(mascotas[0]);
mascotas[1]='nuevo gato';
mascotas.push('hamster');
console.log(mascotas)

let tem:(number|string)[]=[]
tem.push(1);
tem.push('dos');
console.log(tem)