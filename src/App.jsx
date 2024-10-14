// App.jsx
import React, { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import NumeroSeleccion from './NumeroSeleccion';
import BotonSortear from './BotonSortear';
import BotonReiniciar from './BotonReiniciar'; 
import Resultados from './Resultados';

function App() {
  const [numerosSeleccionados, setNumerosSeleccionados] = useState([]);
  const [numerosGanadores, setNumerosGanadores] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [animando, setAnimando] = useState(false);

  const manejarSeleccionNumero = (numero) => {
    if (numerosSeleccionados.includes(numero)) {
      setNumerosSeleccionados(numerosSeleccionados.filter((n) => n !== numero));
    } else {
      if (numerosSeleccionados.length < 6) {
        setNumerosSeleccionados([...numerosSeleccionados, numero]);
      } else {
        alert('Solo puedes seleccionar hasta 6 números.');
      }
    }
  };

  const sortearNumeros = () => {
    setAnimando(true);
    const numeros = Array.from({ length: 49 }, (_, i) => i + 1);
    const numerosAleatorios = [];
    while (numerosAleatorios.length < 6) {
      const index = Math.floor(Math.random() * numeros.length);
      numerosAleatorios.push(numeros.splice(index, 1)[0]);
    }
    setTimeout(() => {
      setNumerosGanadores(numerosAleatorios);
      verificarGanador(numerosAleatorios);
      setAnimando(false);
    }, 2000);
  };

  const verificarGanador = (numerosAleatorios) => {
    const aciertos = numerosSeleccionados.filter((numero) =>
      numerosAleatorios.includes(numero)
    ).length;

    if (aciertos === 6) {
      setResultado('¡Felicidades! Has acertado todos los números.');
    } else if (aciertos > 0) {
      setResultado(`Has acertado ${aciertos} número(s).`);
    } else {
      setResultado('No has acertado ningún número.');
    }
  };

  const reiniciarJuego = () => {
    setNumerosSeleccionados([]);
    setNumerosGanadores([]);
    setResultado(null);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sorteo de Lotería
      </Typography>
      <NumeroSeleccion
        numerosSeleccionados={numerosSeleccionados}
        manejarSeleccionNumero={manejarSeleccionNumero}
      />
      {/* Nueva disposición usando Grid para poner la imagen junto al botón de sorteo */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <BotonSortear sortearNumeros={sortearNumeros} deshabilitado={animando} />
        </Grid>
        <Grid item xs={4}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDaAyBchpfsJWD3gAZNbmCVhZzyIBBkAUBg&s/100" // Reemplazar por la URL de tu imagen
            alt="Lotería"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
      <BotonReiniciar reiniciarJuego={reiniciarJuego} deshabilitado={animando} />
      {animando ? (
        <Typography align="center">Sorteando...</Typography>
      ) : (
        <Resultados numerosGanadores={numerosGanadores} resultado={resultado} />
      )}
    </Container>
  );
}

export default App;

