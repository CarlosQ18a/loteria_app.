// BotonReiniciar.jsx
import React from 'react';
import { Button } from '@mui/material';

function BotonReiniciar({ reiniciarJuego, deshabilitado }) {
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={reiniciarJuego}
      fullWidth
      disabled={deshabilitado}
      style={{ marginTop: 10 }}
    >
      Reiniciar Juego
    </Button>
  );
}

export default BotonReiniciar;
