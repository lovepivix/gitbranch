import * as usersService from "../services/exam";
const { getExamDetail } = usersService;
export default {
  namespace: "ExamDetail",

  state: {
    getExamDetail:[]
  },

  subscriptions: {
    init({ dispatch, history }) {
      // dispatch({ type: "questionLook/initData" });
    }
  },

  effects: {
    *getExamDetailList(
      {
        payload
      },
      { call, put }
    ) {
      // eslint-disable-line
      let obj={
        id:payload
      }
      
      const res = yield call(getExamDetail);
      console.log(res)
      yield put({type:'sendExamdetail',payload:res})
    }
  },

  reducers: {
    sendExamdetail(state, action) {
      return { ...state, getExamDetail:action.payload };
    }
  }
};
