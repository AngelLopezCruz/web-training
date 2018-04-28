// crear una funcion que reciba como entrada una lista de calificaciones
// y que regrese de esa lista cuantos calificaciones son aprobadas, se dice que una
// calificacion es aprobatoria, si es mayor o igual a 7
// ejemplo:
//
// entrada
// lista = [1, 5, 2, 5, 8, 3, 2]
//
// salida
// aprobados: 1
// reprobados: 6

function contarAprobados(listaDeCalificaciones) { 
  let conteo = {
  aprobados: 0,
  repobrados: 0
  };
  
  for(let i = 0; i <= listaDeCalificaciones.length; i++){ 
    if (listaDeCalificaciones[i] >= 7) {
      conteo.aprobados++;
    } else {
      conteo.repobrados++;
    }        
  } 
} 

lista = [1, 5, 2, 5, 8, 3, 2]
resultado = contarAprobados(lista);

console.log(resultado);