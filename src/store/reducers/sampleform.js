const initialState = {
    data: [],
    isLoading: false,
    totalElements: 0,
    totalPages: 0,
    params: {
        page: 0,
        size: 0,
        search: "",
        sort: ""
    }
}

const simpleform = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_SIMPLE_LIST':
            return {
                ...state,
                isLoading: true,
                params: action.payload
            }
        case 'GET_SIMPLE_LIST':
            return {
                ...state,
                data: action.payload.response,
                isLoading: false,
                totalElements: action.payload.totalElements,
                totalPages: action.payload.totalPages
            }
        default:
            return state
    }
}

export default simpleform
