const initialState = {
  current_page: 1,
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE": {
      return {
        ...state,
        ...action.payload,
        current_page: action.payload,
      };
    }
    case "LOG_OUT": {
      return {
        current_page: 1,
      };
    }
    default:
      return state;
  }
};

export default otherReducer;
