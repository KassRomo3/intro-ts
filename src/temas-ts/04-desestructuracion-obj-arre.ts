interface Reproductor{
    volume:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volume:50,
    segundo:10,
    cancion:"valiente",
    detalles:{
        autor:"Paty Cantú",
        year:2018
    }
}

//mandar a imprimir los dtos que tenemos en el obj
/*console.log(`El volume actual es: ${reproductor.volume}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`El año es: ${reproductor.detalles.year}`);
*/


//Desestructurar un objeto:
const{volume, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;

console.log(`El volumen actual es: ${volume}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La cancion es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El año es: ${year}`);

//se puede aplicar tambien a arreglos
const dbz:string[]=['Goku', 'Majinbu', 'Babidy', 'Freezer'];
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);

const[a, b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 2 ${b}`);