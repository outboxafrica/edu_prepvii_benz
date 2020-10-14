import {
    GET_ANSWERS,
    ANSWER_ERROR,
    ADD_ANSWER,
    DELETE_ANSWER
} from './answers.types';

import axios from 'axios';
import {setAlert} from '../alert/alert.actions';

const API = `https://api-team-benz.herokuapp.com/api/v1`

export const getAnswers = () => async dispatch => {
    try {
        const res = await axios.get(`${API}/answers`);

        dispatch({
            type: GET_ANSWERS,
            payload: res.data.data
        });
    } catch (err) {
        dispatch({
            type: ANSWER_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status
                 }
        });
    }
};

// Add Answer
export const addAnswer = (AnswerId,formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post(`${API}/questions/${postId}/answer`, formData, config);

        dispatch({
            type: ADD_ANSWER,
            payload: res.data.data
        });

        dispatch(setAlert(res.data.message, 'success'));

        dispatch(getAnswers(postId));
    } catch (err) {
        dispatch(setAlert(err.response.data.message, 'danger'));

        dispatch({
            type: ANSWER_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
                }
        });
    }
};

// Delete Answer
export const deleteAnswer = (PostId,AnswerId) => async dispatch => {
    try {

        const res = await axios.delete(`${API}/questions/${PostId}/answer/${AnswerId}`);

        dispatch({
            type: DELETE_ANSWER,
            payload: AnswerId
        });

        dispatch(setAlert(res.data.message, 'success'));
    } catch (err) {
        dispatch(setAlert(err.response.data.message, 'danger'));

        dispatch({
            type: ANSWER_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status }
        });
    }
};