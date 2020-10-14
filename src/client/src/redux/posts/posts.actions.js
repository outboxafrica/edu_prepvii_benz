  
import axios from 'axios';
import { setAlert } from '../alert/alert.actions';
import {
    GET_POSTS,
    GET_POST,
    GET_TOP_POSTS,
    POST_ERROR,
    DELETE_POST,
    ADD_POST
} from './posts.types';

const API = `https://api-team-benz.herokuapp.com/api/v1`
// Get posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get(`${API}/questions`);

        dispatch({
            type: GET_POSTS,
            payload: res.data.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, 'danger'));

        dispatch({
            type: POST_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
                }
        });
    }
};

// Get post
export const getPost = id => async dispatch => {
    try {
        const res = await axios.get(`${API}/questions/${id}`);

        dispatch({
            type: GET_POST,
            payload: res.data.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, 'danger'));

        dispatch({
            type: POST_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
                }
        });
    }
};

//GET TOP POSTS
export const getTopPosts = () => async dispatch => {
    try {
        const res = await axios.get(`${API}/questions/top`);

        dispatch({
            type: GET_TOP_POSTS,
            payload: res.data.data
        });
    } catch (err) {
        dispatch(setAlert(err.response.data.message, 'danger'));

        dispatch({
            type: POST_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
                }
        });
    }
};

//GET TAG POSTS
// export const getTagPosts = tagName => async dispatch => {
//     try {
//         const res = await axios.get(`${API}/questions/tag/${tagName}`);

//         dispatch({
//             type: GET_TAG_POSTS,
//             payload: res.data.data
//         });
//     } catch (err) {
//         dispatch(setAlert(err.response.data.message, 'danger'));

//         dispatch({
//             type: POST_ERROR,
//             payload: { 
//                 msg: err.response.statusText, 
//                 status: err.response.status 
//                 }
//         });
//     }
// };

// Add post
export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post(`${API}/questions`, formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data.data
        });

        dispatch(setAlert(res.data.message, 'success'));

        dispatch(getPosts());
    } catch (err) {
        dispatch(setAlert(err.response.data.message, 'danger'));

        dispatch({
            type: POST_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
                }
        });
    }
};

// Delete post
export const deletePost = id => async dispatch => {
    try {
        const res = await axios.delete(`${API}/questions/${id}`);

        dispatch({
            type: DELETE_POST,
            payload: id
        });

        dispatch(setAlert(res.data.message, 'success'));
    } catch (err) {
        dispatch(setAlert(err.response.data.message, 'danger'));

        dispatch({
            type: POST_ERROR,
            payload: { 
                msg: err.response.statusText, 
                status: err.response.status 
                }
        });
    }
};