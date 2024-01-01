
const initialState = {
    isAuthenticatedUser: false,
    token : localStorage.getItem('token'),

}

const emailReducer = (state=initialState, action) => {
    // console.log(action, '++++++++++LOGIN ACTION')

    switch(action.type) {
        case 'SUCCESS': {
            localStorage.setItem('token', action.payload.token);
            // console.log("ADMIN_LOGIN", action.payload.title)
            return {
                ...state,
                ...action.payload,
                token: action.payload.token,
                isAuthenticatedUser:true
            };
        };
        default :  return state
        
    }
}

export default emailReducer