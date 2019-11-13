import * as usersService from "../services/exam";
const { createExam } = usersService;
export default {
  namespace: "ExamCreate",

  state: {},

  subscriptions: {
    init({ dispatch, history }) {
      // dispatch({ type: "questionLook/initData" });
    }
  },

  effects: {
    *CreateExam(
      {
        params
      },
      { call, put }
    ) {
      // eslint-disable-line
      console.log(params)
      const res = yield call(createExam, params);
      console.log(res)
    }
  },

  reducers: {
    CreateExam(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
