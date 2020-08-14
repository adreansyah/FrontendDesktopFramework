import React, { Fragment } from 'react'
import { Row, Segment, Text } from '@elevenia/master-ui/components/Atom'

const Layout = props => {
    document.title = props.title
    // console.log('x');
    return (
        <Fragment>
            <Segment p={21}>
                <Text H28>{props.title}</Text>
            </Segment>
            <Row mt="24" className="u-js-center" >
                <Segment className="u-fx-column" style={{ width: 584 }}>
                    <Segment p={40} bg="white" className="box u-fx-column">
                        <Text mb={24} className="u-tx-d4 u-tx-center">
                            Home Page
                        </Text>
                    </Segment>
                </Segment>
            </Row>
        </Fragment>
    )
}

export default Layout