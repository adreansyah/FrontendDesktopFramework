import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from 'store/actions/user'
import { Segment, Text, Row, Col } from '@elevenia/master-ui/components/Atom'
import { useAction } from 'hooks'


const SimpleRedux = () => {
    const { hasFetch } = useAction();
    const user = useSelector(state => state.user);
    
    useEffect(() => {
        hasFetch(getUsers());
    },[hasFetch]);

    const { userList, isProcessing } = user;
    return (
        <Segment py={16}>
            {!isProcessing
                ? userList && userList.length > 0
                    ? userList.map((user, index) => (
                        <Segment key={index} className="box" p={40} mb={8} bg="white">
                            <Row>
                                <Col wide={12}>
                                    <Text H16>
                                        <Link to={`/sample-redux/detail/${user.id}`}>
                                            {user.name}
                                        </Link>
                                    </Text>
                                    <Text mt={8}>
                                        {user.username}
                                    </Text>
                                </Col>
                            </Row>
                        </Segment>
                    ))
                    : 'Data Not found'
                : <Text className="u-tx-center" py={50}>Loading...</Text>}
        </Segment>
    )
}

export default SimpleRedux
