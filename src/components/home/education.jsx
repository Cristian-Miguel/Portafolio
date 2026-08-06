import React from 'react';
import { Container, Box, Typography, Grid, Chip, Divider } from '@mui/material';

const Education = () => {
    // Datos de Habilidades estructurados desde tu CV
    const skillsData = {
        languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'C# (.NET)', 'SQL'],
        frameworks: ['Node.js', 'React', 'Vue.js', 'Laravel', 'CodeIgniter', 'Hibernate', 'Flutter'],
        toolsAndTesting: ['MySQL', 'SQL Server', 'Postman', 'Git', 'Unit Testing', 'PHPUnit', 'SonarCloud'],
        methodologies: ['Agile / Scrum', 'Kanban', 'Component-Level Design']
    };

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
            <Container sx={{ color: 'white', textAlign: 'center', mb: 5 }}>
                <Typography 
                    variant="h2" 
                    gutterBottom 
                    sx={{
                        fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                        fontWeight: 'bold'
                    }}
                >
                    Education & Skills
                </Typography>
            </Container>

            <Container maxWidth="lg" sx={{ color: 'white' }}>
                <Grid container spacing={4}>
                    
                    {/* Columna Izquierda: Educación e Idiomas */}
                    <Grid item xs={12} md={6}>
                        {/* Sección Educación */}
                        <Box sx={{ mb: 4 }}>
                            <Typography 
                                variant="h4" 
                                gutterBottom 
                                sx={{
                                    fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
                                    fontWeight: 'bold',
                                    color: '#4fc3f7'
                                }}
                            >
                                Education
                            </Typography>
                            
                            <Typography 
                                variant="h5" 
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: 'bold'
                                }}
                            >
                                Instituto Tecnológico de Morelia
                            </Typography>

                            <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#b0bec5', mb: 1 }}>
                                Computer Systems Engineering | Graduation: April 2023
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>GPA:</strong> 85.81
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Specialization:</strong> Software Engineering and Mobile Development
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
                                <strong>Relevant Coursework:</strong> Distributed Systems, Scalable Software Development
                            </Typography>
                        </Box>

                        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', my: 3 }} />

                        {/* Sección Idiomas */}
                        <Box>
                            <Typography 
                                variant="h4" 
                                gutterBottom 
                                sx={{
                                    fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
                                    fontWeight: 'bold',
                                    color: '#4fc3f7'
                                }}
                            >
                                Languages
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 0.5 }}>
                                • <strong>Spanish:</strong> Native
                            </Typography>
                            <Typography variant="body1">
                                • <strong>English:</strong> Intermediate / Advanced (B2)
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Columna Derecha: Technical Skills */}
                    <Grid item xs={12} md={6}>
                        <Typography 
                            variant="h4" 
                            gutterBottom 
                            sx={{
                                fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
                                fontWeight: 'bold',
                                color: '#4fc3f7',
                                mb: 3
                            }}
                        >
                            Technical Skills
                        </Typography>

                        {/* Programming Languages */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Programming Languages
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {skillsData.languages.map((skill, index) => (
                                    <Chip 
                                        key={index} 
                                        label={skill} 
                                        sx={{ backgroundColor: '#074e8c', color: 'white', fontWeight: '500' }} 
                                    />
                                ))}
                            </Box>
                        </Box>

                        {/* Frameworks & Libraries */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Frameworks & Libraries
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {skillsData.frameworks.map((skill, index) => (
                                    <Chip 
                                        key={index} 
                                        label={skill} 
                                        sx={{ backgroundColor: '#00695c', color: 'white', fontWeight: '500' }} 
                                    />
                                ))}
                            </Box>
                        </Box>

                        {/* Tools, Databases & Testing */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Tools, Databases & Testing
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {skillsData.toolsAndTesting.map((skill, index) => (
                                    <Chip 
                                        key={index} 
                                        label={skill} 
                                        sx={{ backgroundColor: '#4a148c', color: 'white', fontWeight: '500' }} 
                                    />
                                ))}
                            </Box>
                        </Box>

                        {/* Methodologies */}
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Methodologies & Design
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {skillsData.methodologies.map((skill, index) => (
                                    <Chip 
                                        key={index} 
                                        label={skill} 
                                        sx={{ backgroundColor: '#37474f', color: 'white', fontWeight: '500' }} 
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Education;