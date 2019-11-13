
import request from "@/utils/request";

export const getCondition = (params) => request.get("/exam/questions/condition", params);
export const getSubject = () => request.get("/exam/subject");
export const getExamType = () => request.get("/exam/examType");
export const getQuestionsType = () => request.get("/exam/getQuestionsType");
export const getInsertType = (params) => request.get("/exam/insertQuestionsType",params);
export const getDeleteType = (params) => request.post("/exam/delQuestionsType",params);
export const getCreateQuestion = (params) => request.post("/exam/questions",params);
