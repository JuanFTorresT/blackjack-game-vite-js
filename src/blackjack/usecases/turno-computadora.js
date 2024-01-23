import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";

export const turnoComputadora = (puntosJugadores, deck) => {
    let puntosComputadora = 0;
    let acumularPuntos=[];
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
        crearCarta(carta, puntosJugadores.length-1);

        if (puntosJugador > 21){
            break;
        }
        
    } while ((puntosComputadora<puntosJugador) && (puntosJugador <=21) );

    determinarGanador();
}