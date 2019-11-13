import request from "@/utils/request";
export const getAllStudent = (params) =>request.get("/manger/room", params)
export const Insert = (params) =>request.post("/manger/room", params)
export const Delete = (params) =>request.delete("/manger/room/delete", params)