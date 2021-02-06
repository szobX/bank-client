import { ref, reactive } from "vue";

import useNotifications from "./notifications";

const { notifications, addNotification } = useNotifications();

export default { notifications, addNotification };
