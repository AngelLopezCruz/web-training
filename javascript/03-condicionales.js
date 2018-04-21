/**
 * SISTEMA DE VOTACION:
 * El sistema de votacion permite realizar su voto a personas mayores de edad,
 * se dice que una persona es mayor de edad si a la fecha del dia dia de la
 * eleccion dicha persona tiene al menos 18 años cumplidos.
 */

// Objeto de tipo persona
let personaActual = {
  edad: 19,
  nacionalidad: 'Mexicana',
  tarjeta: 'AMEX',
};

const RESTRICCIONES = {
  edad: 18,
  nacionalidad: 'Mexicana'
};

// condicional simple
// si condicion es verdadero -> ejecuta algo
// sino entonces ->
if ((personaActual.edad >= RESTRICCIONES.edad)
    && (personaActual.nacionalidad == RESTRICCIONES.nacionalidad)) {
  console.log('Si puedes votar');
} else {
  console.log('No puedes votar');
}

// condicionales multiples
// mas recomendable que el ejemplo de abajo
switch (opcion) {
  case 'AMEX':
    descuento = 10;
    break;
    
  case 'BANAMEX':
    descuento = 7;
    break;

  case 'BANORTE':
    descuento = 5;
    break;

  default:
    descuento = 0;
    break;
}

if (tarjeta == 'AMEX' || tarjeta == 'BANAMEX' || tarjeta == 'BANORTE') {
  if (tarjeta == 'AMEX') {
    descuento = 10;
  } else {
    if (tarjeta == 'BANAMEX') {
      descuento = 7;
    } else {
      descuento = 5;
    }
  }
} else {
  descuento = 0;
}