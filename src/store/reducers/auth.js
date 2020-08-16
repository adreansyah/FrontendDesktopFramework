import { refreshToken } from "helper";

const initialState = {
    id_token: "",
    loading: false
}

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_AUTH':
            return {
                ...state,
                loading: true
            }
        case 'AUTH_SUCCESS':
            refreshToken(action.payload.token);
            return {
                ...state,
                loading: false
            }
        case 'AUTH_FAILED':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}