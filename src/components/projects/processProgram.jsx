import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import { Carousel, Image } from 'antd';
import { GitHub } from '@mui/icons-material';
import ImgPorcesos1 from '../../assets/Dora/Proceso1.png';
import ImgPorcesos2 from "../../assets/Dora/Proceso2.png";
import ImgPorcesos3 from "../../assets/Dora/Proceso3.png";

const ProcessProgram = () => {
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
                    >Processes program</Typography>
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
                            <Image src={ ImgPorcesos1 } 
                                preview={{ 
                                    maskClassName: 'custom-preview',
                                    maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                                }} 
                            />
                            <Image src={ ImgPorcesos2 }
                                preview={{ 
                                    maskClassName: 'custom-preview',
                                    maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                                }} 
                            />
                            <Image src={ ImgPorcesos3 }
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
                        In this program I make a task manager but very basic, use the commands run, stop, kill and start for the 
                        files txt in these projects, also show sizes of memories of the computer, in the bottom, show a program 
                        compile for javacc, in the middle show how the process works, this part use a thread and a sprint with 
                        Dora to show how the process passes to ready to run and stop, so only when using the commands stop in the 
                        part of ready (listos) or blocked (bloqueados) changes its behavior, finally the command start it make to 
                        repeat the process of ready, execution and blocked, but this if the process is the part ready suspended 
                        (suspendidos listos) and blocked suspended (suspendidos bloqueados).
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
                        href='http://github.com/Cristian-Miguel/SitemasOperativos'>
                        Link to the repository
                    </Link>
                </Container>
            </Box>
        </>
    );
}

export default ProcessProgram;