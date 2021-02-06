import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ApiService from "./services/apiServices";
import "./assets/index.css";
// TODO: get link from env
const link = "http://pszober.dev.cogitech.pl";
ApiService.init(link, `${link}/api`);
createApp(App)
  .use(router)
  .mount("#app");
