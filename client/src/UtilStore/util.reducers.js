import * as UtilActions from "./util.actions";

const intialState = {
  theme: "light",
  checked: true,
};

const reducers = (state = intialState, action) => {
  switch (action.type) {
    case UtilActions.TOGGLE_THEME:

      if (state.checked) {
        return {
          ...state,
          theme: "dark",
          checked: false,
        };
      } else {
        return {
          ...state,
          theme: "light",
          checked: true,
        };
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducers;
