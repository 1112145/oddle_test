export function setUsers(users) {
    return {
        type:'SET_USERS',
        users
    }
}

export function setUserDetail(user_detail){
    return {
        type: 'SET_USER_DETAIL',
        user_detail
    }
}