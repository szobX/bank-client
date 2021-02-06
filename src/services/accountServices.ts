import ApiService from "@/services/apiServices";
export default {
  getAll(): any {
    return ApiService.authorizeRequest(`/accounts`, ApiService.get);
  },
  delete(id: number): any {
    return ApiService.authorizeRequest(`/accounts/${id}`, ApiService.delete);
  },
};
