<template>
  <div class="flex flex-col">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg"
      >
        <div class="bg-gray-400 px-4 py-4">
          <slot name="filter"></slot>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                v-for="(header, id) in headers"
                :key="id"
                scope="col"
                class="col"
              >
                {{ header }}
              </th>

              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
                <span class="text-yellow-300 sr-only">remove</span>
              </th>
            </tr>
          </thead>

          <tbody class="bg-white divide-y divide-gray-200">
            <slot name="body"></slot>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    headers: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  name: "DataTable",
  components: {},
  setup() {
    return {
      test: "git",
    };
  },
});
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
