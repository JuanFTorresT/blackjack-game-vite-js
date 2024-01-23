
export const crearCarta = (carta,turno, divCartasJugadores) =>{
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta')
    imgCarta.src = `assets/cartas/cartas/${carta}.png`
    divCartasJugadores.append(imgCarta);
    return imgCarta
}