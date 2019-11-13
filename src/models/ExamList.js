import * as usersService from "../services/exam";
const { getExam } = usersService;
export default {
  namespace: "ExamList",

  state: {
    getExamList:[]
  },

  subscriptions: {
    init({ dispatch, history }) {
      
    }
  },

  effects: {
    *getExamList(
      {
        params
      },
      { call, put }
    ) {
      // eslint-disable-line
      const res = yield call(getExam);
      yield put({type:'sendExamList',payload:res.exam})
    }
  },

  reducers: {
    sendExamList(state, action) {
      return { ...state, getExamList:action.payload };
    }
  }
};
