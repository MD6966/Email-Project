
const initialState = {
    folders:[],
    folderData:[]

}

const folderReducer = (state=initialState, action) => {
    console.log(action, '++++++++++FOLDER_SUCCESS')

    switch(action.type) {
        case 'FOLDER_SUCCESS': {
            // console.log("ADMIN_LOGIN", action.payload.title)
            return {
                ...state,
                folders:action.payload
            };
        };
        case 'FOLDER_ID_SUCCESS': {
            // console.log("Folder", action)
            return {
                ...state,
                folderData:action.payload
            };
        };
        default :  return state
        
    }
}

export default folderReducer