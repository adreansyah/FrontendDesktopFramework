const initialState = {
    userList: [],
    pickedUser: null,
    pickedUserId: '',
    isProcessing: true,
    error: '',
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return {
                ...state,
                pickedUserId: action.id,
                isProcessing: true,
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                pickedUser: action.data,
                isProcessing: false,
            }
        case 'GET_USER_FAILURE':
            return {
                ...state,
                error: action.error,
                isProcessing: false,
            }
        case 'GET_USERS_REQUEST':
            return {
                ...state,
                isProcessing: true,
            }
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                userList: action.data,
                isProcessing: false,
            }
        case 'GET_USERS_FAILURE':
            return {
                ...state,
                error: action.error,
                isProcessing: false,
            }
        default:
            return state
    }
}

export default user
