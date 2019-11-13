import request from "@/utils/request";
export const getAllStudent = (params) =>request.get("/exam/student", params)