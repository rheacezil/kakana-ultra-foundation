export const loginUser = (activeUserDetails) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_USER',
            payload: activeUserDetails
        })
    }
}