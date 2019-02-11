import React from 'react'
import { render } from 'react-dom'
import Svgel from './svgel'
import './index.css';
import ScrollingColorBackground from 'react-scrolling-color-background'
render((
    <App />
), document.getElementById('root'));
function App() {
    return (
        <div>
            <Svgel></Svgel>
            <p style={{ color: "rgb(171, 134, 28)", textAlign: 'center', width: '100%', fontFamily: 'Script', fontSize: '60.375px' }}>It's Kylie's<br /> 50th!</p>
            <p style={{ color: "rgb(102, 102, 102)", textAlign: 'center', width: '100%', fontFamily: 'Montserrat, sans-serif', fontSize: '14.7px', letterSpacing:'40' }}>
                Feb 23, 2019 | From 7.30PM
                <br />
                At the Moore Bryant Residence
                <br />
                38 Tyrrell Rd, East Dulwich SE22 9NE
            </p>
            <strong style={{ color: "rgb(102, 102, 102)", textAlign: 'center', width: '100%', fontFamily: 'Montserrat, sans-serif', fontSize: '14.7px', letterSpacing:'40' }}>
            RSVP Christian on 07860854375
            <br />
            or Kylie 07472067738
            </strong>
        </div>)
}