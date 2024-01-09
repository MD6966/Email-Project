export const addAcount = (acc) => (dispatch) => {
    dispatch({
      type: 'ADD_ACCOUNT',
      payload:acc,
    });
    
  };