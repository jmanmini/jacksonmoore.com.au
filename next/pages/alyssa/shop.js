import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
export default function Shop() {
    return (
        <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 64px)', textAlign: 'center', flexDirection: 'column' }}>

            <h1 style={{ fontFamily: 'Rock Salt, cursive' }}>Under construction</h1>
            <p style={{ fontFamily: 'Comfortaa, cursive' }}>
                We're sorry, this page is under construction right now. Come back later when it's finished.<br />In the mean time, feel free to watch this never ending loading spinner.
                </p>
            <CircularProgress style={{ color: 'black' }} />

        </div>
    )
}