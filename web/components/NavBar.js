import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import MobileDrawer from './Drawer';
import Link from 'next/link'
import { Provider, Heading, Subhead, NavLink, Relative, Absolute, Small, Pre } from 'rebass'
import {
    Hero, CallToAction, ScrollDownIndicator, Flex, Feature, Section, Checklist, Contributor
} from 'react-landing-page'
import { BetaButton } from './BetaButton';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // marginBottom: '1rem',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: '#000',
    },
    toolbar: theme.mixins.toolbar,
    hamburger: {
        // display: 'flex',
        // // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'none',
        // },
        // [theme.breakpoints.up('md')]: {
        //     display: 'none',
        // },
        // [theme.breakpoints.up('lg')]: {
        //     display: 'none',
        // },
        // [theme.breakpoints.up('xl')]: {
        //     display: 'none',
        // },
    },
}));

export default function NavBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [anchor, setanchor] = useState("left");

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar>
                    <NavLink href="/" fontSize={3}>skillShack(⚡);</NavLink>
                    <NavLink href="#" ml='auto' style={{ visibility: "hidden" }}>Sign Up!</NavLink>
                    <BetaButton />
                    <Button variant="contained" color="primary" ml='auto'>
                        <a href="https://forms.gle/pxkC7VqkKqFVkS1s6">
                            Sign Up!
                        </a>
                    </Button>
                    {/* <NavLink href="#">Link 2</NavLink> */}
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {<MobileDrawer toggleDrawer={toggleDrawer} />}
            </Drawer>
        </div>
    );
}
