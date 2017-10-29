import {FETCH_EMPLOYEES} from "../actions/actionsTypes";

export default (state = [], action) => {
    switch (action.type) {

        case `${FETCH_EMPLOYEES}_FULFILLED`: {
            return action.payload.data
        }

        default:
            return state;
    }
};