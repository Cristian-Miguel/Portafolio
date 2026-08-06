import React from 'react';
import { Container, Box, Typography, Link, Chip, Grid } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const MicroservicesProject = () => {
    // Tecnologías clave del proyecto
    const techStack = [
        'Java (Spring Boot)', 'Hexagonal Architecture', 'DDD Principles',
        'Apache Kafka (SSL)', 'Redis', 'Docker & Docker-Compose',
        'Bash Scripting', 'Zipkin', 'Prometheus', 'Grafana', 'Loki'
    ];

    return (
        <Box 
            sx={{
                width: '100%',
                minHeight: '80vh',
                background: 'linear-gradient(#000, #072d4c)', 
                padding: { xs: '40px 5%', md: '60px 10%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                margin:'0 0 250px 0',
            }}
        >
            {/* Título del Proyecto */}
            <Container sx={{ color: 'white', textAlign: 'center', mb: 3 }}>
                <Typography 
                    variant="h2" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                        fontWeight: 'bold',
                    }}
                >
                    Production-Ready Microservices Architecture
                </Typography>
                
                <Chip 
                    label="In Active Development" 
                    sx={{ 
                        backgroundColor: '#ff9800', 
                        color: 'black', 
                        fontWeight: 'bold',
                        fontSize: { xs: '0.75rem', sm: '0.85rem' } 
                    }} 
                />
            </Container>

            {/* Contenido Principal */}
            <Box 
                sx={{
                    width: { xs: '100%', md: '90%', lg: '80%' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white',
                    mb: 4
                }}
            >
                {/* Descripción General */}
                <Typography 
                    variant="body1" 
                    sx={{
                        fontSize: { xs: '0.9rem', sm: '1.05rem', md: '1.2rem' },
                        textAlign: 'justify',
                        lineHeight: 1.7,
                        mb: 4
                    }}
                >
                    An enterprise-level distributed ecosystem built to demonstrate scalability, 
                    asynchronous communication, and full-stack observability. The orchestration is managed 
                    via a main automation repository that handles cloning microservices, configuring SSL certificates 
                    with custom Bash scripts, and running Docker Compose networks for services like Config, Discovery, Kafka, and Redis.
                </Typography>

                {/* Pilares Arquitectónicos */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ p: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ color: '#4fc3f7', fontWeight: 'bold', mb: 1 }}>
                                Core Backend & Architecture
                            </Typography>
                            <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#e0e0e0' }}>
                                Decoupled microservices built with Java and Spring Boot applying Hexagonal Architecture (Ports & Adapters) and DDD principles to keep the core domain agnostic of external frameworks and databases.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{ p: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ color: '#4fc3f7', fontWeight: 'bold', mb: 1 }}>
                                Event-Driven & Caching
                            </Typography>
                            <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#e0e0e0' }}>
                                Integration of Apache Kafka configured with SSL for secure asynchronous messaging, alongside Redis for high-speed token management and fast distributed caching.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{ p: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ color: '#4fc3f7', fontWeight: 'bold', mb: 1 }}>
                                Telemetry & Observability
                            </Typography>
                            <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#e0e0e0' }}>
                                Full pipeline setup using Zipkin for distributed tracing, Prometheus and Grafana for metrics visualization, and Grafana Loki for centralized log aggregation.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{ p: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ color: '#4fc3f7', fontWeight: 'bold', mb: 1 }}>
                                DevOps & Orchestration
                            </Typography>
                            <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#e0e0e0' }}>
                                Fully containerized via Docker and Docker-Compose, utilizing automated Shell scripts to set up secrets, SSL certificates, and unified docker networks across services.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Listado de Tecnologías (Chips) */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 2 }}>
                    {techStack.map((tech, index) => (
                        <Chip 
                            key={index} 
                            label={tech} 
                            sx={{ backgroundColor: '#074e8c', color: 'white', fontWeight: 'bold' }} 
                        />
                    ))}
                </Box>
            </Box>

            {/* Link a GitHub */}
            <Container 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <GitHub sx={{ fontSize: { xs: '24px', sm: '32px', md: '40px' }, color: 'white' }} />
                <Link
                    sx={{
                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline', color: '#4fc3f7' }
                    }}
                    href='https://github.com/Cristian-Miguel/set_up_news_microservices'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Link to Orchestration Repository
                </Link>
            </Container>
        </Box>
    );
};

export default MicroservicesProject;