import { crearDeck } from "./crear-deck";

export const inicializarJuego = (numJugadores = 2, tipos, especiales,puntosJugadores,puntosHTML,divCartasJugadores,btnMeQuedo,btnPedir,turno) => {

    console.clear();
    console.log('puntos jugadores',puntosJugadores);
    puntosJugadores=[]
    let deck = []

    deck = crearDeck(tipos, especiales);

    console.log(deck);

    for (let i = 0; i<numJugadores; i++){
        puntosJugadores.push(0);
    }

    puntosHTML.forEach(elem => elem.innerText = 0)
    divCartasJugadores.forEach(elem => elem.innerHTML= '')
    console.log('puntos jugadores',puntosJugadores);

    btnMeQuedo.disabled = false;
    btnPedir.disabled = false;
    
    return deck;
}
