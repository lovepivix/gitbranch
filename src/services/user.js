import request from "@/utils/request";

export const getCreateUser = (params) => request.get("/user", params);
