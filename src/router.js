import React from 'react';
import { Router } from 'dva/router';
import RouterView from '@/config/router_config'
import Routes from '@/components/routerView'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={Routes}/>
    </Router>
  );
}

export default RouterConfig;
