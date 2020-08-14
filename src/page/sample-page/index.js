import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Segment, Text, Row, Col, Button } from '@elevenia/master-ui/components/Atom'

const Layout = props => {
    document.title = props.title
    return (
        <Fragment>
            <Segment p={21}>
                <Text H28>{document.title}</Text>
            </Segment>
            <Row mt="24" className="u-js-center" >
                <Segment className="u-fx-column" style={{ width: 584 }}>
                    <Segment p={40} bg="white" className="box u-fx-column">
                        <Text H28 mb={24} className="u-tx-center">
                            Sample Page
                        </Text>
                        <Row py={8}>
                            <Col className="u-tx-center">
                                <Link to="/sample-page/detail" className="u-tx-center">
                                    <Button variant="primary-alt">
                                        Sample Page Detail
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col wide={6} className="u-tx-right" pr={8}>
                                <Link to="/sample-page/test-1" className="u-tx-center">
                                    <Button variant="primary-alt">
                                        Sample Page Test 1
                                    </Button>
                                </Link>
                            </Col>
                            <Col wide={6} className="u-tx-left" pl={8}>
                                <Link to="/sample-page/test-2" className="u-tx-center">
                                    <Button variant="primary-alt">
                                        Sample Page Test 2
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Segment>
                </Segment>
            </Row>
        </Fragment>
    )
}

export default Layout