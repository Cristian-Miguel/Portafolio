import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';

const MyExperience = () => {

    return (
        <>
            <Box 
                sx={{
                    height: {
                        xs: '600px',
                        sm: '650px',
                        md: '700px',
                        lg: '850px',
                    },
                    marginTop:'250px'
                }}
                style={{ 
                    background: 'linear-gradient(#000, #072d4c)', 
                    width: '100%',
                    padding: '20px 2% 20px 2%',
                    
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
                    >Experience</Typography>
                </Container>

                {/* FactureApp */}
                <Container sx={{
                    color:'white',
                    textAlign: 'center',
                }}> 
                    <Container sx={{
                        color:'white',
                        textAlign: 'center',
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                       <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem',  
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >FactureApp</Typography>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >Morelia, Mich.</Typography> 
                    </Container>

                    <Container sx={{
                        color:'white',
                        textAlign: 'center',
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >Jr Java Developer</Typography>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >September 2023 - Currently</Typography>
                    </Container>
                    
                    <Typography variant="h2" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.55rem', 
                                sm: '0.8rem', 
                                md: '1rem',
                                lg: '1.2rem',
                            }
                        }}
                    >
                        Designed, developed, and supported modules of the new implementation 
                        in the FactureApp and Mi Contador platforms. Gathered the requirements 
                        for the new modules.
                        I used technologies of GWT, GXT, Sencha, Hibernate, and Mysql.
                    </Typography>
                </Container>
                
                {/* Caja Morelia Valladolid */}
                <Container sx={{
                    color:'white',
                    textAlign: 'center',
                    marginTop: '20px'
                }}> 
                    <Container sx={{
                        color:'white',
                        textAlign: 'center',
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                       <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem',  
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >Caja Morelia Valladolid</Typography>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >Morelia, Mich.</Typography> 
                    </Container>

                    <Container sx={{
                        color:'white',
                        textAlign: 'center',
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >Intern - Full stack developer</Typography>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >September 2022 - March 2023</Typography>
                    </Container>
                    
                    <Typography variant="h2" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.55rem', 
                                sm: '0.8rem', 
                                md: '1rem',
                                lg: '1.2rem',
                            }
                        }}
                    >
                        The project that I realize is the Automation of Money Laundering Prevention 
                        Processes, I worked as a full-stack developer, and my activities was to create 
                        the best solution in scripts in SQL at the technology of SQL server, furthermore 
                        the interaction from the back end with .NET and designed interactive 
                        interfaces in Vue.js.
                    </Typography>
                </Container>

                {/* Charo */}
                <Container sx={{
                    color:'white',
                    textAlign: 'center',
                     marginTop: '20px'
                }}> 
                    <Container sx={{
                        color:'white',
                        textAlign: 'center',
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                       <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem',  
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        > Academic factory of software of Instituto Tecnologico de Morelia - Charo</Typography>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >Morelia, Mich.</Typography> 
                    </Container>

                    <Container sx={{
                        color:'white',
                        textAlign: 'center',
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >Degree project - Full stack developer</Typography>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >August 2021 - August 2022</Typography>
                    </Container>
                    
                    <Typography variant="h2" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.55rem', 
                                sm: '0.8rem', 
                                md: '1rem',
                                lg: '1.2rem',
                            }
                        }}
                    >
                        The project is focused on supporting the people with some help like shoes, 
                        uniforms, medicines, food pantries, etcetera. However they need registration 
                        in the system with all personal data, and also they can register a group to 
                        get some help. Furthermore, they can upload new support for the people, and 
                        they must sign up the people who work in the system,  they must actualize and 
                        check the support who could be accepted or rejected. This system is being 
                        developed in Laravel 8 and PHP 7 and my role was full stack developer.
                    </Typography>
                </Container>

            </Box>
            {/* 
                <div className="Charo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='whitesmoke' width={50} height={50}>
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg>
                    <a href="https://www.youtube.com/watch?v=dgqLWqBqUCY">Video about the system, in Spanish</a>
                </div>
                </div>

                <div className="ContainerTandex">
                <h4 className="Tandex">
                Academic factory of software of Instituto Tecnologico de Morelia | 
                School Project - Full stack developer | January 2021 - July 2021
                </h4>
                <p className="Tandex">
                The project was about a system that upload and publish products of the 
                store on the platform WooCommerce, in this case, my team used technologies 
                such as React, Mysql, Node, and APIs Rest to send it to WooCommerce,
                in addition, my role was full stack developer.
                </p>
                <div className="Tandex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='whitesmoke' width={50} height={50}>
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg>
                    <a href="https://www.youtube.com/watch?v=SObRbtKyNCY">Video about the system, in Spanish</a>
                </div>
                </div>

            </section> */}
        </>
    );
}

export default MyExperience;