import React from 'react';
import MyPhoto from '../../assets/FotoTamInf.jpeg';
import { Container, Avatar, Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutMe = () => {
    return (
        <Box 
            sx={{
                width: '100%',
                minHeight: '100vh',
                background: 'linear-gradient(#000, #072d4c)', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: { xs: 6, sm: 8, md: 10 },
                px: { xs: 2, sm: 4, md: 6 },
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
                    About me
                </Typography>
            </Container>
            
            {/* Sección Avatar y Biografía */}
            <Container 
                sx={{
                    color: 'white',
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    mb: 6,
                    gap: { xs: 3, md: 5 }
                }}
            >
                <Avatar 
                    alt="Cristian Miguel Marín Barrera" 
                    src={MyPhoto} 
                    sx={{
                        width: { xs: '140px', sm: '180px', md: '240px', lg: '280px' },
                        height: { xs: '140px', sm: '180px', md: '240px', lg: '280px' },
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)'
                    }}
                />
                
                <Typography 
                    variant="body1" 
                    sx={{
                        fontSize: { xs: '0.85rem', sm: '1rem', md: '1.15rem', lg: '1.25rem' },
                        textAlign: { xs: 'center', md: 'left' },
                        maxWidth: '800px',
                        lineHeight: 1.7
                    }}
                >
                    Results-driven Software Engineer with full-stack experience in <strong>Java, JavaScript, Python, and SQL</strong>. 
                    Graduated in Computer Systems Engineering from Instituto Tecnológico de Morelia with a specialization in 
                    Software Engineering and Mobile Development. Skilled in designing component-level backend features, managing complex 
                    data models, and optimizing database performance within Agile (Scrum/Kanban) environments. Focused on quality-focused 
                    delivery, automated testing, and building scalable software solutions across web and mobile platforms.
                </Typography>
            </Container>

            {/* Enlaces a Redes Sociales */}
            <Container 
                sx={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 2, sm: 4 }
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinkedInIcon sx={{ fontSize: { xs: '24px', sm: '32px', md: '40px' } }} />
                    <Link 
                        sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                        style={{ color: 'white', textDecoration: 'none' }} 
                        href='https://www.linkedin.com/in/cristian-miguel-marin-barrera-936803200/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My profile
                    </Link>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GitHubIcon sx={{ fontSize: { xs: '24px', sm: '32px', md: '40px' } }} />
                    <Link
                        sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                        style={{ color: 'white', textDecoration: 'none' }} 
                        href='https://github.com/Cristian-Miguel'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My repositories
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutMe;