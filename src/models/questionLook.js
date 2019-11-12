
import * as usersService from "../services/question";
const {
  getCondition,
  getSubject,
  getExamType,
  getQuestionsType
} = usersService;

export default {
  namespace: "questionLook",

  state: {
    getConditionList: [],
    getSubjects: [],
    getExamTypes: [],
    getQuestionsTypes: []
  },

  subscriptions: {
    init({ dispatch, history }) {
      dispatch({ type: "initData" });
    }
  },

  effects: {
    *initData({ payload }, { call, put }) {
      const getsubject = yield call(getSubject);
      const getexamType = yield call(getExamType);
      const getquestionsType = yield call(getQuestionsType);
      yield put({
        type: "getState",
        payload: {
          getSubjects: getsubject.data,
          getExamTypes: getexamType.data,
          getQuestionsTypes: getquestionsType.data
        }
      });
    },
    *fetchCondition({ params }, { call, put }) {
      const res = yield call(getCondition, params);
      yield put({ type: "getConditions", payload: res.data });
    }
  },

  reducers: {
    getConditions(state, action) {
      return { ...state, getConditionList: action.payload };
    },
    getState(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
