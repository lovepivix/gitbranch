import * as usersService from "../services/question";
const { getCreateQuestion } = usersService;
export default {
  namespace: "questionCreate",

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
      const res = yield call(getCreateQuestion, params);
    }
  },

  reducers: {
    login(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
