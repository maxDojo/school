import React from "react";

const UiContext = React.createContext();

const initialState = {
  appDrawer: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "appdrawer": {
      return { ...state, appDrawer: action.change };
    }

    default:
      return state;
  }
};

export { reducer, initialState };
export default UiContext;
