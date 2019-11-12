import {fetchAllQuestions,fetchAllSubjects,fetchAllQuestionsType,fetchAllExamType,fetchConditionedQuestions} from '@/services/question.js'
import storage from '@/utils/storage.js'
// import { Router, Route, routerRedux } from 'dva/router';
// console.log({Router, Route, routerRedux })
const initState = {
  questionList:[

  ],
  subjectList:[],
  questionsType:[],
  examType:[]
};
export default {

    namespace: 'question',
  
    state: initState,
  
    subscriptions: {
      setup({ dispatch, history },done) {  // eslint-disable-line
        console.log(done)
      },
    },
  
    effects: {
      *fetchQuestions({ payload }, { call, put }) {  // eslint-disable-line
        const res=yield call(fetchAllQuestions)
        console.log(res)
        yield put({ type: 'questionList', data:res.data });
      },
      *fetchSubjects({ payload }, { call, put }) {  // eslint-disable-line
        const res=yield call(fetchAllSubjects)
        console.log(res)
        yield put({ type: 'subjectList', data:res.data });
      },
      *fetchQuestionsType({ payload }, { call, put }) {  // eslint-disable-line
        const res=yield call(fetchAllQuestionsType)
        console.log(res)
        yield put({ type: 'questionsType', data:res.data });
      },
      *fetchExamType({ payload }, { call, put }) {  // eslint-disable-line
        const res=yield call(fetchAllExamType)
        console.log(res)
        yield put({ type: 'examType', data:res.data });
      },
      *fetchQBCQuestions({ payload }, { call, put }) {  // eslint-disable-line
        console.log(payload)
       let sentData={}
        Object.keys(payload).map(item=>{
            if(payload[item]){
                sentData[item]=payload[item]
            }
        })
        console.log(sentData)
        const res=yield call(fetchConditionedQuestions,sentData)
        console.log(res)
        yield put({ type: 'questionList', data:res.data });
      },
     
    },
  
    reducers: {
        questionList(state, action) {
            let questionList=action.data
            return {...state,questionList};   
        },
        subjectList(state, action) {
            let subjectList=action.data
            console.log(action.data)
            return {...state,subjectList};
        },
        questionsType(state, action) {
            let questionsType=action.data
            console.log(action.data)
            return {...state,questionsType};
        },
        examType(state, action) {
            let examType=action.data
            console.log(action.data)
            return {...state,examType};
        },

        
  
    },
  
  };
  