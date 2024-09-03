import React from 'react';
import MyPhoto from '../../assets/FotoTamInf.jpeg';
import { Container, Avatar, Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutMe = () => {

    return (
        <>  
            <Box 
                sx={{
                    height: {
                        xs: '500px',
                        sm: '550px',
                        md: '600px',
                        lg: '650px',
                    },
                }}
                style={{ 
                    background: 'linear-gradient(#000, #072d4c)', 
                    width: '100%',
                    margin: 0,
                    padding: '20px'
                }}
            >
                <Container sx={{
                    color:'white',
                    textAlign: 'center',
                }}>
                    <Typography variant="h2" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '1rem', 
                                sm: '2rem', 
                                md: '3rem',
                                lg: '4rem',
                            }
                        }}
                    >About me</Typography>
                </Container>
                
                <Container sx={{
                    color:'white',
                    display:'flex',
                    height:'350px',
                    textAlign: 'center',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:{
                        xs: 'column',
                        sm: 'row',
                        md: 'row',
                        lg: 'row',
                    },
                    marginBottom:'20px',
                    marginTop:'20px'
                }}>
                    <Avatar alt="Photo of me" src={ MyPhoto } sx={{
                        width:{
                            xs: '100px',
                            sm: '100px',
                            md: '200px',
                            lg: '300px',
                        },
                        height:{
                            xs: '100px',
                            sm: '100px',
                            md: '200px',
                            lg: '300px',
                        },
                        marginBottom:{
                            xs:'10px'
                        }
                    }}/>
                    <Typography variant="body1" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.7rem', // Font size for extra-small screens (mobile)
                                sm: '0.8rem', // Font size for small screens (tablet)
                                md: '1rem', // Font size for medium screens (laptops)
                                lg: '1.5rem', // Font size for large screens (desktops)
                            },
                            marginLeft:'5%',
                            marginBottom:0
                        }}
                    >
                        I am a highly motivated Computer Systems Engineering graduate from the Instituto Tecnológico de Morelia with a
                        specialization in Software Engineering and Mobile Development. With extensive experience as a full-stack
                        developer, I have successfully developed and deployed applications utilizing a wide range of technologies. My
                        proactive approach, positive attitude, and commitment to continuous learning make me a valuable team player ready
                        to take on new challenges.
                    </Typography>
                </Container>

                <Container sx={{
                    color:'white',
                    textAlign: 'center',
                    display:'flex'
                }}>
                    <Container sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <LinkedInIcon sx={{ 
                            width:{
                                xs: '20px',
                                sm: '30px',
                                md: '40px',
                                lg: '50px',
                            },
                            height:{
                                xs: '20px',
                                sm: '30px',
                                md: '40px',
                                lg: '50px',
                            }
                        }} />
                        <Link 
                            sx={{
                                fontSize: {
                                    xs: '0.5rem',
                                    sm: '0.8rem',
                                    md: '1rem',
                                    lg: '1.5rem',
                                },
                            }}
                            style={{ color:'white', textDecoration:'none' }} 
                            href='https://www.linkedin.com/in/cristian-miguel-marin-barrera-936803200'
                        >
                            My profile
                        </Link>
                    </Container>
                    <Container sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <GitHubIcon sx={{ 
                            width:{
                                xs: '20px',
                                sm: '30px',
                                md: '40px',
                                lg: '50px',
                            },
                            height:{
                                xs: '20px',
                                sm: '30px',
                                md: '40px',
                                lg: '50px',
                            }, 
                        }} />
                        <Link
                            sx={{
                                fontSize: {
                                    xs: '0.5rem',
                                    sm: '0.8rem',
                                    md: '1rem',
                                    lg: '1.5rem',
                                },
                            }}
                            style={{ color:'white', textDecoration:'none'}} 
                            href='https://github.com/Cristian-Miguel'>
                            My repositories
                        </Link>
                    </Container>
                </Container>

            </Box>
        </>
    );
}

export default AboutMe;