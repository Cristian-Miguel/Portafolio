import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import { Carousel, Image } from 'antd';
import { GitHub } from '@mui/icons-material';
import ImgFlutter1 from "../../assets/Flutter/Flutter1.png";
import ImgFlutter2 from "../../assets/Flutter/Flutter2.png";
import ImgFlutter3 from "../../assets/Flutter/Flutter4.png";

const ManageReservation = () => {
    return(
        <>
            <Box 
                sx={{
                    height: {
                        xs: '1000px',
                        sm: '1200px',
                        md: '1000px',
                        lg: '1200px',
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
                    >Manage of reservations</Typography>
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
                            <Image src={ ImgFlutter1 } 
                                preview={{ 
                                    maskClassName: 'custom-preview',
                                    maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                                }} 
                            />
                            <Image src={ ImgFlutter2 }
                                preview={{ 
                                    maskClassName: 'custom-preview',
                                    maskStyle: { maxWidth: '100%', maxHeight: '100vh', objectFit: 'contain' } 
                                }} 
                            />
                            <Image src={ ImgFlutter3 }
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
                        This project is a school project in development, it's a reserve manager, and the reservations are 
                        divided into tours, hotels, trips, restaurants, and packages from these, furthermore project will 
                        have user management with four kinds of roles:
                        <ul>
                            <li>
                                Companies: this could create, read, update, delete (CRUD), the information of their products, 
                                second, they can put discounts.
                            </li>
                            <li>
                                Users: They could make a reservation, pay the reservation, put in favorites of their products, 
                                watch your profile and watch the products.
                            </li>
                            <li>
                                Admins: they will have to manage the application.
                            </li>
                            <li>
                                Tourists: they could do a reservation and watch the products, they don't need registration in the app.
                            </li>
                        </ul>
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
                        href='https://github.com/Cristian-Miguel/TPM-Turismo'>
                        Link to the repository
                    </Link>
                </Container>
            </Box>
        </>
    );
}

export default ManageReservation;