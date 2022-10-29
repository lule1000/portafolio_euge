import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
const imgLogo = {
    alt: 'logo',
    imgUrl: '/images/logoE.webp'
}

const drawerWidth = 150;
const navItems = [
    {
        name: 'About',
        id: '#about'
    },
    {
        name: 'Skills',
        id: '#skills'
    },
    {
        name: 'Work',
        id: '#work'
    },
    {
        name: 'Contact',
        id: '#contact'
    }
];

function Nav({ window }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const showTitle = useMediaQuery('(min-width:600px)')

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#000' }}>
            <Box>
                <img src={imgLogo.imgUrl} alt={imgLogo.alt} />
            </Box>
            <Divider />
            <List>
                {navItems.map(({ name, id }) => (
                    <ListItem key={name}>
                        <Link href={id} sx={{ textDecoration: 'none' }}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText sx={{ color: '#fff', ":hover": { color: '#ff5800' } }} primary={name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar sx={{ backgroundColor: '#000', padding: 1, height: '10vh', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{ fontSize: '2rem' }} />
                        </IconButton>
                        {
                            showTitle &&
                            <Box>
                                <img src={imgLogo.imgUrl} alt={imgLogo.alt} />
                            </Box>
                        }
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 3 }}>
                            {navItems.map(({ name, id }) => (
                                <Link href={id} key={name} sx={{ textDecoration: 'none' }}>
                                    <Button sx={{ color: '#fff', ":hover": { color: '#ff5800' } }}>
                                        {name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Link href='https://github.com/EugenYepes' target='blanck' sx={{ marginRight: 1 }}>
                            <GitHubIcon sx={{ color: '#fff', fontSize: '2rem' }} />
                        </Link>
                        <Link href='https://www.linkedin.com/in/eugenio-yepes-766098220/' target='blanck' sx={{ marginLeft: 1 }}>
                            <LinkedInIcon sx={{ fontSize: '2rem' }} />
                        </Link>
                    </Box>
                </Toolbar>
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#000', borderRight: '1px solid orange', borderLeft: '1px solid orange' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

export default Nav;