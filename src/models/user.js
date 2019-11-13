<<<<<<< HEAD
import * as usersService from "../services/login";
import storage from "@/utils/storage";
const { login, userInfo } = usersService;

export default {
  namespace: "user",

  state: {
    info: ""
  },

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: "userInfo" })
        .then(() => {})
        .catch(e => {
          if (e) {
            history.push("/login");
          }
        });
    }
  },

  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(login, payload);
      if (res.code === 1) {
        storage.set("token", res.token);
        yield put({ type: "userInfo" });
      } else {
        return Promise.reject(res);
      }
    },
    *userInfo({ payload }, { call, put }) {
      const res = yield call(userInfo);
      storage.set("info", res.data);
      yield put({ type: "logins", payload: res.data });
    }
  },

  reducers: {
    logins(state, action) {
      return { ...state, info: action.payload };
    }
  }
};
=======
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
  
>>>>>>> origin/dev
