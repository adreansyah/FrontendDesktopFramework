export const requestSampleLayout = (params) => {
    return dispatch => {
        const isParams = {
            barcode: params.barcode,
            email: params.email,
            firstName: params.firstname,
            lastName: params.lastname,
            nik: params.nik,
            password: params.password,
        }
        dispatch({
            type: "REQUEST_SIMPLE_INPUT",
            payload: { params: isParams }
        });
    }
}

export const requestUpdateSampleLayout = (params, id) => {
    return dispatch => {
        const isParams = {
            email: params.email,
            firstName: params.firstname,
            lastName: params.lastname,
            nik: params.nik
        }
        dispatch({
            type: "REQUEST_UPDATE_SIMPLE_INPUT",
            payload: { params: isParams, id }
        })
    }
}
export const requestSampleList = (isObject) => {
    return dispatch => {
        dispatch({
            type: "REQUEST_SIMPLE_LIST",
            payload: isObject
        })
    }
}