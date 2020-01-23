import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ScrollingColorBackground from 'react-scrolling-color-background'
import Header from '../../src/alyssa/header'

export default function Portfolio() {
    return (
        <div>
            <Header></Header>
            <ScrollingColorBackground
                selector='.js-color-stop[data-background-color]'
                colorDataAttribute='data-background-color'
                initialRgb='rgb(0, 0, 0)'
                style={{
                    zIndex: '-1',
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    bottom: "0px",
                    right: "0px"
                }}></ScrollingColorBackground>
            <div
                style={{
                    paddingTop: '64px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 'calc(100vh - 64px)'
                }}
                data-background-color='rgb(255, 255, 255)'
                className='js-color-stop'>
                <div
                    style={{
                        maxWidth: '1150px',
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>
                    <Card
                        style={{
                            maxWidth: '350px',
                            minWidth: '350px',
                            backgroundColor: 'white',
                            margin: '8px',
                            borderRadius: '12px'
                        }}>
                        <CardActionArea>
                            <CardMedia component='img' image={"./art1.jpg"} height="200" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="title"
                                    component="h2"
                                    style={{
                                        fontFamily: 'Comfortaa, cursive',
                                        fontWeight: 'bold'
                                    }}>
                                    Test
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: 'Comfortaa, cursive',
                                        marginBottom: 12
                                    }}
                                    color="textSecondary">
                                    £N/A
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <div
                        style={{
                            maxWidth: '500px',
                            minHeight: '200px',
                            overflow: 'wrap',
                            flex: '1 0 300px',
                            margin: '16px',
                            fontFamily: 'Roboto'
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque in
                        libero facilisis vulputate. Etiam eu mauris eu est rhoncus rutrum eu nec enim.
                        Phasellus efficitur lacus vel purus gravida, varius congue ipsum gravida. Nulla
                        aliquam, augue vitae ultrices maximus, elit enim congue leo, eu bibendum risus
                        quam a sem. Nam non molestie nibh. Quisque eros dui, cursus a felis euismod,
                        finibus blandit leo. Nullam et tellus non urna volutpat dignissim. Cras varius
                        viverra elit a convallis. Curabitur pretium scelerisque nisi, vel varius eros
                        pretium porttitor. Pellentesque ac turpis ornare, ornare lacus sit amet, tempus
                        nunc.
                    </div>
                </div>
            </div>
            <div
                style={{
                    paddingTop: '64px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: 'calc(100vh - 64px)'
                }}
                data-background-color='rgb(-10, -10, -10)'
                className='js-color-stop'>
                <div
                    style={{
                        maxWidth: '1150px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row-reverse'
                    }}>
                    <Card
                        style={{
                            maxWidth: '350px',
                            minWidth: '350px',
                            backgroundColor: 'white',
                            margin: '8px',
                            borderRadius: '12px'
                        }}>
                        <CardActionArea>
                            <CardMedia component='img' image={"./art1.jpg"} height="200" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="title"
                                    component="h2"
                                    style={{
                                        fontFamily: 'Comfortaa, cursive',
                                        fontWeight: 'bold'
                                    }}>
                                    Test
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: 'Comfortaa, cursive',
                                        marginBottom: 12
                                    }}
                                    color="textSecondary">
                                    £N/A
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <div
                        style={{
                            maxWidth: '500px',
                            minHeight: '200px',
                            overflow: 'wrap',
                            flex: '1 0 300px',
                            margin: '16px',
                            fontFamily: 'Roboto',
                            color: 'white',
                            textAlign: 'right'
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque in
                        libero facilisis vulputate. Etiam eu mauris eu est rhoncus rutrum eu nec enim.
                        Phasellus efficitur lacus vel purus gravida, varius congue ipsum gravida. Nulla
                        aliquam, augue vitae ultrices maximus, elit enim congue leo, eu bibendum risus
                        quam a sem. Nam non molestie nibh. Quisque eros dui, cursus a felis euismod,
                        finibus blandit leo. Nullam et tellus non urna volutpat dignissim. Cras varius
                        viverra elit a convallis. Curabitur pretium scelerisque nisi, vel varius eros
                        pretium porttitor. Pellentesque ac turpis ornare, ornare lacus sit amet, tempus
                        nunc.
                    </div>
                </div>
            </div>
        </div>
    )

}