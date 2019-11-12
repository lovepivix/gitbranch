import {fetchLogin,fetchUserInfo} from '@/services/user.js'
import storage from '@/utils/storage.js'
// import { Router, Route, routerRedux } from 'dva/router';
// console.log({Router, Route, routerRedux })
const initState = {
  userInfo:{

  }
};
export default {

    namespace: 'user',
  
    state: initState,
  
    subscriptions: {
      setup({ dispatch, history },done) {  // eslint-disable-line
        console.log(done)
      },
    },
  
    effects: {
      *login({ payload }, { call, put }) {  // eslint-disable-line
        console.log(payload)
        const res=yield call(fetchLogin,payload)
        storage.setItem('token',res.token)
        console.log(res)
        yield put({ type: 'userInfo', token:res.token });

      },
      *userInfo({ token }, { call, put }) {  // eslint-disable-line
        console.log(token)
        const res=yield call(fetchUserInfo,{token})
        console.log(res)
        yield put({ type: 'setInfo', data:res });
      },
    },
  
    reducers: {
      setState(state, action) {
        console.log(action)
      
        switch (action.type){
          case 'setInfo' :
            let userInfo=action.data
            return {...state,userInfo};
        
           
            default:
                return state;
        }
        
      },
    },
  
  };
  