// BotonSortear.jsx
import React from 'react';
import { Button } from '@mui/material';

function BotonSortear({ sortearNumeros, deshabilitado }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={sortearNumeros}
      fullWidth
      disabled={deshabilitado}
      style={{ marginTop: 20 }}
    >
      Sortear Números
    </Button>
  );
}

export default BotonSortear;
