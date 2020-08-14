import { combineReducers } from 'redux';
import user from './user';
import { post, userPost } from './post';
import { authentication } from './auth';
import { setAlerts } from './alertBlock';
import { setAlertsToast } from './alertToast';
import simpleform from './sampleform';
import album from 'page/albums/reducers/album';

const rootReducers = combineReducers({
    user,
    post,
    userPost,
    album,
    authentication,
    setAlerts,
    setAlertsToast,
    simpleform
})

export default rootReducers
