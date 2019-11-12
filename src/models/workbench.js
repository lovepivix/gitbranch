import * as usersService from "../services/login";
const { query } = usersService;
export default {
  namespace: "workbench",

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch(
      {
        payload
      },
      { call, put }
    ) {
      // eslint-disable-line
      const res = yield call(query, payload);
    }
  },

  reducers: {
    login(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
