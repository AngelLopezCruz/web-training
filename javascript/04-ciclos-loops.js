/**
 * SISTEMA DE ELECCIONES
 */

const PARTIDOS = {
  PRI: 0,
  PAN: 0,
  MORENA: 0,
  PRD: 0,
  CANCELADOS: 0
};

let personas = [
  { nombre: 'Juan', eleccion: 'PRI' },
  { nombre: 'Pedro', eleccion: 'PAN' },
  { nombre: 'Pablo', eleccion: 'PRD' },
  { nombre: 'Maria', eleccion: 'PAN' },
  { nombre: 'Guadalupe', eleccion: 'MORENA' },
  { nombre: 'Rosa', eleccion: 'MORENA' },
  { nombre: 'Manuel', eleccion: 'PRI' },
  { nombre: 'Pepe', eleccion: 'PAN' },
  { nombre: 'Toño', eleccion: 'CANCELADOS' },
];

// repite el numero de personas
// empieza en i = 0 y por cada vuelta aumenta el valor de i
for (let i = 0; i < personas.length; i++) {
  let personaActual = personas[i];

  PARTIDOS[personaActual.eleccion]++;
}

console.log(PARTIDOS);