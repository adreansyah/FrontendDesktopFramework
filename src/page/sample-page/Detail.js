import React, { Fragment } from 'react';
import { Segment, Text, Row, Col, Button } from '@elevenia/master-ui/components/Atom';

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
                            Sample Page Detail
                    </Text>
                        <Row py={8}>
                            <Col className="u-tx-center">
                                <Button onClick={() => props.history.goBack()} variant="primary-alt">
                                    Go Back
                                    </Button>
                            </Col>
                        </Row>
                    </Segment>
                </Segment>
            </Row>
        </Fragment>
    )
}

export default Layout
