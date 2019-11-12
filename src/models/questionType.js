import * as usersService from "../services/question";
const { getQuestionsType,getInsertType,getDeleteType } = usersService;
export default {
  namespace: "questionType",

  state: {
    getQuestionsType:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *getQuestionsTypes(
      {
        payload
      },
      { call, put }
    ) {
      // eslint-disable-line
    
      const res = yield call(getQuestionsType);
      yield put({type:'QuestionsType',payload:res.data})
      
    },
    *insertType({ payload },{call,put}){
      console.log(payload)
      const res = yield call(getInsertType , payload);
    },
    *deleteType({ payload},{call,put}){
      const obj={
        id:payload.questions_type_id
      }
      const res = yield call(getDeleteType , obj);
    }
  },

  reducers: {
    QuestionsType(state, action) {
      return { ...state, getQuestionsType:action.payload };
    }
   
  }
};