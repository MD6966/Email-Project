export const setList = (list_type) => (dispatch) => {
    // console.log(list_type.title)
    dispatch({
        type: 'SET_LIST',
        payload:list_type,
      });
  }