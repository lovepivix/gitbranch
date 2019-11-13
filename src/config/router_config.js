import React from 'react';
import {Switch,Route,Redirect} from 'dva/router'


const RouterView = (props) => {
  const { routes } = props
  const routesArr=routes.filter(item=>!item.redirect)
  const redirectArr=routes.filter(item=>item.redirect)
  return (
    <Switch>
      {
       routesArr&& routesArr.map((item,ind)=>{
          return <Route path={item.path}  key={ind} render={(props)=>{
            return <item.component {...props} routes={item.children} > 
                    <RouterView routes={item.children} ></RouterView>
                </item.component>
          }}></Route>
        })
      }
      {
        redirectArr&& redirectArr.map((item,ind)=><Redirect  key={ind} to={item.redirect} from={item.path} />)
      }
    </Switch>
  );
  
};

export default RouterView;