import { Button, Card, Container, Grid, Spacer, Text } from "@nextui-org/react"
import Head from "next/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import dynamic from "next/dynamic";
const SvgEl = dynamic(import("../src/svgEl"));
function App() {
    return (
        <div>
            <Head>
                <title>Jackson Moore</title>
                <meta name="description" content="Jackson Moore: Web Developer" />
            </Head>
            <style jsx>
                {
                    ` @font-face {
                        font-family: spartan;
                        src: url("./work/LeagueSpartan-Bold.otf");
                        font-display: swap; 
                    }
                    @font-face {
                        font-family: indiference;
                        src: url("./work/GlacialIndifference-Italic.otf");
                        font-display: swap; 
                    }
                     `
                }</style>

            <SvgEl></SvgEl>
            <Container lg>

                <Grid.Container gap={2} justify="center" alignItems="center" css={{ height: "100vh" }}>
                    <div>

                        <Text h1 size={100} css={{
                            textGradient: "90deg, rgba(33,63,95,1) 59%, rgba(255,198,80,1) 100%",
                            paddingRight: "10px"
                        }}>Jackson Moore</Text>
                        <Card isHoverable>
                            <Card.Body>
                                <Text b>
                                    This page is undergoing some redevelopment to make it less stale and out of date.<br></br>
                                </Text>
                                <Text   >In the mean time, contact me</Text>
                            </Card.Body>
                            <Card.Divider></Card.Divider>
                            <Card.Footer>


                                <Button auto onClick={() => window.location.href = "mailto:jacksonsamuelmoore@gmail.com"}><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></Button>
                                <Spacer x={0.5}></Spacer>
                                <Button auto onClick={() => window.location.href = "https://www.linkedin.com/in/jackson-moore-364703205/"}><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></Button>
                                <Spacer x={0.5} ></Spacer>
                                <Button auto onClick={() => window.location.href = "https://www.instagram.com/jacksonsamuelmoore/"}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Button>
                                <Spacer x={0.5}></Spacer>

                                <Button auto onClick={() => window.location.href = "https://twitter.com/jacksonsmoore"}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </Grid.Container>
            </Container>
        </div>
    )
}
export default App