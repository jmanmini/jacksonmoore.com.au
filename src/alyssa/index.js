import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";
import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './header'
const Home = lazy(() => import('./home'));
const Portfolio = lazy(() => import('./portfolio'));
const Shop = lazy(() => import('./shop'));
const mainStyles = {
    paddingTop: '64px'
}
render((
    <BrowserRouter basename={'/alyssa/'}>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

function App() {
    return (
        <div>
            <Header />
            <Main style={mainStyles}></Main>
        </div>)
}
function Main() {
    return (
        <main>
            <Suspense fallback={<div style={{
                paddingTop: '64px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 64px)'
            }}><CircularProgress style={{ color: 'black' }} /></div>}>
                <Switch>
                    <Route exact path={`/`} component={Home} />
                    <Route path={`/portfolio`} component={Portfolio} />
                    <Route path={`/shop`} component={Shop} />
                </Switch>
            </Suspense>
        </main>
    )
}


