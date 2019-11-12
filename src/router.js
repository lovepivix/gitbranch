import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import RouterView from '@/components/RouterView';
import routes from '@/config/routes.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={routes}></RouterView>
    </Router>
  );
}

export default RouterConfig;
