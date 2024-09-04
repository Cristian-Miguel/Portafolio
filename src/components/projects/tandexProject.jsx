import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import { Carousel, Image } from 'antd';
import { YouTube } from '@mui/icons-material';
import ImgTandex1 from '../../assets/tandex/tandex1.jpeg';
import ImgTandex2 from "../../assets/tandex/tandex2.jpeg";
import ImgTandex3 from "../../assets/tandex/tandex3.jpeg";

const TadexProject = () => {
    return(
        <>
            <Box 
                sx={{
                    height: {
                        xs: '450px',
                        sm: '550px',
                        md: '650px',
                        lg: '900px',
                    },
                    margin:0,
                    background: 'linear-gradient(#000, #072d4c)', 
                    padding: '20px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Container sx={{
                    color:'white',
                    textAlign: 'center',
                    width:'100%'
                }}>
                    <Typography variant="h2" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '2rem', 
                                sm: '2.5rem', 
                                md: '3rem',
                                lg: '3.5rem',
                            },
                            fontWeight:'bold',
                        }}
                    >Tandex project</Typography>
                </Container>

                <Container sx={{
                    width: {
                        xs: '80%', 
                        sm: '70%', 
                        md: '60%',
                        lg: '50%',
                    }
                }}>
                    <Carousel arrows infinite autoplay autoplaySpeed={5000} >
                        <Image src={ ImgTandex1 } 
                            preview={{ 
                                maskClassName: 'custom-preview',
                                maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                            }} 
                        />
                        <Image src={ ImgTandex2 }
                            preview={{ 
                                maskClassName: 'custom-preview',
                                maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                            }} 
                        />
                        <Image src={ ImgTandex3 }
                            preview={{ 
                                maskClassName: 'custom-preview',
                                maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                            }} 
                        />
                    </Carousel>
                    <Typography variant="h2" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.8rem', 
                                sm: '1rem', 
                                md: '1.2rem',
                                lg: '1.4rem',
                            },
                            color:'white',
                            margin:'30px 0 30px 0',
                            textAlign:'center'
                        }}
                    >
                        The project was about a system that upload and publish products of the store on the platform WooCommerce, 
                        in this case, my team used technologies such as React, Mysql, Node, and APIs Rest to send it to WooCommerce, 
                        in addition, my role was full stack developer.
                    </Typography>
                </Container>

                <Container sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <YouTube sx={{ 
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
                        color:'white'
                    }} />
                    <Link
                        sx={{
                            fontSize: {
                                xs: '0.8rem', 
                                sm: '1rem', 
                                md: '1.2rem',
                                lg: '1.4rem',
                            },
                            marginLeft:'1%'
                        }}
                        style={{ color:'white', textDecoration:'none'}} 
                        href='https://www.youtube.com/watch?v=SObRbtKyNCY&ab_channel=MiguelAngelLandaVilla'>
                        Video about the system, in Spanish
                    </Link>
                </Container>
            </Box>
        </>
    );
}

export default TadexProject;