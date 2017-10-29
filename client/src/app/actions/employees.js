import {client} from './';
import {FETCH_EMPLOYEES} from "./actionsTypes";

const url = '/employees';

export const fetchEmployees = () => {
    return dispatch => {
        dispatch({
            type: FETCH_EMPLOYEES,
            payload: client.get(url)
        })
    }
};