export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_USERS':
            return {
                users: action.users
            }
        case 'SET_USER_DETAIL':
            return {
                user: action.user_detail
            }
        default: return state;
    }
}