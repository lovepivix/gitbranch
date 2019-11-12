import React from "react";
import { Switch, Route, Redirect } from "dva/router";
function RouterView(props) {
  const routes = props.routes;
  return (
    <Switch>
      {routes.map(item => {
        return item.redirect ? (
          <>
            <Route
              path={item.path}
              key={item.path}
              render={props => {
                return (
                  <item.component {...props} routes={item.children}>
                    <RouterView routes={item.children}></RouterView>
                  </item.component>
                );
              }}
            ></Route>
            <Redirect
              from={item.path}
              to={item.redirect}
              key={item.redirect}
            ></Redirect>
          </>
        ) : (
          <Route
            path={item.path}
            key={item.path}
            render={props => {
              return (
                <item.component {...props} routes={item.children}>
                  <RouterView routes={item.children}></RouterView>
                </item.component>
              );
            }}
          ></Route>
        );
      })}
    </Switch>
  );
}
export default RouterView;
