import request from "@/utils/request";

export const createExam = (params) => request.post("/exam/exam", params);
export const getExam = () => request.get("/exam/exam");
export const getExamDetail = (params) => request.get("/exam/exam/w5tcy-g2dts",params);


