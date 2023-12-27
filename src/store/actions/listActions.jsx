export const setList = (list_type) => (dispatch) => {
    dispatch({
        type: 'SET_LIST',
        payload:list_type,
      });
  }