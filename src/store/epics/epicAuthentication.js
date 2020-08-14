import { mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { Services } from 'service'

export const RequestAuthentication = action$ =>
    action$.pipe(
        ofType('REQUEST_AUTH'),
        mergeMap(async action => {
            try {
                switch (action.type) {
                    case 'REQUEST_AUTH':
                        const rawResponseToken = await Services().post('/auth/login', action.payload.properties)
                        return dispatch => {
                            dispatch({
                                type: 'AUTH_SUCCESS',
                                payload: {
                                    token: rawResponseToken.data.access_token,
                                },
                            })
                        }
                    default:
                        break
                }
            } catch (e) {
                const { message } = e
                return dispatch => {
                    dispatch({ type: "AUTH_FAILED" })
                    dispatch({ type: 'ALERT_ERROR', payload: { message: message } })
                }
            }
        }),
    )
