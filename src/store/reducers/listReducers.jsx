
const initialState = {
    list_type:'inbox'
}

const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_LIST': {

            console.log("ADMIN_LOGIN", action)
            return {
                ...state,
                ...action.payload.payload,
                list_type:action.payload
            };
        };
        default :  return state
        
    }
}

export default listReducer