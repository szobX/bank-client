<template>
  <div class=" bg-gray-100 w-full h-full">
    <!-- <Navbar></Navbar> -->
    <Notification></Notification>
    <router-view />
  </div>
</template>

<script lang="ts">
import Notification from "@/components/Layouts/Notification.vue";
// import Navbar from "./components/Layouts/Navbar.vue";
// import { ref } from 'vue'

export default {
  name: "App",
  components: { Notification },
};
</script>
