import { Services } from 'service'

export const getAlbumsRequest = () => {
    return {
        type: 'GET_ALBUM_REQUEST',
    }
}
export const getAlbumsSuccess = data => ({
    type: 'GET_ALBUM_SUCCESS',
    payload: data,
})
export const getAlbumsFailure = error => ({
    type: 'GET_ALBUM_FAILURE',
    payload:error,
})

/**
 * @param {/albums}  
 */

export const getAlbums = () => {
    return dispatch => {
        dispatch(getAlbumsRequest())
        Services.get('/albums')
            .then(response => {
                dispatch(getAlbumsSuccess(response.data))
            })
            .catch(error => {
                dispatch(getAlbumsFailure(error.toString()))
            })
    }
}

export const getAlbumsAsync = () => {
    return async (dispatch, getState) => {
        try {
            await dispatch(getAlbumsRequest())
            const response = await Services.get('/albums')
            dispatch(getAlbumsSuccess(response.data))
        } catch (error) {
            dispatch(getAlbumsFailure(error.toString()))
        }
    }
}
