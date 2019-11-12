import dynamic from 'dva/dynamic';
import {app} from '../index.js'

export default  (modules,component)=>{
    return dynamic({
        app,
        models: () => 
        modules.map(name=>import(`@/models/${name}`)),
        component,
      });
}