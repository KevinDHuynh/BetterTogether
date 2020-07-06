import axios from 'axios';
import { returnErrors} from './errorActions'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../actions/types";


// Register
export const register = ({ name, username, password}) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({ name, username, password });

    axios.post('http://localhost:5000/api/register', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}  


// Check token, load user
export const loadUser = () => (dispatch, getState) => {
    // User loading 
    dispatch({ type: USER_LOADING });

    axios.get('http://localhost:5000/api/login/user', tokenConfig(getState))
        .then( res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });

};

// Setup config/headers and token
export const tokenConfig = getState => {

        //Get token from local storage
        const token = getState().auth.token;

        // Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
    
        // Check token
        if (token) {
            config.headers['x-auth-token'] = token;
        }

        return config;
}