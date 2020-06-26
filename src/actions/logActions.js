import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// export const getLogs = () => {
// return {
/*
      We could direct return a object like this to our reducer, remember the dispatch is the return to our reducer
      but as we'll make async call to our backend, use thunk, instead returning a object we can return a function
      that function can dispatch to our reducer at any point, to get the response to our backend and then dispatch to the reducer
      thunk allow us to run async actions, run the action and continue the code, notice how we can use two actions in one
*/
//     type: GET_LOGS
// actually we can do:
// return async (dispatch, getState) => {
//    setLoading();
//
//    const res = await fetch('/logs');
//    const data = await res.json()
//
//    dispatch({
//        type: GET_LOGS,
//        payload: data
//    });
// };
//  };

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
