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
