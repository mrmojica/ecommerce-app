import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelector";
import { GlobalStyles } from "./globalStyles";
import { checkUserSession } from "./redux/user/userActions";
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";

// Imrpove performance using React Lazy loading.
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const CheckoutPage = lazy(() => import("./pages/Checkout/Checkout"));
const SignInAndSignUp = lazy(() =>
  import("./pages/SignInAndSignUp/SignInAndSignUp")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Suspense fallback={Spinner}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Suspense>
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
