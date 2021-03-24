import React from "react";
import { Redirect, Route } from "react-router-dom";

//IsUserRedirect: return <Route>
//<Route>: checks if(!user) {return children e.g current page signin}
//else(user) {redirect to loggedInPath e.g browse}
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
}

//ProtectedRoute: return <Route>
//<Route>: checks if(user) {return children e.g current page browse}
//else(!user) {redirect to pathname e.g signin}
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
