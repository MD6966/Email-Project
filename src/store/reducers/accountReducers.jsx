const initialState = {
    account: []
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT': {
            const newData = action.payload;
            return {
                ...state,
                account: [...state.account, newData],
            };
        }
        default:
            return state;
    }
};

export default accountReducer;
