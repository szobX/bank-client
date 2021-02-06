import { ref } from "vue";
import accountServices from "../services/accountServices";
import store from "./store";
// type BankType = {
//   id: number
//   name: string
// }

type Account = {
  id: number;
  account_number: string;
  bank: any; // todo
  credit_cards: any; //todo
  balance: string;
};

export default function useAccounts() {
  const error = ref(null);
  const accounts = ref(null);
  const account = ref(null);
  const { addNotification } = store;
  const loading = ref(false);
  const headers = ref([
    "id",
    "account number",
    "user",
    "balance",
    "credit cards",
  ]);
  const load = async () => {
    try {
      // loading.value = true;
      console.log("try");
      const res = await accountServices.getAll();

      loading.value = false;
      accounts.value = res.data;
    } catch (e) {
      console.log(e.response, "error");
      error.value = e;
    }
  };

  const deleteAccount = async (id: number) => {
    try {
      // loading.value = true;
      console.log(id);
      const res = await accountServices.delete(id);
      addNotification({
        id: Date.now().toString(),
        title: "Account",
        body: "Account has been deleted",
        type: "success",
      });

      load();
    } catch (e) {
      console.log(e);
      addNotification({
        id: Date.now().toString(),
        title: "Account",
        body: "Error, contact with admin.",
        type: "error",
      });
    }
  };

  return {
    deleteAccount,
    error,
    accounts,
    load,
    loading,
    headers,
  };
}
