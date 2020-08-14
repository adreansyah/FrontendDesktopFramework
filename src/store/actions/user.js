import { Services } from 'service'
/**
 * GET USER BY ID
 * @param {/users/:id} data
 */
export const getUserSuccess = data => ({
    type: 'GET_USER_SUCCESS',
    data,
})

export const getUserFailure = error => ({
    type: 'GET_USER_FAILURE',
    error,
})

export const getUserRequest = id => ({
    type: 'GET_USER_REQUEST',
    id,
})

export const getUser = id => {
    return async (dispatch, getState) => {
        try {
            await dispatch(getUserRequest(id))
            /**
             * find pickedUser data available or not in userList array
             */
            const { userList } = getState().user
            let data = null
            const pickedUser = userList.find(key => key.id.toString() === id)
            if (pickedUser) {
                data = pickedUser
            } else {
                /**
                 * Will call API if data not available in userList
                 */
                const response = await Services('https://jsonplaceholder.typicode.com').get(`/users/${id}`)
                data = response.data
            }
            dispatch(getUserSuccess(data))
        } catch (error) {
            const { response } = JSON.parse(JSON.stringify(error))
            dispatch(getUserFailure(response ? response.statusText : error.toString()))
        }
    }
}

/**
 * GET ALL USER
 * @param {/users}
 */
export const getUsersSuccess = data => ({
    type: 'GET_USERS_SUCCESS',
    data,
})

export const getUsersFailure = error => ({
    type: 'GET_USERS_FAILURE',
    error,
})

export const getUsersRequest = () => ({
    type: 'GET_USERS_REQUEST',
})

export const getUsers = () => {
    return async dispatch => {
        try {
            dispatch(getUsersRequest())
            const response = await Services('https://jsonplaceholder.typicode.com').get(`/users`)
            dispatch(getUsersSuccess(response.data))
            return response
        } catch (error) {
            const { response } = JSON.parse(JSON.stringify(error))
            dispatch(getUsersFailure(response ? response.statusText : error.toString()))
        }
    }
}
