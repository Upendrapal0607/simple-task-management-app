import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAIL,
  REGISTER_REQUEST_SUCCESS,
} from "./ActionType";
import { UserUrl } from "../../url/url";

export const LoginRequest = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    return await axios
      .post(`${UserUrl}/login`, payload)
      .then((res) => {
        dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.data });
        console.log({"token": res.data.token});
        localStorage.setItem("token", JSON.stringify(res.data.token));
        return res;
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: LOGIN_REQUEST_FAIL });
  }
};

export const RgisterRequest = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    return await axios
      .post(`${UserUrl}/register`, payload)
      .then((res) => {
        dispatch({ type: REGISTER_REQUEST_SUCCESS, payload: res });

        return res.data;
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: LOGIN_REQUEST_FAIL });
  }
};

export const LogoutRequest = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    return await axios
      .get(`${UserUrl}/logout`, {
        headers: { Authorization: JSON.parse(localStorage.getItem("token")) },
      })
      .then((res) => {
      
        dispatch({ type: LOGOUT_REQUEST_SUCCESS, payload: res.data });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: LOGIN_REQUEST_FAIL });
  }
};
