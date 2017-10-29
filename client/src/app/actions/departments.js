import {client} from './';
import {FETCH_DEPARTMENTS} from "./actionsTypes";

const url = '/departments';

export const fetchDepartments = () => {
    return dispatch => {
        dispatch({
            type: FETCH_DEPARTMENTS,
            payload: client.get(url)
        })
    }
};