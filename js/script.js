class Alumnos {
    // Constructor te crea tammbien los atributos que podran ser usados durante cualquier metodo dentro de la clase 
    constructor(nombre, promedioF) {
        this.nombre = nombre;
        this.promedioF = promedioF;
    }

    // Método para calcular el promedio de dos notas
    calcularPromedio() {
        let nota1, nota2;

        while (true) {
            nota1 = parseInt(prompt("Ingrese la primer nota (0-10): "));
            if (nota1 >= 0 && nota1 <= 10) {
                break; // Salir del bucle si la nota es válida
            }
        }
            
        while (true) {
            nota2 = parseInt(prompt("Ingrese la segunda nota (0-10): "));
            if (nota2 >= 0 && nota2 <= 10) {
                break; // Salir del bucle si la nota es válida
            }
            alert("Nota inválida. Intente de nuevo.");
        }

        let promedio = (nota1 + nota2) / 2;
        this.promedioF = promedio;
        alert("El promedio calculado es: " + promedio); 
    }
    //metodo para pedir el nombre mediante la ventana emergente
    pedirNombre(){
        this.nombre = prompt("Ingrese nombre: ").toUpperCase()
        
    }
    // metodo para juntar el lo que recibi por parametro el nombre y el promedio calculado 
    juntarDatos(){
        alert("El promedio es: " + this.promedioF + " del alumno: " + this.nombre)
    }
    
}

// asi se crean los objetos de la clase, 

let alumno1 = new Alumnos();
let alumno2 = new Alumnos();
let alumno3 = new Alumnos();

// hacemos que cada objeto cumpla con los metodos de la clase para obntener promedios y nombres0
alumno1.pedirNombre();
alumno1.calcularPromedio();

alumno2.pedirNombre();
alumno2.calcularPromedio();

alumno3.pedirNombre();
alumno3.calcularPromedio();


// muestro en un alert los alumnos con un arreglo y en el for recorro el arreglo y muestro por cada posicion reccorida el nombre y el promedio 
const totalAlumnos = [alumno1, alumno2, alumno3] 

let mensaje = "Total de alumnos cargados con su nota respectiva: \n"

for (let i = 0; i < totalAlumnos.length; i++) {
    mensaje += "Nombre: " + totalAlumnos[i].nombre + ", Nota: " + totalAlumnos[i].promedioF + "\n";
}

alert(mensaje)





// agregarStock(cantidad){
//     //         this.stock = this.stock + cantidad
//     //         //this.stock += cantidad
//     //     
//     }