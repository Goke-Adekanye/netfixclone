import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browse, Signup, Signin } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  return (
    <>
      <Router>
        <Switch>
          <IsUserRedirect
            path={ROUTES.SIGN_IN}
            loggedInPath={ROUTES.BROWSE}
            user={user}
          >
            <Signin />
          </IsUserRedirect>

          <IsUserRedirect
            path={ROUTES.SIGN_UP}
            loggedInPath={ROUTES.BROWSE}
            user={user}
          >
            <Signup />
          </IsUserRedirect>

          <ProtectedRoute path={ROUTES.BROWSE} user={user}>
            <Browse />
          </ProtectedRoute>

          <IsUserRedirect
            path={ROUTES.HOME}
            loggedInPath={ROUTES.BROWSE}
            user={user}
            exact
          >
            <Home />
          </IsUserRedirect>
        </Switch>
      </Router>
    </>
  );
}
