<template>
  <tr v-if="row">
    <td class="px-2 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ row.id }}
      </div>
    </td>
    <td class="px-2 py-4 whitespace-nowrap">
      <div class="text-sm font-medium text-gray-900">
        {{ row.firstName }}
      </div>
    </td>
    <td class="px-2 py-4 whitespace-nowrap">
      {{ row.lastName }}
    </td>
    <td class="px-2 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        <img
          v-if="row.sex === '1'"
          :src="require('/src/assets/man.svg')"
          alt=""
        />
        <img
          v-if="row.sex === '0'"
          :src="require('/src/assets/woman.svg')"
          alt=""
        />
      </div>
    </td>
    <td v-if="row.address" class="px-2 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ row.address.street_and_number }} - {{ row.address.post_code }}
        <div class="text-sm text-gray-500">
          {{ row.address.city }}, {{ row.address.country }}
        </div>
      </div>
    </td>
    <td v-else class="px-2 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        address didnt found
      </div>
    </td>
    <td class="px-2 py-4 whitespace-nowrap">
      {{ row.phone }}
    </td>
    <td class="px-2 py-4 whitespace-nowrap">
      {{ row.email }}
    </td>
    <td class="px-2 py-4 whitespace-nowrap">
      {{ row.birthday }}
    </td>
    <td class="px-2 py-4 whitespace-nowrap text-right text-sm font-medium">
      <router-link
        :to="{ name: 'UserEdit', params: { id: row.id } }"
        class="mx-4 text-indigo-600 hover:text-indigo-900"
        >Edit</router-link
      >
      <a
        @click.prevent="$emit('delete', row.id)"
        class="mx-4 text-red-600 hover:text-red-900 cursor-pointer"
        >Remove</a
      >
    </td>
  </tr>
</template>

<script>
// import { onMounted } from "vue";
export default {
  name: "DataRow",
  props: {
    action: {
      type: Object,
    },
    row: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      test: "test",
      props,
    };
  },
};
</script>

<style></style>
