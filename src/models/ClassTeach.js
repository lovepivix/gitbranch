import {getAllStudent, Insert} from "../services/ClassTeach";
export default {
  namespace: "ClassTeach",

  state: {
    allList:[]
  },


  effects: {
    *getAlllist({params},{ call, put }) {
      // eslint-disable-line
      const res = yield call(getAllStudent, params);
      yield put({type:"save",data:res.data})
    },
    *Insertobj({params},{call,put}){
      console.log(params)
      const res = yield call(Insert, params);
      console.log(res)
      if(res.code===1){
         yield put({type:"getAlllist"})
      }
     
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, allList:action.data };
    }
  }
};
