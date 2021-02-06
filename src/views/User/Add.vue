<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        Add User
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <UserForm />
    </div>
  </main>
</template>

<script>
import UserForm from "@/components/Users/UserForm.vue";
export default {
  components: { UserForm },
  name: "UserAdd",
};
</script>

<style></style>
