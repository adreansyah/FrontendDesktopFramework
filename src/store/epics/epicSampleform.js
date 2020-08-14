import { mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { Services } from 'service'

export const RequestSimpleForm = (action$, store) =>
    action$.pipe(
        ofType(
            'REQUEST_SIMPLE_INPUT',
            'REQUEST_UPDATE_SIMPLE_INPUT',
            "REQUEST_SIMPLE_LIST"
        ),
        mergeMap(async action => {
            try {
                switch (action.type) {
                    case 'REQUEST_SIMPLE_INPUT':
                        await Services().post('/services/eofemp/api/employees', action.payload.params)
                        return dispatch => {
                            dispatch({ type: 'ALERT_TOAST_SUCCESS', payload: { message: "Create Success" } });
                            dispatch({ type: "REQUEST_SIMPLE_LIST", payload: store.value.simpleform.params })
                        }
                    case 'REQUEST_UPDATE_SIMPLE_INPUT':
                        await Services().put('/services/eofemp/api/employees/' + action.payload.id, action.payload.params);
                        return dispatch => {
                            dispatch({ type: 'ALERT_TOAST_SUCCESS', payload: { message: "Update Success" } });
                            dispatch({ type: "REQUEST_SIMPLE_LIST", payload: store.value.simpleform.params })
                        }
                    case 'REQUEST_SIMPLE_LIST':
                        const response = await Services().get('/services/eofemp/api/employees', action.payload);
                        return dispatch => {
                            dispatch({
                                type: 'GET_SIMPLE_LIST',
                                payload: {
                                    response: response.data.content,
                                    totalElements: response.data.totalElements,
                                    totalPages: response.data.totalPages
                                }
                            })
                        }
                    default:
                        break
                }
            } catch (e) {
                const { message } = e
                return dispatch => {
                    dispatch({ type: 'ALERT_TOAST_ERROR', payload: { message: message } })
                    dispatch({
                        type: 'GET_SIMPLE_LIST',
                        payload: {
                            response: store.value.simpleform.data,
                            totalElements: 0,
                            totalPages: 0
                        }
                    })
                }
            }
        }),
    )
