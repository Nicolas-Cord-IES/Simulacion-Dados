// Función para simular el lanzamiento de dos dados y calcular la suma
function lanzarDados() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    return dado1 + dado2;
}

  // Función para simular múltiples lanzamientos
  function simularLanzamientos(cantidadLanzamientos) {
    const resultados = Array.from({ length: cantidadLanzamientos }, () => lanzarDados());
    return resultados;
  }
  
  // Función para contar las apariciones de cada suma
function contarApariciones(resultados) {
    const conteo = resultados.reduce((acc, valor) => {
      acc[valor] = (acc[valor] || 0) + 1;
      return acc;
    }, {});
    return conteo;
  }
  
  
  const veces = prompt("Ingrese la cantidad de veces que desea lanzar los dados:");
  const resultados = simularLanzamientos(parseInt(veces));
  const conteo = contarApariciones(resultados);
  
  console.table(conteo);
  