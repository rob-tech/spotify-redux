import React from "react";
import { withRouter } from "react-router";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../Store";


class Home extends React.Component {
  state = {};
  render() {
    var RoutedNavigation = withRouter(MainPage);
    return (
      <>
          <Provider store={configureStore()}>
        <Router>
          <RoutedNavigation />
        </Router>
        </Provider>
      </>
    );
  }
}

export default Home;
