import * as actionTypes from "./user.actions";
import { login, register, update, fetchViaUsername } from "../Utils/api-auth";
import auth from "../Utils/auth-helper";
import { userInitState } from "./user.constants";
import { PURGE } from "redux-persist";

const intialState = {
  ...userInitState,
  open: false,
  error: "",
  show: false,
  submitted: false,
};

const reducers = (state = intialState, action) => {
  const userData = { user: { ...state.user } };
  switch (action.type) {
    case actionTypes.REFRESH:
      return {
        ...state,
        ...action.data,
        show: false,
        error: "",
        open: false,
        success: "",
      };
    case PURGE:
      return {};

    case actionTypes.LOGIN:
      userData.profile = undefined;
      login(userData).then((data) => {
        if (data.error) {
          action.asyncDispatch({
            type: actionTypes.ERROR,
            message: data.error,
          });
        } else {
          action.asyncDispatch({
            type: actionTypes.SUCCESS,
            user: data,
            message: "Logged successfully",
          });
        }
      });
      return { ...state };
    case actionTypes.USERNAME_FETCH:
      fetchViaUsername(action.username).then((data) => {
        if (data.error) {
          action.asyncDispatch({
            type: actionTypes.ERROR,
            message: data.error,
          });
        } else {
          action.asyncDispatch({
            type: actionTypes.FETCH_PROFILE,
            profile: data,
          });
        }
      });
      return { ...state };
    case actionTypes.FETCH_PROFILE:
      return {
        ...state,
        profile: { ...action.profile.user },
      };
    case actionTypes.MODIFY:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value,
        },
      };
    case actionTypes.REGISTER:
      register(userData).then((data) => {
        userData.profile = undefined;
        if (data.error) {
          action.asyncDispatch({
            type: actionTypes.ERROR,
            message: data.error,
          });
        } else {
          action.asyncDispatch({
            type: actionTypes.SUCCESS,
            user: data.user,
            message: "Registered successfully",
          });
        }
      });
      return { ...state };
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.message,
        show: true,
      };
    case actionTypes.UPDATE:
      update(action.Data).then((data) => {
        if (data.error) {
          action.asyncDispatch({
            type: actionTypes.ERROR,
            message: data.error,
          });
        } else {
          action.asyncDispatch({
            type: actionTypes.FETCH_UPDATE,
            user: data.user,
          });
        }
      });
      return state;
    case actionTypes.FETCH_UPDATE:
      auth.authenticate(action.user.token, () => {
        return { ...state, ...action.user, profile: {}, open: true };
      });
      return { ...state, ...action.user, profile: {}, open: true };

    case actionTypes.SUCCESS:
      console.log("action=", action);
      auth.authenticate(action.user.token, () => {
        return { ...state, ...action, profile: {}, open: true };
      });
      return { ...state, ...action, profile: {}, open: true };
    case actionTypes.LOGOUT:
      localStorage.clear();
      auth.signout(() => {
        return {
          open: true,
        };
      });
      return {};
    case actionTypes.ExternalError:
      return {
        ...state,
        error: action.message,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
