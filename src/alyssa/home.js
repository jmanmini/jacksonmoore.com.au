import React from 'react'
import Typed from 'react-typed'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TrackVisibility from 'react-on-screen';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import firebase from '@firebase/app';
import '@firebase/database';
import { Link } from 'react-router-dom'
const mainStyles = {
    paddingTop: '64px'
}
var config = {
    apiKey: "AIzaSyD5tuVqK7-FPY_l56qhaEPtdWQs8-IR8cE",
    authDomain: "booking-7639c.firebaseapp.com",
    databaseURL: "https://booking-7639c.firebaseio.com",
    projectId: "booking-7639c",
    storageBucket: "booking-7639c.appspot.com",
    messagingSenderId: "54189841386"
};
firebase.initializeApp(config);
function HomeContent() {
    return (
        <div style={{
            background: "url(" + require('./six.jpg') + ")",
            width: '100%', height: 'calc(100vh - 64px)',
            backgroundPosition: "center center",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            //WebkitTextStroke: "3px white"
        }}>
            <div style={{
                fontFamily: 'Comfortaa, cursive',
                marginLeft: "10%",
                paddingLeft: "16px",
                paddingRight: "16px",
                fontSize: "6vw",
                display: "inline-block",
            }}>
                I'm <div style={{ fontFamily: 'Rock Salt, cursive', display: "inline-block" }}>Alyssa</div>
            </div>
            <br></br>
            <div style={{
                fontFamily: 'Comfortaa, cursive',
                marginLeft: "18%",
                fontSize: "6.5vw",
                display: "inline-block",
                paddingLeft: "16px",
                paddingRight: "16px",
            }}>
                I do <Typed
                    strings={[
                        'art',
                        'long art',
                        'real long art']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    style={{ fontFamily: 'Rock Salt, cursive' }}>
                </Typed>
            </div>
        </div>
    )
}
function PortfolioBrief() {
    return (
        <div style={{
            width: '100%',
            textAlign: 'left',
            fontFamily: 'Comfortaa, cursive',
            paddingBottom: '16px',
            borderRadius: '12px'
        }}>
            <TrackVisibility>
                {({ isVisible }) => <Fade in={isVisible} {...(isVisible ? { timeout: 1000 } : {})}><h1 style={{ marginLeft: '10%' }}>Portfolio Work</h1></Fade>}
            </TrackVisibility>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'left', paddingLeft: '20px', paddingRight: '20px' }}>
                <TrackVisibility offset={400}>
                    <PortfolioCardHome
                        duration={500}
                        num={1}
                    ></PortfolioCardHome>
                </TrackVisibility>
                <TrackVisibility offset={400}>
                    <PortfolioCardHome
                        duration={1000}
                        num={2}
                    ></PortfolioCardHome>
                </TrackVisibility>
                <TrackVisibility offset={400}>
                    <PortfolioCardHome
                        duration={1500}
                        num={3}
                    ></PortfolioCardHome>
                </TrackVisibility>
            </div>
        </div >
    )
}
class PortfolioCardHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Loading...',
            description: 'Loading...',
            price: 'N/A',
            image: 'one.jpg'
        }

    }
    componentDidMount() {
        firebase.database().ref('/alyssa/portfolioCards/Card' + this.props.num).on('value', data => {
            this.setState({
                title: data.val().Title,
                description: data.val().Description,
                price: data.val().Price,
                image: data.val().Image,
            })
        })
    }
    componentWillUnmount() {
        firebase.database().ref('/alyssa/portfolioCards/Card' + this.props.num).off()
    }

    render() {
        return (
            <Grow in={this.props.isVisible} {...(this.props.isVisible ? { timeout: this.props.duration } : {})}>

                <Card style={{ maxWidth: '350px', backgroundColor: 'white', margin: '8px', WebkitTransform: 'translate3d(0,0,0)', marginBottom: '20px', borderRadius: '12px' }}>
                    <CardActionArea>
                        <Link to={`/portfolio`} style={{ textDecoration: 'none' }}>
                            <CardMedia
                                component='img'
                                image={require("./" + this.state.image)}
                                height='194'
                                width='344'
                            />
                            <CardContent style={{ padding: '16px' }}>
                                <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Comfortaa, cursive', fontWeight: 'bold' }}>
                                    {this.state.title}
                                </Typography>
                                <Typography style={{ fontFamily: 'Comfortaa, cursive', marginBottom: 12, }} color="textSecondary">
                                    £{this.state.price}
                                </Typography>
                                <Typography component="p" style={{ fontFamily: 'Roboto' }}>
                                    {this.state.description}
                                </Typography>
                            </CardContent>
                        </Link>
                    </CardActionArea>
                </Card>
            </Grow >
        )
    }
}
export default function Home() {
    return (
        <div style={mainStyles}>
            <HomeContent></HomeContent>
            <PortfolioBrief></PortfolioBrief>
        </div>
    )
}

