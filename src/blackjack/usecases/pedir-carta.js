
/**
 * Pedir una carta
 * @param {Array<string>} deck Recibe un arreglo desordenado de cartas Ejemplo:['6S', '3H', '3C', '8C', '3D', 'AH']
 * @returns {String} Retorna una carta del arreglo en forma de String Ejemplo: '6S'
 */

  export const pedirCarta = (deck) => {

    if (!deck || deck.length===0) {
        throw 'No Hay cartas en el deck';
    }

    return deck.pop();
    
}