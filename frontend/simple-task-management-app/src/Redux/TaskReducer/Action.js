import axios from "axios";
import {
  ADD_TASK_REQUEST_SUCCESS,
  DELETE_REQUEST_SUCCESS,
  TASK_REQUEST,
  TASK_REQUEST_FAIL,
  TASK_REQUEST_SUCCESS,
  UPDATE_REQUEST_SUCCESS,
} from "./ActionType";

import { taskUrl } from "../../url/url";
let token = "";
export const getAllTask = (myToken, page) => async (dispatch) => {
  token = myToken || token;
  try {
    dispatch({ type: TASK_REQUEST });
    return await axios
      .get(`${taskUrl}?page=${page}&limit=15 `, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({ type: TASK_REQUEST_SUCCESS, payload: res.data });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: TASK_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: TASK_REQUEST_FAIL });
  }
};
export const updateTask = (id, payload) => async (dispatch) => {
  try {
    dispatch({ type: TASK_REQUEST });
    return await axios
      .patch(`${taskUrl}/update/${id}`, payload, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({ type: UPDATE_REQUEST_SUCCESS });
        console.log({ res });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: TASK_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: TASK_REQUEST_FAIL });
  }
};
export const addNewTask = (payload) => async (dispatch) => {
  try {
    dispatch({ type: TASK_REQUEST });
    return await axios
      .post(`${taskUrl}/addtask`, payload, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({ type: ADD_TASK_REQUEST_SUCCESS, payload: res.data });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: TASK_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: TASK_REQUEST_FAIL });
  }
};
export const DeleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: TASK_REQUEST });
    return await axios
      .delete(`${taskUrl}/delete/${id}`, { headers: { Authorization: token } })
      .then((res) => {
        dispatch({ type: DELETE_REQUEST_SUCCESS, payload: res.data });
        console.log({ deleteres: res.data });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: TASK_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: TASK_REQUEST_FAIL });
  }
};

export const updateTaskUser = (id, payload) => async (dispatch) => {
  try {
    dispatch({ type: TASK_REQUEST });
    return await axios
      .patch(`${taskUrl}/colaborator/${id}`, payload, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch({ type: UPDATE_REQUEST_SUCCESS });
        console.log({ res });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: TASK_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: TASK_REQUEST_FAIL });
  }
};
