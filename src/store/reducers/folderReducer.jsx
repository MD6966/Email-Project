const initialState = {
  folders: [],
  folderData: [],
  folderDataG: [],
  selectedChat: {
    id: "9b029bd7-0731-4e61-aec2-11bb1c9f44f1",
    user_id: 3,
    mail_id:
      "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgBGAAADL-iewpj1Rk2hJeWPRCY1JgcA6kg2Hnpr1E6WPb9c-w1iDAAAAgEMAAAA6kg2Hnpr1E6WPb9c-w1iDAAB7gzvPAAAAA==",
    hasAttachments: "0",
    subject: "Hello",
    description:
      '<html><head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><div dir="ltr">hi</div></body></html>',
    parentFolderId:
      "AQMkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAuAAADL-iewpj1Rk2hJeWPRCY1JgEA6kg2Hnpr1E6WPb9c-w1iDAAAAgEMAAAA",
    conversationId:
      "AQQkADAwATM0MDAAMS0zOWYwLTZkM2QtMDACLTAwCgAQAD4uwdRB7cZDlwkhSCrTfto=",
    conversationIndex: "AQHaANkTPi7B1EHtxkOXCSFIKtN+2g==",
    isRead: "1",
    isFavorite: null,
    isDraft: "0",
    sender_name: "HKT Mobile Accessories",
    sender_email_address: "hktmobileaccessories@gmail.com",
    receiver_name: "amirtariq6864@outlook.com",
    receiver_email_address: "amirtariq6864@outlook.com",
    flagStatus: "flagged",
    createdDateTime: "2023-10-17T09:05:28Z",
    lastModifiedDateTime: "2023-12-22T10:57:25Z",
    receivedDateTime: "2023-10-17T09:05:29Z",
    sentDateTime: "2023-10-17T09:05:11Z",
    snooze_dateTime: null,
    created_at: "2024-01-04T02:57:48.000000Z",
    updated_at: "2024-01-30T06:35:47.000000Z",
  },
  isLoading: true,
  folder_name: "Inbox",
  conntent: "",
  src: "",
  folders_google: [],
  hit_src: "",
  current_state: "",
  selected_state: false,
  selectedIds: [],
  api_state: false,
  c_b: false,
  page: 1,
};

const folderReducer = (state = initialState, action) => {
  // console.log(action, '++++++++++FOLDER_SUCCESS')

  switch (action.type) {
    case "FOLDER_SUCCESS": {
      // console.log("ACTION", action.payload.title)
      return {
        ...state,
        folders: action.payload,
      };
    }
    case "FOLDER_SUCCESS_GOOGLE": {
      // console.log("ACTION", action.payload[0])
      return {
        ...state,
        folders_google: action.payload,
      };
    }
    case "FOLDER_ID_SUCCESS": {
      // console.log("Folder", action)
      return {
        ...state,
        folderData: action.payload,
        isLoading: false,
      };
    }
    case "FOLDER_ID_SUCCESS_G": {
      // console.log("Folder", action)
      return {
        ...state,
        folderDataG: action.payload,
        isLoading: false,
      };
    }
    case "FOLDER_ID_FOR_CHAT": {
      // console.log("Folder", action)
      return {
        ...state,
        folderData: action.payload,
        isLoading: false,
      };
    }
    case "SELECTED_CHAT": {
      return {
        ...state,
        selectedChat: action.payload,
      };
    }
    case "RESET_GROUP_LOADING": {
      return {
        ...state,
        isLoading: false,
      };
    }
    case "RESET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CONTENT_RESET": {
      return {
        ...state,
        content: "",
      };
    }
    case "FOLDER_NAME": {
      return {
        ...state,
        folder_name: action.payload,
      };
    }
    case "CONTENT_SETTER": {
      return {
        ...state,
        content: action.payload,
      };
    }
    case "STATE_CHANGER": {
      return {
        ...state,
        api_state: !state.api_state,
      };
    }
    case "RESET_CB": {
      return {
        ...state,
        c_b: !state.c_b,
      };
    }
    case "LOGIN_SRC": {
      return {
        ...state,
        src: action.payload,
      };
    }
    case "SELECT_MAIL": {
      return {
        ...state,
        selected_state: action.payload.cond,
        selectedIds: action.payload.ids,
      };
    }
    case "LOGIN_HIT_SRC": {
      localStorage.setItem("soruce", action.payload);

      return {
        ...state,
        hit_src: action.payload,
      };
    }
    case "SWITCH_CURRENT_STATE": {
      return {
        ...state,
        current_state: action.payload,
        src: action.payload,
        conntent: "",
      };
    }
    case "RESET_STATE": {
      return initialState;
    }
    case "LOG_OUT": {
      localStorage.removeItem("token");
      return {
        folders: [],
        folderData: [],
        folderDataG: [],
        folder_name: "",
        content: "",
        folders_google: [],
        hit_src: "",
        current_state: "",
      };
    }

    default:
      return state;
  }
};

export default folderReducer;
