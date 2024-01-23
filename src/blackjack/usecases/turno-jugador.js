import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { turnoComputadora } from "./turno-computadora";

export const turnoJugador = (deck,puntosJugadores, puntosHTML, divCartasJugadores, btnMeQuedo) =>{
    
    const carta = pedirCarta(deck);

    //debe pasar puntos jugadores como [0,0]

    crearCarta(carta,0, divCartasJugadores[0])
    console.log('puntosJugadores:',puntosJugadores);

    const puntosJugador = acumularPuntos(carta,0,puntosJugadores,puntosHTML);

    if (puntosJugador > 21){
        btnPedir.disabled = true;
        btnMeQuedo.disabled = true;
        // turnoComputadora(puntosJugador);
        console.log('perdiste');
    } else if (puntosJugador === 21){
        alert("Genial, tienes 21. Ganaste!")
        btnPedir.disabled = true;
        btnMeQuedo.disabled = true;
    }
    

}