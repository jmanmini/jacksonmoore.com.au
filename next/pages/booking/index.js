import React from 'react'
import Header from '../../src/booking/header'
import Booking from './book'
import Head from 'next/head'
import '@firebase/auth';


const mainStyles = {
    marginTop: '64px',
    fontFamily: 'Roboto, sans-serif'
}



function MainPage() {
    return (
        <div>
            <Head>
                <title>Anglsea Booking</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
            </Head>
            <Header></Header>
            <Home style={mainStyles}></Home>
        </div>)
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
                    <div style={{ "backgroundImage": "url(./beach-min.jpg)", "height": "100vh", "backgroundAttachment": "fixed", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}></div>
                </section>
                <section>
                    <article style={{ backgroundColor: "#eee", "paddingTop": "100px", "paddingBottom": "100px", "marginLeft": "auto", "marginRight": "auto" }}>
                        <hr style={{ width: '100px' }} />
                        <h2 style={{ fontSize: '50px' }}>Heating</h2>
                        <p style={{ fontSize: '18px' }}>The heating for the house is a wood coonara heater,
                <br /> which heats the house all day and night but you need to build the fire and it will take time to
                get going.</p>

                    </article>
                    <div style={{ "backgroundImage": "url(./fire-min.jpg", "height": "100vh", "backgroundAttachment": "fixed", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}></div>
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
export default MainPage
