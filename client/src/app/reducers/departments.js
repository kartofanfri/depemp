import {FETCH_DEPARTMENTS} from '../actions/actionsTypes'

export default (state = [], action) => {
    switch (action.type) {

        case `${FETCH_DEPARTMENTS}_FULFILLED`: {
            return action.payload.data
        }

        default:
            return state;
    }
};