import LogoPicture from '../assets/Logo.png';
import { Box, AppBar, Toolbar } from '@mui/material';
import SlideMenu from "./slideMenu";

function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor:'#01080e' }} >
            <Toolbar sx={{ width:'100%' }}>
                <SlideMenu/>

                <Box sx={{ 
                    width: '150px',
                    height: '30px',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <Box
                        component="img"
                        src={ LogoPicture }
                        alt="Personal Logo"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
                
            </Toolbar>
        </AppBar>
    );
}

export default Header;