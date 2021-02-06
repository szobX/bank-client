<template>
  <div class="fixed w-1/4 right-2 top-10">
    <div
      :key="ntf.id"
      v-for="ntf in notifications"
      :class="ntf.type"
      class="w-full"
      role="alert"
    >
      <div class="flex">
        <svg
          class="h-6 w-6  mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill="bg-white"
            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
          ></path>
        </svg>

        <div>
          <p class="font-bold">{{ ntf.title }}</p>
          <p class="text-sm">
            {{ ntf.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useState from "@/modules/store";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const { notifications } = useState;

    return {
      notifications,
    };
  },
});
</script>

<style></style>
