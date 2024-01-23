import _ from 'underscore';
import { pedirCarta } from "./usecases";
import { acumularPuntos } from "./usecases/acumular-puntos";
import { determinarGanador } from "./usecases/determinar-ganador";
import { crearCarta } from "./usecases/crear-carta";
import { inicializarJuego } from "./usecases/inicializar-juego";
import { turnoJugador } from './usecases/turno-jugador';
// import { turnoComputadora } from "./usecases/turno-computadora";


const miModulo = (() => {
  'use strict'
//   let deck=[];
let deck = [];
  const tipos = ['C','D','H','S',],
        especiales = ['A','J','Q','K'];

  let puntosJugadores = [0,0];

  // REFERENCIAS DEL HTML

  const btnPedir = document.querySelector('#btnPedir'),
        btnMeQuedo = document.querySelector('#btnDetener'),
        btnNuevoJuego = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');
  
  // Esta función inicializa el juego.
//   const inicializarJuego = (numJugadores = 2) => {

//       console.clear();

//       deck = crearDeck(tipos, especiales);
      
//       puntosJugadores = []
//       for (let i = 0; i<numJugadores; i++){
//           puntosJugadores.push(0);
//       }

//       puntosHTML.forEach(elem => elem.innerText = 0)

//       divCartasJugadores.forEach(elem => elem.innerHTML= '')

//       btnMeQuedo.disabled = false;
//       btnPedir.disabled = false;
//   }


 //Turno de la computadora
  const turnoComputadora = (puntosJugador) => {
      let puntosComputadora = 0;
      do {
          const carta = pedirCarta(deck);
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1, puntosJugadores, puntosHTML);
          crearCarta(carta, puntosJugadores.length-1, divCartasJugadores[1]);

          if (puntosJugador > 21){
              break;
          }
          
      } while ((puntosComputadora<puntosJugador) && (puntosJugador <=21) );
  
      determinarGanador(puntosJugadores);
  }




  // EVENTOS

  btnPedir.addEventListener('click', () => {
    
    console.log({puntosJugadores, puntosHTML, divCartasJugadores});

    turnoJugador(deck, puntosJugadores, puntosHTML, divCartasJugadores, btnMeQuedo)
    //   const carta = pedirCarta(deck);

    //   const puntosJugador = acumularPuntos(carta,0,puntosJugadores,puntosHTML);

    //   crearCarta(carta,0, divCartasJugadores[0])

    //   if (puntosJugador > 21){
    //       btnPedir.disabled = true;
    //       btnMeQuedo.disabled = true;
    //       turnoComputadora(puntosJugador);
    //   } else if (puntosJugador === 21){
    //       alert("Genial, tienes 21. Ganaste!")
    //       btnPedir.disabled = true;
    //       btnMeQuedo.disabled = true;
    //   }
      
  })

  btnMeQuedo.addEventListener('click',() => {
      btnMeQuedo.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugadores[0], deck);
  });

  

  btnNuevoJuego.addEventListener('click',() => {
    puntosJugadores=[0,0]
    deck = inicializarJuego(2,tipos,especiales,puntosJugadores,puntosHTML,divCartasJugadores,btnMeQuedo,btnPedir);
    
      

  });
  

  return {
      nuevoJuego: inicializarJuego
  };

})();













