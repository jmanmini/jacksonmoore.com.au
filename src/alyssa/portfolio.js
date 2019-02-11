import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function Portfolio() {
    return (
        <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '1150px', display: 'flex', flexWrap: 'wrap' }}>
                <Card style={{ maxWidth: '350px', minWidth: '350px', backgroundColor: 'white', margin: '8px' }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            image={require("./art1.jpg")}
                            height="200"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="title" component="h2" style={{ fontFamily: 'Comfortaa, cursive', fontWeight: 'bold' }}>
                                Test
                            </Typography>
                            <Typography style={{ fontFamily: 'Comfortaa, cursive', marginBottom: 12, }} color="textSecondary">
                                £N/A
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div style={{ maxWidth: '500px', height: '200px', overflow: 'wrap', flex: '1 0 280px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque in libero facilisis vulputate. Etiam eu mauris eu est rhoncus rutrum eu nec enim. Phasellus efficitur lacus vel purus gravida, varius congue ipsum gravida. Nulla aliquam, augue vitae ultrices maximus, elit enim congue leo, eu bibendum risus quam a sem. Nam non molestie nibh. Quisque eros dui, cursus a felis euismod, finibus blandit leo. Nullam et tellus non urna volutpat dignissim. Cras varius viverra elit a convallis. Curabitur pretium scelerisque nisi, vel varius eros pretium porttitor. Pellentesque ac turpis ornare, ornare lacus sit amet, tempus nunc.
                </div>
            </div>
        </div>
    )


}