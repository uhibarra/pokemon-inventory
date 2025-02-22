import React, {useState} from "react";
import { Drawer as MUIDrawer,
    ListItem, 
    List, 
    ListItemText, 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline, 
    Box,
    TextField
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme/themes";
import { DataTable } from '../../components';


const drawerWidth = 240;

const myStyles = {
    appBar : {
          transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      width: drawerWidth,
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
        display: 'flex',
    },
    toolbar_button: {
        marginLeft: 'auto',
        backgroundColor: '#FFDE00',
        '&:hover':{
            backgroundColor: '#3B4CCA'
        }
    }
  };

export const Dashboard = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const itemsList = [
      {
        text: 'Home',
        onClick: () => navigate('/')
      },
      {
        text: 'Sign In',
        onClick: () => navigate('/signin')
      }
    ]

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />

            <AppBar
                sx={open ? myStyles.appBarShift : myStyles.appBar}
                position='fixed'>
                    <Toolbar sx={myStyles.toolbar}>
                        <IconButton 
                            color='inherit'
                            aria-label='open drawer'
                            onClick={handleDrawerOpen}
                            edge='start'
                            sx={open ? myStyles.hide : myStyles.menuButton}>
                                <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' noWrap>Dashboard</Typography>
                        <TextField id='outlined-basic' label='Enter a Pokemon name! (e.g. Blastoise)' variant='outlined'/>
                        <Button sx={myStyles.toolbar_button}>Add New Pokemon</Button>
                    </Toolbar>
            </AppBar>

            <MUIDrawer
                sx={open ? myStyles.drawer : myStyles.hide}
                variant='persistent'
                anchor='left'
                open={open}
                style={{width: drawerWidth}}>
                    <Box sx={myStyles.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <CatchingPokemonIcon/> : <CatchingPokemonIcon/>}
                        </IconButton>
                    </Box>
                    <Divider/>
                    <List>
                        { itemsList.map( (item) => {
                            const { text, onClick } = item;
                            return (
                                <ListItem button key={text} onClick={onClick}>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            );
                        } )}
                    </List>
            </MUIDrawer>

            <Box sx={myStyles.content}>
                <Box sx={myStyles.drawerHeader}>
                </Box>
                <h1>Welcome to the Dash 😎</h1>
                <DataTable/>
            </Box>
        </Box>
    )
}