<<<<<<< HEAD
import request from "@/utils/request";

export const getCondition = (params) => request.get("/exam/questions/condition", params);
export const getSubject = () => request.get("/exam/subject");
export const getExamType = () => request.get("/exam/examType");
export const getQuestionsType = () => request.get("/exam/getQuestionsType");
export const getInsertType = (params) => request.get("/exam/insertQuestionsType",params);
export const getDeleteType = (params) => request.post("/exam/delQuestionsType",params);
export const getCreateQuestion = (params) => request.post("/exam/questions",params);
=======
import request from '../utils/request';

export function fetchAllQuestions() {
  // method,url,options
  return request('get','/api/exam/questions/new',{
    data:{
    }
  });
}
export function fetchAllSubjects() {
  // method,url,options
  return request('get','/api/exam/subject',{
    data:{
    }
  });
}
export function fetchAllQuestionsType() {
  // method,url,options
  return request('get','/api/exam/getQuestionsType',{
    data:{
    }
  });
}
export function fetchAllExamType() {
  // method,url,options
  return request('get','/api/exam/examType',{
    data:{
    }
  });
}
export function fetchConditionedQuestions(payload) {
  // method,url,options
  return request('get','/api/exam/questions/condition',{
    data:{...payload}
  });
}

>>>>>>> origin/dev
