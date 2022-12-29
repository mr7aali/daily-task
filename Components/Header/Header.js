import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Link from 'next/link';
import { AuthContext } from '../contexts/AuthProvider';


const drawerWidth = 240;


function DrawerAppBar(props) {

    const { user, LogOut } = React.useContext(AuthContext);
    console.log(user?.uid);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>


          
          
            <Typography variant="h6" sx={{ my: 2, display: 'none' }}>
                MUI
            </Typography>
            <Divider />
            <List>


                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>

                        <ListItemText>Add Task</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>

                        <ListItemText>My Task</ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>

                        <ListItemText>Compiled Task</ListItemText>
                    </ListItemButton>
                </ListItem>




                {user?.uid ?
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>

                            <ListItemText>Log Out</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    :
                    <>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>

                                <ListItemText>Login</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>

                                <ListItemText>Register</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </>


                }






            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar component="nav">
                <Container>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'node', md: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>


                            <Link href='/'  >
                                <Button sx={{ color: '#fff', fontSize: '18px' }}>Add Task</Button>
                            </Link>
                            <Link href='/MyTask' >
                                <Button sx={{ color: '#fff', fontSize: '18px' }}>My Task</Button>
                            </Link>

                            <Link href='/' >
                                <Button sx={{ color: '#fff', fontSize: '18px' }}>Complited Task</Button>
                            </Link>


                            {
                                user?.uid ?

                                    <Link href={'/'} >
                                        <Button

                                            onClick={LogOut}
                                            sx={{
                                                color: '#fff',
                                                fontSize: '18px',
                                                marginLeft: {
                                                    xs: '0px',
                                                    sm: '0px',
                                                    md: '0px',
                                                    lg: '150px',
                                                    xl: '150px'
                                                }
                                            }}>Logout</Button>
                                    </Link>

                                    :
                                    <>


                                        <Link href='/HandleUser/Login' >
                                            <Button sx={{
                                                color: '#fff',
                                                fontSize: '18px',
                                                marginLeft: {
                                                    xs: '0px',
                                                    sm: '0px',
                                                    md: '0px',
                                                    lg: '150px',
                                                    xl: '150px'
                                                }
                                            }}>Login</Button>
                                        </Link>

                                        <Link href='/HandleUser/Register' >
                                            <Button sx={{ color: '#fff', fontSize: '18px' }}>Register</Button>
                                        </Link>
                                    </>
                            }

                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" >
                <Toolbar />

            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;