export const pageChanger = (pg_no) => async (dispatch) => {
  dispatch({
    type: "SET_PAGE",
    payload: pg_no,
  });
};
