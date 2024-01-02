
const initialState = {
    folders:[],
    folderData:[],
    isLoading: true,
    folder_name:'Inbox',
    conntent:''

}

const folderReducer = (state=initialState, action) => {
    // console.log(action, '++++++++++FOLDER_SUCCESS')

    switch(action.type) {
        case 'FOLDER_SUCCESS': {
            // console.log("ADMIN_LOGIN", action.payload.title)
            return {
                ...state,
                folders:action.payload,

                
            };
        };
        case 'FOLDER_ID_SUCCESS': {
            // console.log("Folder", action)
            return {
                ...state,
                folderData:action.payload,
                isLoading: false,

            };
        };
        case 'RESET_LOADING': {
            return {
                ...state,
                isLoading: true,
            };
        };
        case 'FOLDER_NAME': {
            return {
                ...state,
                folder_name:action.payload
            };
        }
        case 'CONTENT_SETTER': {
            return {
                ...state,
                content:action.payload
            };
        }
        case 'RESET_STATE': {
            return initialState;
        }
        default :  return state
        
    }
}

export default folderReducer