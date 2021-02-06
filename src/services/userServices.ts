import ApiService from "@/services/apiServices";
import FilterType from "@/types/FIlterType";
import { UserType } from "@/types/UserType";

export default {
  getAll(filter: any): any {
    return ApiService.authorizeRequest(`/users`, ApiService.get, filter);
  },
  get(id: number | string): any {
    return ApiService.authorizeRequest(`/users/${id}`, ApiService.get);
  },
  delete(id: number): any {
    return ApiService.authorizeRequest(`/users/${id}`, ApiService.delete);
  },
  update(id: number, data: any) {
    return ApiService.authorizeRequest(`/users/${id}`, ApiService.put, data);
  },
  post(data: any) {
    return ApiService.authorizeRequest("/users", ApiService.post, data);
  },
};
