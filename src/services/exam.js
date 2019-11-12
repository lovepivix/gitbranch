import request from "@/utils/request";

export const createExam = (params) => request.post("/exam/exam", params);
export const getExam = () => request.get("/exam/exam");
