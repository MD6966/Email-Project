
const initialState = {
    list_type:'Inbox'
}

const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_LIST': {

            // console.log("ADMIN_LOGIN", action.payload.title)
            return {
                ...state,
                ...action.payload,
                list_type:action.payload
            };
        };
        default :  return state
        
    }
}

export default listReducer