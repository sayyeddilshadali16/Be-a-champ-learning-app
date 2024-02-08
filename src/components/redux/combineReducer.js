import { combineReducers } from "redux";
import saveJobs from "./reducerFunction";

const rootReducer = combineReducers({
    saveJob: saveJobs
});

export default rootReducer;
