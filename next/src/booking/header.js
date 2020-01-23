import React from 'react'
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Home, CalendarToday } from "@material-ui/icons";
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu'
import firebase from 'firebase/app';
import 'firebase/auth'
import Head from 'next/head'
var linkStyles = {
    textDecoration: 'none',
    textAlign: 'center',
    color: 'black'
}
var appBarStyles = {
    boxShadow: 'none',
    color: 'black',
    backgroundColor: 'white',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0px'
}
var toolBar1 = {
    flexGrow: 1
}
var listStyles = {
    fontFamily: 'Roboto, sans-serif'
}
var menuItemStyleLeft = {

    textAlign: 'left',
    paddingLeft: '16px',
    paddingRight: '16px',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '20px',
    width: '110px'

}
var menuItemStyleLeftMobile = {

    textAlign: 'left',
    paddingLeft: '16px',
    paddingRight: '16px',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '20px',
    width: '110px',
    flexGrow: 2

}
var menuItemStyleRight = {
    textAlign: 'right',
    paddingLeft: '16px',
    paddingRight: '16px',
    width: '110px'

}
var menuItemStyleRightMobile = {
    textAlign: 'right',
    paddingLeft: '16px',
    paddingRight: '16px',
    width: '48px'

}
var buttonStyles = {
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'capitalize',
    textAlign: 'center'
}
export default class Header extends React.Component {
    constructor() {
        super();
        this.login = this
            .login
            .bind(this)
        this.logout = this
            .logout
            .bind(this)
        this.handleResize = this
            .handleResize
            .bind(this)
        this.state = {
            open: false,
            openMenu: false,
            photoURL: 'https://journalism.berkeley.edu/wp-content/uploads/profile-placeholder.png',
            user: null
        }
    }
    handleResize() {
        this.forceUpdate()
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);

    }
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyD5tuVqK7-FPY_l56qhaEPtdWQs8-IR8cE",
                authDomain: "booking-7639c.firebaseapp.com",
                databaseURL: "https://booking-7639c.firebaseio.com",
                projectId: "booking-7639c",
                storageBucket: "booking-7639c.appspot.com",
                messagingSenderId: "54189841386"
            });
        }

        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ user, photoURL: user.photoURL });
                }
            })
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    login() {
        firebase
            .auth()
            .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
                const user = result.user;
                this.setState({ user, photoURL: user.photoURL });
                console.log(user)
            });
    }
    logout() {

        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({ user: null, photoURL: 'https://wths.hope.edu/wp-content/uploads/2017/04/profile-placeholder.png' });
            });

    }
    render() {
        const ListItemTextStyled = withStyles({
            primary: {
                fontFamily: 'Roboto, sans-serif'
            }
        })(ListItemText);
        return (
            <header >
                <Head>
                    <title>Anglsea Booking</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
                        rel="stylesheet"></link>
                </Head>
                <SwipeableDrawer
                    anchor='left'
                    open={this.state.open}
                    onClose={() => this.setState({ open: false })}
                    onOpen={() => this.setState({ open: true })}>
                    <div>
                        <List>
                            <Link href='/booking'>
                                <ListItem
                                    button
                                    onClick={() => this.setState({ open: false })}
                                    style={linkStyles}>
                                    <ListItemIcon>
                                        <Home />
                                    </ListItemIcon>
                                    <ListItemTextStyled primary="Home" />
                                </ListItem>
                            </Link>
                            <Link href='/booking/book'>
                                <ListItem
                                    button
                                    onClick={() => this.setState({ open: false })}
                                    style={linkStyles}>
                                    <ListItemIcon>
                                        <CalendarToday />
                                    </ListItemIcon>
                                    <ListItemTextStyled primary="Book" />
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                </SwipeableDrawer>
                <AppBar style={appBarStyles}>
                    <Toolbar style={appBarStyles}>
                        <div
                            style={{
                                paddingLeft: '8px',
                                paddingRight: '8px'
                            }}>
                            <IconButton
                                color="inherit"
                                aria-label="Menu"
                                onClick={() => this.setState({ open: true })}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div style={menuItemStyleLeftMobile}></div>
                        {this.state.user
                            ? <Button onClick={this.logout}>Log Out</Button>
                            : <Button
                                onClick={this.login}
                                style={{
                                    marginRight: '8px'
                                }}>Log In</Button>
                        }
                        {this.state.user
                            ? <img
                                src={this.state.photoURL}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    margin: '8px',
                                    display: 'inline'
                                }}></img>
                            : <img
                                src={this.state.photoURL}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    margin: '8px',
                                    display: 'none'
                                }}></img>
                        }
                    </Toolbar>
                </AppBar>
            </header >
        )
    }
}