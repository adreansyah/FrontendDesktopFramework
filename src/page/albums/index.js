import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlbums, getAlbumsAsync } from './actions/album'
import Box from '@elevenia/master-ui/components/Atom/Box'

export class index extends Component {
    componentDidMount() {
        const { getAlbums, asyncA } = this.props
        getAlbums()
        asyncA()
    }
    render() {
        console.log('album', this.props.album)
        console.log('post', this.props.post)
        const { album } = this.props
        return (
            <div>
                {album.data.length
                    ? album.data.map((list, index) => (
                          <Box key={index} styles="box u-fx-column u-bg-white u-p-40 u-mb-8">
                              {JSON.stringify(list)}
                          </Box>
                      ))
                    : 'data not found'}
            </div>
        )
    }
}

const mapStateToProps = ({ album, post }) => ({
    album,
    post,
})

const mapDispatchToProps = { getAlbums, asyncA: getAlbumsAsync }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(index)
