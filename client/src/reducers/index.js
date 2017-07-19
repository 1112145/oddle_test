import { combineReducers } from 'redux';

function users(state = {}, action) {
    switch (action.type) {
        case 'SET_USERS':
            return Object.assign({},action.users);
        default: return state;
    }
}

function user(state = {}, action) {
    switch (action.type) {
        case 'SET_USER_DETAIL':
            return Object.assign({},action.detail);
        default: return state;
    }
}


export default combineReducers({users,user});