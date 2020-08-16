import React, { useEffect, useState } from 'react';
import { Segment, Text, Row, Col } from '@elevenia/master-ui/components/Atom';
import { GraphMiddleWare } from 'service';
import { gql } from '@apollo/client';

const GraphQl = (props) => {
    document.title = props.title;
    const [gqlData, setGqlData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        GraphMiddleWare()
            .query({
                query: gql`query {
                allUsers {
                  id
                  name
                }
              }`
            }).then(resultSample => {
                setLoading(false)
                setGqlData(resultSample.data.allUsers)
            })
    }, []);
    return (
        <Segment>
            <Segment p={21}>
                <Text H28>{props.title}</Text>
            </Segment>
            {
                loading ? <Text className="u-tx-center">Loading</Text> : gqlData.map((item, index) => {
                    return (
                        <Segment key={index} className="box" p={40} mb={8} bg="white">
                            <Row>
                                <Col wide={12}>
                                    <Text H16>
                                        ({index + 1}). {item.id}
                                    </Text>
                                    <Text mt={8}>
                                        ({item.name})
                                    </Text>
                                </Col>
                            </Row>
                        </Segment>
                    )
                })
            }
        </Segment>
    )
}

export default GraphQl;