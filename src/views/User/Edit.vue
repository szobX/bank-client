<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        Edit user {{ route.params.id }}
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <UserForm :id="route.params.id" type="edit" />
    </div>
  </main>
</template>

<script>
import UserForm from "@/components/Users/UserForm.vue";
import { useRoute } from "vue-router";

export default {
  components: { UserForm },
  name: "UserEdit",
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>

<style></style>
