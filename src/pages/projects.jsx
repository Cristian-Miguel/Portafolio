import React from 'react';
import { Box, Typography } from '@mui/material';
import TandexProject from '../components/projects/tandexProject';
import ProcessProgram from '../components/projects/processProgram';
import ProgrammingLenguage from '../components/projects/programingLenguage';
import ManageReservation from '../components/projects/reservationProject';

const Projects = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: {
              xs: '325px',
              sm: '350px',
              md: '375px',
              lg: '400px',
          },
          objectFit: 'cover',
          backgroundColor:'black',
          opacity:'0.9',
          display: 'flex',
          color:'white',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          margin:0,
        }}
      >
        <Typography variant="h1" gutterBottom 
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '2.5rem',
              md: '3.5rem',
              lg: '4.5rem',
            }
          }}
        >Projects</Typography> 
      </Box>

      <TandexProject/>

      <ProcessProgram/>

      <ProgrammingLenguage/>

      <ManageReservation />
    
    </>
  );
}
  
export default Projects;