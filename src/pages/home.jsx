import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutMe from '../components/home/aboutMe';
import MyExperience from '../components/home/myExperience';
import Education from '../components/home/education';

const Home = () => {

    return(
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
                    textAlign: 'center'
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
                 >Hello! I'm Cristian Miguel a Computer System Engineer</Typography>  
            </Box>

            <AboutMe/>

            <MyExperience/>

            <Education/>

        </>
    );
}

export default Home;