import React from 'react'

import {
    AppBar, Toolbar,
    Button, IconButton,
    SwipeableDrawer,
    List, ListItem, ListItemIcon, ListItemText,
    Menu, MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {
    Share,
    PhotoAlbum,
    Home,
    Shop
} from "@material-ui/icons";
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTumblr, faPatreon, faPinterest } from '@fortawesome/free-brands-svg-icons'
import Fab from '@material-ui/core/Fab';
import Link from 'next/link'




/* 
 Styles
       */
var linkStyles = {
    textDecoration: 'none',
    textAlign: 'center',
    color: 'black',
}
var appBarStyles = {
    boxShadow: 'none',
    color: 'black',
    backgroundColor: 'white',
    fontFamily: 'Comfortaa, cursive',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0px'
}
var toolBar1 = {
    flexGrow: 1,
}
var listStyles = {
    fontFamily: 'Comfortaa, cursive',
}
var menuItemStyleLeft = {

    textAlign: 'left',
    paddingLeft: '16px',
    paddingRight: '16px',
    fontFamily: 'Rock Salt, cursive',
    fontSize: '20px',
    width: '110px'


}
var menuItemStyleLeftMobile = {

    textAlign: 'left',
    paddingLeft: '16px',
    paddingRight: '16px',
    fontFamily: 'Rock Salt, cursive',
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
    fontFamily: 'Comfortaa, cursive',
    textTransform: 'capitalize',
    textAlign: 'center'
}

/* 
  Components
            */
class Sharebutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    handleClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose() {
        this.setState({ anchorEl: null });
    };
    render() {
        const { anchorEl } = this.state;
        return (
            <div style={this.props.directionStyles}>
                <IconButton color="inherit" onClick={this.handleClick}>
                    <Share />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    style={{ borderRadius: '12px' }}
                >
                    <MenuItem style={listStyles} onClick={() => window.location = "https://www.instagram.com/lyss_abyss_/"}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faInstagram} />
                        </ListItemIcon>
                        Instagram
                    </MenuItem>
                    <MenuItem style={listStyles} onClick={() => window.location = "http://artemisdoodles.tumblr.com/"}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTumblr} />
                        </ListItemIcon>
                        Tumblr
                    </MenuItem>
                    <MenuItem style={listStyles} onClick={() => window.location = "https://www.patreon.com/lyssabyss/"}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faPatreon} />
                        </ListItemIcon>
                        Patreon
                    </MenuItem>
                    <MenuItem style={listStyles} onClick={() => window.location = "https://www.pinterest.com/lyssacoppock/"}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faPinterest} />
                        </ListItemIcon>
                        Pintrest
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}
export default class Header extends React.Component {
    constructor() {
        super();
        this.handleResize = this.handleResize.bind(this)
        this.state = {
            open: false,
            openMenu: false
        }
    }
    handleResize() {
        this.forceUpdate()
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        const ListItemTextStyled = withStyles({
            primary: {
                fontFamily: 'Comfortaa, cursive'
            },
        })(ListItemText);
        if (false) {
            return (

                <header>
                    <SwipeableDrawer
                        anchor='bottom'
                        open={this.state.open}
                        onClose={() => this.setState({ open: false })}
                        onOpen={() => this.setState({ open: true })}
                        style={{ borderRadius: '12px' }}
                    >
                        <div>
                            <List>
                                <Link href='/alyssa' style={linkStyles}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Home />
                                        </ListItemIcon>
                                        <ListItemTextStyled primary="Home" />
                                    </ListItem>
                                </Link>
                                <Link href='/alyssa/portfolio' style={linkStyles}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <PhotoAlbum />
                                        </ListItemIcon>
                                        <ListItemTextStyled primary="Portfolio" />
                                    </ListItem>
                                </Link>
                                <Link href='/alyssa/shop' style={linkStyles}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <Shop />
                                        </ListItemIcon>
                                        <ListItemTextStyled primary="Shop" />
                                    </ListItem>
                                </Link>
                            </List>
                        </div>
                    </SwipeableDrawer>
                    <AppBar style={appBarStyles}>
                        <Toolbar style={appBarStyles}>
                            <div style={{
                                paddingLeft: '8px',
                                paddingRight: '8px',
                            }}>
                                <IconButton color="inherit" aria-label="Menu" onClick={() => this.setState({ open: true })}>
                                    <MenuIcon />
                                </IconButton>
                            </div>
                            <div style={menuItemStyleLeftMobile}>
                                Alyssa C.
                            </div>
                            <Sharebutton directionStyles={menuItemStyleRightMobile}></Sharebutton>
                        </Toolbar>
                    </AppBar>
                </header >
            );
        }
        else {
            return (

                <header>
                    <AppBar style={appBarStyles}>
                        <Toolbar style={appBarStyles}>
                            <div style={menuItemStyleLeft}>
                                Alyssa C.
                            </div>
                            <div id='bob' style={toolBar1}>
                                <Link to={`/`} style={linkStyles}>
                                    <Button style={buttonStyles}>
                                        Home
                                </Button>
                                </Link>
                                <Link to={`/portfolio`} style={linkStyles}>
                                    <Button style={buttonStyles}>
                                        Portfolio
                                    </Button>
                                </Link>
                                <Link to={`/shop`} style={linkStyles}>
                                    <Button style={buttonStyles}>
                                        Shop
                                    </Button>
                                </Link>
                            </div>
                            <Sharebutton directionStyles={menuItemStyleRight}></Sharebutton>
                        </Toolbar>
                    </AppBar>
                </header >
            );
        }
    }
}
