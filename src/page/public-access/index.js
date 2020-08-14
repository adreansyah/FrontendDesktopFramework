import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/image/logo.png';
import { Container, Segment, Row, Text, Button, Col } from '@elevenia/master-ui/components/Atom';

const Layout = props => {
    document.title = props.title;
    return (
        <Container>
            <Segment className="content">
                <Row className="u-al-items-center u-js-center u-hg-vh">
                    <Col wide={5} style={{ width: 584 }}>
                        <Segment className="u-tx-center">
                            <img src={logo} alt="Logo" style={{ width: 196, margin: 'auto' }} />
                        </Segment>
                        <Segment className="box u-fx-column" p={40} mt={20} bg="white">
                            <Text mb={24} className="u-tx-center u-tx-d4">
                                Public Access
                            </Text>
                            <Row>
                                <Col>
                                    <Button onClick={() => props.history.goBack()} variant="secondary-alt">
                                        Back
                                    </Button>
                                </Col>
                                <Col className="u-tx-right">
                                    <Link to="/public-access/detail">
                                        <Button variant="primary-alt">
                                            View Detail
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Segment>
                    </Col>
                </Row>
            </Segment>
        </Container>

    )
}

export default Layout