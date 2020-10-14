import { combineReducers } from 'redux';
import alert from './alert/alert.reducer';
import auth from './auth/auth.reducer';
import post from './posts/posts.reducer';
import user from './users/users.reducer';
import answer from './answers/answers.reducer';


export default combineReducers({
    alert,
    auth,
    post,
    user,
    answer
});