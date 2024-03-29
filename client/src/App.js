import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme";
import { GlobalStyles } from "./Styles/global";
import Layout from "./Components/Layout";
import { connect } from "react-redux";
import NavigationBar from "./Navigation";
import * as utilTypes from "./UtilStore/util.actions";

import Routes from "./Routes";

const mapStateToProps = (state) => {
  return {
    theme: state.util.theme,
    checked: state.util.checked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ToggleTheme: () => dispatch({ type: utilTypes.TOGGLE_THEME }),
  };
};
function App(props) {
  return (
    <ThemeProvider
      key={props.theme}
      theme={props.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <React.Fragment>
        <NavigationBar
          switchTheme={
            <Layout checked={props.checked} onChange={props.ToggleTheme} />
          }
        />
        <Routes />
      </React.Fragment>
    </ThemeProvider>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
