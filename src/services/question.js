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

