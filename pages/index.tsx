import { Link, Card, Col, Container, Grid, Spacer, Text } from "@nextui-org/react"
import Head from "next/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { League_Spartan } from 'next/font/google';
import dynamic from "next/dynamic";
import instgram from "../public/instagram.jpeg";
import github from "../public/coding.jpg";
import linkedin from "../public/linkedin.png";
import Image from "next/image"
import styles from '../src/styles.module.css';
const SvgEl = dynamic(import("../src/svgEl"));

const leagueSpartan = League_Spartan({
    subsets: ['latin'],
    display: 'swap',
});
function App() {
    return (
        <div>
            <Head>
                <title>Jackson Moore</title>
                <meta name="description" content="Jackson Moore: Web Developer" />
            </Head>

            <SvgEl></SvgEl>
            <Container lg css={{ zIndex: 1 }}>

                <Grid.Container gap={2} justify="center" alignItems="center" css={{ height: "100vh" }}>
                    <div>

                        <Text h1 size={100} css={{
                            textGradient: "90deg, rgba(33,63,95,1) 10%, rgba(255,198,80,1) 40%",
                            paddingRight: "10px"
                        }} className={leagueSpartan.className}>Jackson Moore</Text>
                        <Text h2>
                            Web Developer
                        </Text>
                        <Link isExternal color="text" href="mailto:jacksonsamuelmoore@gmail.com">jacksonsamuelmoore@gmail.com</Link>



                        <Grid.Container gap={2} justify="center" style={{ paddingLeft: 0 }}>
                            <Grid xs={12} sm={4}>
                                <Card isHoverable isPressable onPress={() => { document.location = "https://instagram.com/jacksonsamuelmoore" }} css={{
                                    height: '340px',
                                    '&:hover': {
                                        backdropFilter: 'blur(10px)',
                                    },
                                }}>
                                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, pointerEvents: 'none' }}>
                                        <Col>
                                            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                                Instagram
                                            </Text>
                                            <Text h4 color="white">
                                                Photography
                                            </Text>
                                        </Col>
                                    </Card.Header>
                                    <Image src={instgram} alt={""}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                        placeholder="blur"
                                        className={styles.darken}>
                                    </Image>
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={faInstagram} size="4x" color="white" />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid xs={12} sm={4}>
                                <Card isHoverable isPressable onPress={() => { document.location = "https://github.com/jacksonsamuelmoore" }} css={{ height: '340px' }}>
                                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, pointerEvents: 'none' }} >
                                        <Col>
                                            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                                Gihtub
                                            </Text>
                                            <Text h4 color="white">
                                                Projects
                                            </Text>
                                        </Col>
                                    </Card.Header>
                                    <Image src={github} alt={""}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                        placeholder="blur"
                                        className={styles.darken}
                                    >
                                    </Image>
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={faGithub} size="4x" color="white" />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid xs={12} sm={4}>
                                <Card isHoverable isPressable onPress={() => { document.location = "https://www.linkedin.com/in/jacksonsamuelmoore/" }} css={{ height: '340px' }}>
                                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, pointerEvents: 'none' }}>
                                        <Col>
                                            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                                LinkedIn
                                            </Text>
                                            <Text h4 color="white">
                                                Experience
                                            </Text>
                                        </Col>
                                    </Card.Header>
                                    <Image src={linkedin} alt={""}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                        placeholder="blur"
                                        className={styles.darken}
                                    >
                                    </Image>
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={faLinkedin} size="4x" color="white" />
                                    </div>
                                </Card>
                            </Grid>
                        </Grid.Container>

                    </div>
                </Grid.Container>
            </Container>
        </div >
    )
}
export default App