
const initialState = {
    folders:[],
    folderData:[],
    folderDataG:[],
    isLoading: true,
    folder_name:'Inbox',
    conntent:'',
    src:'',
    folders_google:[],
    hit_src:''

}

const folderReducer = (state=initialState, action) => {
    // console.log(action, '++++++++++FOLDER_SUCCESS')

    switch(action.type) {
        case 'FOLDER_SUCCESS': {
            // console.log("ACTION", action.payload.title)
            return {
                ...state,
                folders:action.payload,

                
            };
        };
        case 'FOLDER_SUCCESS_GOOGLE': {
            console.log("ACTION", action.payload[0])
            return {
                ...state,
                folders_google:action.payload,

                
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
        case 'FOLDER_ID_SUCCESS_G': {
            // console.log("Folder", action)
            return {
                ...state,
                folderDataG:action.payload,
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
        case 'LOGIN_SRC': {
            return {
                ...state,
                src:action.payload
            };
        }
        case 'LOGIN_HIT_SRC': {
            localStorage.setItem('soruce', action.payload);

            return {
                ...state,
                hit_src:action.payload
            };
        }
        case 'RESET_STATE': {
            return initialState;
        }
        case 'LOG_OUT': {
            localStorage.removeItem('token');
            return {
               folders:[],
               folderData:[],
               folder_name:'',
               content:'',
               folders_google:[],
               hit_src:''



            }; 
        }

        default :  return state
        
    }
}

export default folderReducer