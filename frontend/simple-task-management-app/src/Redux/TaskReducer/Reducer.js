import {
  ADD_TASK_REQUEST_SUCCESS,
  DELETE_REQUEST_SUCCESS,
  TASK_REQUEST,
  TASK_REQUEST_FAIL,
  TASK_REQUEST_SUCCESS,
  UPDATE_REQUEST_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};

// taskList
export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TASK_REQUEST:
      return { ...state, isLoading: true };
    case TASK_REQUEST_SUCCESS:
      return { ...state, isLoading: false, data: payload.taskList };
    case TASK_REQUEST_FAIL:
      return { ...state, isLoading: false, data: [], isError: true };
    case ADD_TASK_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case DELETE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case UPDATE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: [] };
    default:
      return state;
  }
};
