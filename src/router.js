import React from 'react';
<<<<<<< HEAD
import { Router } from 'dva/router';
import RouterView from '@/config/router_config'
import Routes from '@/components/routerView'
=======
import { Router, Route, Switch } from 'dva/router';
import RouterView from '@/components/RouterView';
import routes from '@/config/routes.js';
>>>>>>> origin/dev

function RouterConfig({ history }) {
  return (
    <Router history={history}>
<<<<<<< HEAD
      <RouterView routes={Routes}/>
=======
      <RouterView routes={routes}></RouterView>
>>>>>>> origin/dev
    </Router>
  );
}

export default RouterConfig;
