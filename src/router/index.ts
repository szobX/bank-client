import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import EditUser from "@/views/User/Edit.vue";
import AddUser from "@/views/User/Add.vue";
import EmptyUser from "@/views/User/Empty.vue";

import ListUser from "@/views/User/List.vue";

import AccountList from "@/views/Account/List.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: AccountList,
  },

  {
    path: "/users",
    name: "UserList",
    component: ListUser,
    props: true,
  },
  {
    path: "/users/edit/:id",
    name: "UserEdit",
    component: EditUser,
  },
  {
    path: "/users/add",
    name: "UserAdd",
    component: AddUser,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
