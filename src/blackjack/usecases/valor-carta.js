  /**
   * Obtener el valor de la carta
   * @param {String} carta Recibe una carta en forma de String Ejemplo ['10H']
   * @returns {Number} Retorna el valor de la carta como un numero
   */
  
  // Esta funcion suma el valor de la carta que se tomó
  export const valorCarta = ( carta ) => {
    const valor = carta.substring(0,carta.length - 1 );

    console.log('Valor caarta en funcion valor carta: ',valor);

    return (isNaN( valor )) ? 
        (valor === 'A') ? 11 : 10 
        : valor * 1;  
}