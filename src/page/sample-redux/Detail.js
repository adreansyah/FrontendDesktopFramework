import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Segment, Row, Col, Text } from '@elevenia/master-ui/components/Atom'
import { getUserWithPosts } from 'store/actions/post'
import { useAction } from 'hooks'

const Detail = (props) => {
    const { hasFetch } = useAction();
    const isUser = useSelector(state => {
        return {
            user: state.user,
            userPost: state.userPost
        }
    });
    const { match } = props
    useEffect(() => {
        if (match.params.id) {
            /**
             * Get action user and userPostList if params not same with pickedUserId in user store
             */
            match.params.id !== isUser.user.pickedUserId && hasFetch(getUserWithPosts(match.params.id));
        }
    }, [hasFetch, match.params.id, isUser.user.pickedUserId])
    /**
    * condition if param id not found
    */
    if (match.params.id === '0') {
        return <Segment>User Not Found</Segment>
    }
    return (
        <Segment py={12}>
            {isUser.user.isProcessing || isUser.userPost.isProcessing ? (
                'Loading'
            ) : (
                    <Segment>
                        <Text H16>
                            {isUser.user.pickedUser !== null && `POST BY ${isUser.user.pickedUser.name}`}
                        </Text>
                        {isUser.userPost.userPostList && isUser.userPost.userPostList.length > 0
                            ? isUser.userPost.userPostList.map((item, index) => (
                                <Row key={index} className="box" bg="white" p={40} mb={8}>
                                    <Col wide={12}>
                                        <Segment>
                                            {JSON.stringify(isUser.user.pickedUser)}
                                        </Segment>
                                    </Col>
                                </Row>
                            ))
                            : 'Data Not Found'}
                    </Segment>
                )}
        </Segment>
    )
}
export default Detail;
