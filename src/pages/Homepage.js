import React from 'react'
import { Typography, Grid} from '@mui/material';

function Homepage() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h4' mt={17} align='center'>Welcome to CyberCops</Typography>
        </Grid>
    </Grid>
  )
}

export default Homepage