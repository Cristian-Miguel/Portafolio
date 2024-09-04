import React from 'react';
import { Container, Box, Typography, Link, Divider } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const MyExperience = () => {

    return (
        <>
            <Box 
                sx={{
                    height: {
                        xs: '925px',
                        sm: '1000px',
                        md: '1100px',
                        lg: '1200px',
                    },
                    marginTop:'250px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
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

                {/**************** FactureApp ****************/}
                <Container sx={{
                    color:'white',
                    textAlign: 'center',
                }}> 
                    <Typography variant="body1" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.7rem',  
                                sm: '1rem', 
                                md: '1.2rem',
                                lg: '1.5rem',
                            },
                            fontWeight:'bold'
                        }}
                    >FactureApp | Jr Java Developer</Typography>

                    <Typography variant="body1" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.7rem', 
                                sm: '1rem', 
                                md: '1.2rem',
                                lg: '1.5rem',
                            }
                        }}
                    >September 2023 - Currently | Morelia, Mich.</Typography>
                    
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
                       At FactureApp Inc., from September 2023 to the present, I have led the development, design, 
                       and management of new software modules, while also refactoring and optimizing existing ones. 
                       A key project involved upgrading the "Carta Porte" module from version 3.0 to 3.1, ensuring 
                       compliance with the latest SAT requirements by implementing all published changes. This included 
                       updating the frontend, enhancing error handling, validating required fields, and ensuring accurate 
                        XML generation and digital signature for SAT submissions. I also adapted the platform's API to 
                        the new specifications using Servlet, RESTEasy, and JBoss for endpoint development. My work 
                        included extensive testing of endpoints using Postman, data manipulation with Hibernate, and 
                        generating diverse PDF and Excel reports through JasperSoft and Apache POI. Additionally, I 
                        translated client requirements into actionable development tasks and managed the project workflow 
                        using the Kanban framework, reducing development response times by 20%. I also developed stored 
                        procedures in MySQL to handle data duplication efficiently.
                    </Typography>

                    <Divider variant="middle" sx={{backgroundColor:'white',  marginTop:'17px', marginBottom:'17px' }} />

                </Container>
                
                {/**************** Caja Morelia Valladolid ****************/}
                <Container sx={{
                    color:'white',
                    textAlign: 'center',
                }}> 
                    <Typography variant="body1" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.7rem',  
                                sm: '1rem', 
                                md: '1.2rem',
                                lg: '1.5rem',
                            },
                            fontWeight:'bold'
                        }}
                    >Caja Morelia Valladolid | Full stack intern</Typography>
                    <Typography variant="body1" gutterBottom 
                        sx={{
                            fontSize: {
                                xs: '0.7rem', 
                                sm: '1rem', 
                                md: '1.2rem',
                                lg: '1.5rem',
                            }
                        }}
                    >September 2022 - March 2023 | Morelia, Mich.</Typography> 
                    
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
                        At Caja Morelia Valladolid, I developed, designed, and managed a new application to enhance 
                        the bank's anti-money laundering processes. This application automated the management of critical 
                        lists, including blacklisted individuals, politically exposed persons, and the OFAC list. The 
                        previous manual process for updating these lists could take up to a day, posing significant legal 
                        risks due to delays. The application I built streamlined this process, ensuring that sensitive data 
                        in the database was updated promptly to maintain compliance and prevent unauthorized individuals 
                        from opening bank accounts. <br/>
                        I utilized SCRUM as an agile methodology method, Vue.js with Vuetify to create a user-friendly front 
                        end and .NET with C# and SQL Server for the backend, implementing efficient stored procedures. The 
                        app automated the extraction of information from Excel and text files and converted JSON data to XML, 
                        as required by SQL Server for data processing. It also enabled the platform to display users matching 
                        any of these lists, allowing them to be marked for removal or flagged with an expiration date to 
                        ensure ongoing compliance. Additionally, the application provided comprehensive access management 
                        controls, improving security and user oversight. This solution reduced the response time for list 
                        updates by 15% compared to the original manual process.
                    </Typography>

                    <Divider variant="middle" sx={{backgroundColor:'white',  marginTop:'17px', marginBottom:'17px' }} />

                </Container>

                {/**************** Charo ****************/}
                <Container sx={{
                    color:'white',
                    textAlign: 'center'
                }}> 
                       <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem',  
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                },
                                fontWeight:'bold'
                            }}
                        >Academic factory of software - Charo | Degree project - Full stack developer</Typography>
                        <Typography variant="body1" gutterBottom 
                            sx={{
                                fontSize: {
                                    xs: '0.7rem', 
                                    sm: '1rem', 
                                    md: '1.2rem',
                                    lg: '1.5rem',
                                }
                            }}
                        >August 2021 - August 2022 | Morelia, Mich.</Typography>
                    
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
                        For my engineering degree project, my teammates and I developed a web application to manage government support programs, 
                        digitizing the entire process and reducing the manual effort by 80%. The application enabled the registration 
                        of citizens, selection of the appropriate support programs, and streamlined approval workflows across 
                        various authorities. Additionally, it included an administrator role to manage the application, log changes 
                        for each support case, and allow for the creation and updating of support programs. <br/>
                        To build the application, I used SCRUM, Bootstrap, CSS, HTML, Laravel, PHP, and MySQL. I tested the application 
                        extensively using PHPUnit, SonarCloud, and Mockery, which helped reduce the response time by 30% in the final product. 
                        I also utilized Git and GitHub for version control and deployed the web application and database on DigitalOcean.
                    </Typography>

                    <Container sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <YouTubeIcon sx={{ 
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
                                    xs: '0.55rem', 
                                    sm: '0.8rem', 
                                    md: '1rem',
                                    lg: '1.2rem',
                                }
                            }}
                            style={{ color:'white', textDecoration:'none' }} 
                            href='https://www.youtube.com/watch?v=dgqLWqBqUCY'
                        >
                            Video about the system, in Spanish
                        </Link>
                    </Container>
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