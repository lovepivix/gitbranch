import request from "@/utils/request";

export const login = (params) => request.post("/user/login", params);
export const userInfo = () => request.get("/user/userInfo");
