import { combineEpics } from "redux-observable";
import { RequestAuthentication } from "./epicAuthentication";
import { RequestSimpleForm } from "./epicSampleform";
const setupEpic = combineEpics(
    // MODULES VARIABLE
    RequestAuthentication,
    RequestSimpleForm
)

export default setupEpic