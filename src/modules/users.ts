import { ref } from "vue";
import userServices from "../services/userServices";
import store from "./store";
import UserModel from "@/models/User";
import { UserType } from "@/types/UserType";
import FilterType from "@/types/FIlterType";

export default function useUsers() {
  const error = ref(null);
  const users = ref(null);
  const user = ref<UserType | null>(null);
  const { addNotification } = store;
  const loading = ref(false);
  const headers = ref([
    "id",
    "first name",
    "last name",
    "sex",
    "address",
    "phone",
    "email",
    "birthday",
  ]);
  const loadUser = (id: string | number) => {
    console.log(id);
    if (id) {
      userServices
        .get(id)
        .then((res: any) => (user.value = new UserModel(res.data)));
    } else {
      user.value = new UserModel(null);
    }
  };
  const load = async (filter: FilterType | null) => {
    try {
      // loading.value = true;
      let res;
      if (filter) {
        res = await userServices.getAll(filter);
      } else {
        res = await userServices.getAll(null);
      }
      console.log("try");

      loading.value = false;
      users.value = res.data;
    } catch (e) {
      console.log(e.response, "error");
      error.value = e;
    }
  };

  const deleteUser = async (id: number) => {
    try {
      // loading.value = true;
      console.log(id);
      const res = await userServices.delete(id);
      addNotification({
        id: Date.now().toString(),
        title: "User",
        body: "User has been deleted",
        type: "success",
      });

      load(null);
    } catch (e) {
      addNotification({
        id: Date.now().toString(),
        title: "User  ",
        body: "Error, contact with admin.",
        type: "error",
      });
    }
  };

  const updateUser = async (id: number) => {
    try {
      const res = await userServices.update(id, user.value);
      console.log(res);

      addNotification({
        id: Date.now().toString(),
        title: "User",
        body: "User has been edit",
        type: "success",
      });
    } catch (e) {
      console.log(e);
      addNotification({
        id: Date.now().toString(),
        title: "User  ",
        body: "Error, contact with admin.",
        type: "error",
      });
    }
  };
  const addUser = async () => {
    try {
      const res = await userServices.post(user.value);
      console.log(res);
      addNotification({
        id: Date.now().toString(),
        title: "User",
        body: "User has been add",
        type: "success",
      });
    } catch (e) {
      console.log(e);
      addNotification({
        id: Date.now().toString(),
        title: "User  ",
        body: "Error, contact with admin.",
        type: "error",
      });
    }
  };
  return {
    deleteUser,
    error,
    users,
    user,
    load,
    loadUser,
    loading,
    headers,
    updateUser,
    addUser,
  };
}
