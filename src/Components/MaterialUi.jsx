import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
function MaterialUi() {
  return (
    <>
      <Typography variant="h4">
        Welcome
      </Typography>

      <TextField placeholder='Enter Name' className='' label="Name" />

      <Button variant="contained">
        Submit
      </Button>
    </>
  );
}

export {MaterialUi};