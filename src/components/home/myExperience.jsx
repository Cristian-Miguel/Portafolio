import React from 'react';
import { Container, Box, Typography, Link, Divider } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const MyExperience = () => {
    return (
        <Box 
            sx={{
                width: '100%',
                marginTop: '150px',
                padding: { xs: '40px 5%', md: '60px 10%' },
                display: 'flex',
                flexDirection: 'column',
                justify: 'center',
                alignItems: 'center',
                background: 'linear-gradient(#000, #072d4c)',
                boxSizing: 'border-box'
            }}
        >
            {/* Título Principal */}
            <Container sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
                <Typography 
                    variant="h2" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                        fontWeight: 'bold'
                    }}
                >
                    Experience
                </Typography>
            </Container>

            {/**************** Secretaría de Educación Pública ****************/}
            <Container sx={{ color: 'white', textAlign: 'center' }}> 
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        fontWeight: 'bold'
                    }}
                >
                    Secretaría de Educación Pública | Software Analyst / Developer
                </Typography>

                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, mb: 2 }}
                >
                    May 2025 - Present | Morelia, Mich.
                </Typography>
                
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' },
                        textAlign: 'justify',
                        lineHeight: 1.6
                    }}
                >
                    Designed and delivered web and desktop applications to optimize administrative and educational processes. 
                    Automated mass data processing (payroll) using Python scripts for PDF, Excel, and CSV files, and implemented 
                    OCR solutions for automated data extraction and analysis from scanned documentation. Maintained backend systems 
                    using PHP (CodeIgniter), JavaScript, MySQL, and SQLite managed under Git.
                </Typography>

                <Divider variant="middle" sx={{ backgroundColor: 'white', my: 4 }} />
            </Container>

            {/**************** FactureApp ****************/}
            <Container sx={{ color: 'white', textAlign: 'center' }}> 
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        fontWeight: 'bold'
                    }}
                >
                    FactureApp | Jr Full Stack Developer & Jr Java Developer
                </Typography>

                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, mb: 2 }}
                >
                    September 2023 - May 2025 | Morelia, Mich.
                </Typography>
                
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' },
                        textAlign: 'justify',
                        lineHeight: 1.6
                    }}
                >
                    At FactureApp Inc., I developed new modules for mobile and web applications using Flutter, while continuously 
                    maintaining existing features and publishing updates to the App Store (iOS) and Play Store (Android). Managed API 
                    solutions using Java, Servlet, RESTEasy, and JBoss, significantly reducing response times and error rates. Upgraded 
                    the "Carta Porte" module from version 3.0 to 3.1 for SAT compliance, enhancing XML generation, digital signatures, 
                    and error handling. Built internal beta versions for QA bug testing, generated PDF and Excel reports using JasperSoft 
                    and Apache POI, created stored procedures in MySQL for efficient data handling, and collaborated in an Agile 
                    (Kanban) environment to cut development response times by 20%.
                </Typography>

                <Divider variant="middle" sx={{ backgroundColor: 'white', my: 4 }} />
            </Container>
            
            {/**************** Caja Morelia Valladolid ****************/}
            <Container sx={{ color: 'white', textAlign: 'center' }}> 
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        fontWeight: 'bold'
                    }}
                >
                    Caja Morelia Valladolid | Full Stack Intern
                </Typography>

                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, mb: 2 }}
                >
                    September 2022 - March 2023 | Morelia, Mich.
                </Typography> 
                
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' },
                        textAlign: 'justify',
                        lineHeight: 1.6
                    }}
                >
                    At Caja Morelia Valladolid, I developed, designed, and managed a new application to enhance the bank's anti-money 
                    laundering processes. This application automated the management of critical lists, including blacklisted individuals, 
                    politically exposed persons, and the OFAC list. Utilizing SCRUM, Vue.js with Vuetify, .NET with C#, and SQL Server, 
                    I automated the extraction of data from Excel/TXT files and JSON-to-XML processing. This solution enabled ongoing 
                    compliance tracking and user role access management, reducing response times for list updates by 15% compared to 
                    the previous manual process.
                </Typography>

                <Divider variant="middle" sx={{ backgroundColor: 'white', my: 4 }} />
            </Container>

            {/**************** Academic Software Factory - Charo ****************/}
            <Container sx={{ color: 'white', textAlign: 'center' }}> 
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        fontWeight: 'bold'
                    }}
                >
                    Academic Software Factory - Charo Government | Full Stack Developer (Degree Project)
                </Typography>

                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, mb: 2 }}
                >
                    August 2021 - August 2022 | Morelia, Mich.
                </Typography>
                
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' },
                        textAlign: 'justify',
                        lineHeight: 1.6
                    }}
                >
                    Developed a scalable web application to digitize government support program workflows, reducing manual effort by 80%. 
                    Built using SCRUM, Bootstrap, Laravel, PHP, and MySQL. Enhanced system performance by 30% through rigorous testing 
                    with PHPUnit, SonarCloud, and Mockery. Managed version control with Git/GitHub and deployed the platform and database 
                    on DigitalOcean.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                    <YouTubeIcon sx={{ fontSize: { xs: '20px', sm: '30px', md: '40px' }, mr: 1 }} />
                    <Link 
                        sx={{ fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' } }}
                        style={{ color: 'white', textDecoration: 'none' }} 
                        href='https://www.youtube.com/watch?v=dgqLWqBqUCY'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Video about the system, in Spanish
                    </Link>
                </Box>

                <Divider variant="middle" sx={{ backgroundColor: 'white', my: 4 }} />
            </Container>

            {/**************** Academic Software Factory - Tandex ****************/}
            <Container sx={{ color: 'white', textAlign: 'center' }}> 
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        fontWeight: 'bold'
                    }}
                >
                    Academic Software Factory (ITM) | Full Stack Developer (School Project)
                </Typography>

                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, mb: 2 }}
                >
                    January 2021 - July 2021 | Morelia, Mich.
                </Typography>
                
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' },
                        textAlign: 'justify',
                        lineHeight: 1.6
                    }}
                >
                    Developed a web platform to automate product uploading and publishing to WooCommerce stores. 
                    Utilized React, Node.js, MySQL, and REST APIs to establish seamless communication with WooCommerce.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                    <YouTubeIcon sx={{ fontSize: { xs: '20px', sm: '30px', md: '40px' }, mr: 1 }} />
                    <Link 
                        sx={{ fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' } }}
                        style={{ color: 'white', textDecoration: 'none' }} 
                        href='https://www.youtube.com/watch?v=SObRbtKyNCY'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Video about the system, in Spanish
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default MyExperience;