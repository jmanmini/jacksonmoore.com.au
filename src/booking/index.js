import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Header from './header'
import Booking from './booking'
import firebase from 'firebase/app';
import '@firebase/auth';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
const mainStyles = {
    marginTop: '64px',
    fontFamily: 'Roboto, sans-serif'
}
var config = {
    apiKey: "-",
    authDomain: "booking-7639c.firebaseapp.com",
    databaseURL: "https://booking-7639c.firebaseio.com",
    projectId: "booking-7639c",
    storageBucket: "booking-7639c.appspot.com",
    messagingSenderId: "54189841386"
};
firebase.initializeApp(config);
render((
    <BrowserRouter basename={'/booking/'}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <App />
        </MuiPickersUtilsProvider>
    </BrowserRouter>
), document.getElementById('root'));
function App() {
    return (
        <div>
            <Header></Header>
            <Main style={mainStyles}></Main>
        </div>)
}
function Main() {
    return (
        <main>
            <Switch>
                <Route exact path={`/`} component={Home} />
                <Route path={`/book`} component={Book} />
            </Switch>
        </main>
    )
}
function Home() {
    return (
        <div style={mainStyles} >
            <div style={{ textAlign: 'center' }}>
                <section>
                    <article style={{ "backgroundColor": "#eee", "paddingTop": "100px", "paddingBottom": "100px", "marginLeft": "auto", "marginRight": "auto" }}>
                        <hr style={{ width: '100px' }} />
                        <h2 style={{ fontSize: '50px' }}>Welcome to the 64 Noble St beach house!</h2>
                        <p style={{ fontSize: '18px' }}>Please scroll down for pictures of the house.
                <br /> This small but cozy beach house has four bedrooms, one bathroom and a small living area</p>

                    </article>
                    <div style={{ "backgroundImage": "url(" + require("./beach-min.jpg") + ")", "height": "100vh", "backgroundAttachment": "fixed", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}></div>
                </section>
                <section>
                    <article style={{ backgroundColor: "#eee", "paddingTop": "100px", "paddingBottom": "100px", "marginLeft": "auto", "marginRight": "auto" }}>
                        <hr style={{ width: '100px' }} />
                        <h2 style={{ fontSize: '50px' }}>Heating</h2>
                        <p style={{ fontSize: '18px' }}>The heating for the house is a wood coonara heater,
                <br /> which heats the house all day and night but you need to build the fire and it will take time to
                get going.</p>

                    </article>
                    <div style={{ "backgroundImage": "url(" + require("./fire-min.jpg") + ")", "height": "100vh", "backgroundAttachment": "fixed", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}></div>
                </section>
            </div>
        </div >
    )
}
function Book() {
    return (
        <div style={mainStyles}>
            <Booking></Booking>
        </div>
    )
}

