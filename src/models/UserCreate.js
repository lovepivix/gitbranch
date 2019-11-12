import * as usersService from "../services/question";
const { getCreateUser } = usersService;
export default {
  namespace: "UserCreate",

  state: {},

  subscriptions: {
    init({ dispatch, history }) {
      // dispatch({ type: "questionLook/initData" });
    }
  },

  effects: {
    *getcreateQuestion(
      {
        params
      },
      { call, put }
    ) {
      // eslint-disable-line
      const res = yield call(getCreateUser, params);
    }
  },

  reducers: {
    login(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
