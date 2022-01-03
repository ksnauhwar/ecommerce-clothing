import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { persistUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import Spinner from "./components/spinner/spinner.component";
import "./App.css";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shoppage/shopPage.component"));
const CheckoutPage = lazy(() =>
  import("./pages/checkoutpage/checkoutpage.component")
);
const SignInSignUpPage = lazy(() =>
  import("./pages/sign-in-sign-up-page/sign-in-sign-up.component")
);

const App = (props) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persistUserSession());
  }, []);

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner></Spinner>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              path="/signIn"
              exact
              render={() => {
                return currentUser ? <Redirect to="/" /> : <SignInSignUpPage />;
              }}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
