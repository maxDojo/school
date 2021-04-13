import React from "react";
import "./App.css";
// import StudentCard from "./components/StudentCard";
import "fontsource-roboto";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import { blue } from "@material-ui/core/colors";
// import Header from "./components/Header";
import Layout from "./components/pages/Layout";
import UiContext, {
  initialState as UiState,
  reducer as UiReducer,
} from "./context/ui";

function App() {
  const [uiState, uiDispatch] = React.useReducer(UiReducer, UiState);
  return (
    <UiContext.Provider value={{ state: uiState, dispatch: uiDispatch }}>
      <Layout />
    </UiContext.Provider>
  );
}

export default App;

// <ThemeProvider theme={theme}>
//   <div className="App">
//     <Header />
//     <StudentCard />
//   </div>
//  </ThemeProvider>
