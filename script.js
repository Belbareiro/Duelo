class Unidad {
    constructor(nombre, costo, poder, resiliencia) {
        this.nombre = nombre;
        this.costo = costo;
        this.poder = poder;
        this.resiliencia = resiliencia;
    }
}

class Efecto {
    constructor(nombre, costo, texto, stat, magnitud) {
        this.nombre = nombre;
        this.costo = costo;
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }

    aplicar(unidad) {
        if (this.stat === "poder") {
            unidad.poder += this.magnitud;
        } else if (this.stat === "Resiliencia") {
            unidad.resiliencia += this.magnitud;
        }
    }
}


let ninjaCinturonRojo = new Unidad("Ninja Cinturón Rojo", 3, 3, 4);
let ninjaCinturonNegro = new Unidad("Ninja Cinturón Negro", 4, 5, 4);


let algoritmoDificil = new Efecto("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "Resiliencia", 3);
let rechazoPromesaNoManejada = new Efecto("Rechazo de promesa no manejada", 1, "reducir la resistencia del objetivo en 2", "Resiliencia", -2);
let programacionEnPareja = new Efecto("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "poder", 2);

// Turno 1
console.log("Turno 1: El jugador 1 convoca a 'Ninja Cinturón Rojo'");
console.log(ninjaCinturonRojo);

console.log("Turno 1: El jugador 1 juega 'Algoritmo Duro' en 'Ninja Cinturón Rojo'");
algoritmoDificil.aplicar(ninjaCinturonRojo);
console.log(ninjaCinturonRojo);

// Turno 2
console.log("Turno 2: El jugador 2 convoca a 'Ninja Cinturón Negro'");
console.log(ninjaCinturonNegro);

console.log("Turno 2: El jugador 2 juega 'Rechazo de promesa no controlada' en 'Ninja Cinturón Rojo'");
rechazoPromesaNoManejada.aplicar(ninjaCinturonRojo);
console.log(ninjaCinturonRojo);

// Turno 3
console.log("Turno 3: El jugador 1 juega 'Programación en pareja' en 'Ninja Cinturón Rojo'");
programacionEnPareja.aplicar(ninjaCinturonRojo);
console.log(ninjaCinturonRojo);

console.log("Turno 3: El jugador 1 tiene el ataque 'Ninja Cinturón Rojo' contra 'Ninja Cinturón Negro'");
// 
ninjaCinturonNegro.resiliencia -= ninjaCinturonRojo.poder;
ninjaCinturonRojo.resiliencia -= ninjaCinturonNegro.poder;

console.log(ninjaCinturonRojo);
console.log(ninjaCinturonNegro);

if (ninjaCinturonRojo.resiliencia <= 0) {
    console.log("Ninja Cinturón Rojo ha sido eliminado.");
}

if (ninjaCinturonNegro.resiliencia <= 0) {
    console.log("Ninja Cinturón Negro ha sido eliminado.");
}
