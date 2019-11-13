import {getAllStudent} from "../services/LookExamWait";
export default {
  namespace: "LookExamWait",

  state: {
    allList:[]
  },


  effects: {
    *getAlllist({params},{ call, put }) {
      // eslint-disable-line
      const res = yield call(getAllStudent, params);
      yield put({type:"save",data:res.exam})
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, allList:action.data };
    }
  }
};
