import {Link} from "react-router-dom"
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { StyledHeader } from "../header/style";
import "./style.css";
import * as React from 'react';
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
import SelectComponent from "../select";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
/* const navItems = ['Menu', 'Admin', 'Sair']; */

export default function NavBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { userInfo } = useContext(UserContext)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            <img className="logo" src={userInfo.logo} alt="logo da empresa" />
        </Typography>
        <Divider />
        <List>
            <ul className="boxNavOptions-mobile">
                <li className="container-nav">
                    <Link className="option-nav" to="/menu">Sobre nós</Link>
                </li>
                <li className="container-nav">
                    <Link className="option-nav" to="/admin">Serviços</Link>
                </li>
                <li className="container-nav">
                    <Link className="option-nav" to="/">Contatos</Link>
                </li>
                <li className="container-nav">
                    <Link className="option-nav" to="/">Atualizações</Link>
                </li>
            </ul>
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        
        <Box sx={{ display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0)'}}>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: 'rgba(255, 255, 255, 0)'}} component="nav">
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
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                <img className="logo" src={userInfo.logo} alt="logo da empresa" />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <ul className="boxNavOptions">
                    <li className="container-desktop">
                        <Link className="option-nav" to="/menu">Sobre nós</Link>
                    </li>
                    <li className="container-desktop">
                        <SelectComponent/>
                    </li>
                    <li className="container-desktop">
                        <Link className="option-nav" to="/">Contatos</Link>
                    </li>
                    <li className="container-desktop">
                        <Link className="option-nav" to="/">Atualizações</Link>
                    </li>
                </ul>
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
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </Box>
        <Box component="main">
            <Toolbar />
        </Box>
        </Box>
        
    );
}



