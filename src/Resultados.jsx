// Resultados.jsx
import React from 'react';
import { Typography } from '@mui/material';

function Resultados({ numerosGanadores, resultado }) {
  return (
    <div style={{ marginTop: 20 }}>
      {numerosGanadores.length > 0 && (
        <Typography variant="h6" align="center">
          Números Ganadores: {numerosGanadores.join(', ')}
        </Typography>
      )}
      {resultado && (
        <Typography variant="h6" align="center" color="secondary">
          {resultado}
        </Typography>
      )}
    </div>
  );
}

export default Resultados;
