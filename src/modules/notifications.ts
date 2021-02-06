import { ref } from "vue";

type Notification = {
  id: string;
  title: string;
  body: string;
  type: string;
};

export default function useNotifications() {
  const notifications = ref<Notification[]>([]);

  const addNotification = (ntf: Notification) => {
    notifications.value.push(ntf);
    console.log(notifications);

    setTimeout(() => {
      notifications.value = notifications.value.filter(
        (item) => item.id !== ntf.id
      );
    }, 3000);
  };

  return {
    notifications,
    addNotification,
  };
}
