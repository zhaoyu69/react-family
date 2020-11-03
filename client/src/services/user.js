import request from "../utils/request";

export function getUserInfo(opt) {
  return request('/api/user/', { ...opt });
}
