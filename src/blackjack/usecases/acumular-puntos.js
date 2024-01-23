import { valorCarta } from "./valor-carta";



export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    
    console.log(turno);
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    
    return puntosJugadores[turno]
}