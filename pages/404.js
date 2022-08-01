import { Text, Card, Container, Grid, Col } from "@nextui-org/react"
export default function Custom404() {
    return (
        <div>
            <meta charSet="utf-8" />
            <title>Page Not Found</title>
            <Container lg >
                <Grid.Container gap={2} justify="center" alignItems="center" css={{ height: "100vh" }}>

                    <Card variant="bordered" isHoverable css={{ mw: "400px" }}>
                        <Card.Header>
                            <Col>
                                <Text h1>404</Text>
                                <Text h4>Page Not Found</Text>
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            The specified file was not found on this website. Please check the URL for
                            mistakes and try again.
                        </Card.Body>
                    </Card>
                </Grid.Container>
            </Container>
        </div>

    )
}