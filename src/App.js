import React from "react";
import { connect } from "react-redux";

import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shopPage.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkoutpage/checkoutpage.component";
import { persistUserSession } from "./redux/user/user.actions";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { persistUserSession } = this.props;
    persistUserSession();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signIn"
            exact
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  persistUserSession: () => dispatch(persistUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
