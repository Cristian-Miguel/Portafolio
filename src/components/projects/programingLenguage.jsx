import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import { Carousel, Image } from 'antd';
import { GitHub } from '@mui/icons-material';
import ImgCminus1 from "../../assets/CMinus/Cminus1.png";
import ImgCminus2 from "../../assets/CMinus/Cminus2.png";
import ImgCminus3 from "../../assets/CMinus/Cminus3.png";

const ProgrammingLenguage = () => {
    return(
        <>
            <Box 
                sx={{
                    height: {
                        xs: '700px',
                        sm: '900px',
                        md: '650px',
                        lg: '850px',
                    },
                    margin:'250px 0 0 0',
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
                    >C-Minus</Typography>
                </Container>

                <Box sx={{
                    width:'80%',
                    display:'flex',
                    flexDirection: {
                        xs: 'column', 
                        sm: 'column', 
                        md: 'row',
                        lg: 'row',
                    },
                    alignItems: 'center',
                    padding:0,
                    margin:0
                }}>
                    <Container sx={{ width:{
                        xs: '100%', 
                        sm: '100%', 
                        md: '50%',
                        lg: '50%',
                        } 
                    }}>
                        <Carousel arrows infinite autoplay autoplaySpeed={5000}>
                            <Image src={ ImgCminus1 } 
                                preview={{ 
                                    maskClassName: 'custom-preview',
                                    maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                                }} 
                            />
                            <Image src={ ImgCminus2 }
                                preview={{ 
                                    maskClassName: 'custom-preview',
                                    maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                                }} 
                            />
                            <Image src={ ImgCminus3 }
                                preview={{ 
                                    maskClassName: 'custom-preview',
                                    maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                                }} 
                            />
                        </Carousel>
                    </Container>
                    
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
                        C-Minus is a program developed in javacc, the program is more like a reader of code, this does a search 
                        of variables, functions, logical operators, arithmetic operators, special words, and comments, the 
                        program is an evaluator of the part lexical, syntactical and semantic, it shows errors for these three 
                        parts, and every variable is saved in a Hashtable, no matter if the variable has the same number in ASCII, 
                        this is saved in a stack with all the information necessary to do an operation.
                    </Typography>
                </Box>

                <Container sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:'25px'
                }}>
                    <GitHub sx={{ 
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
                        href='https://github.com/Cristian-Miguel/C-Minus'>
                        Link to the repository
                    </Link>
                </Container>
            </Box>
        </>
    );
}

export default ProgrammingLenguage;