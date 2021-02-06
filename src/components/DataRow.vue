<template>
  <tr v-if="row">
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ row.id }}
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm font-medium text-gray-900">
        {{ row.account_number }}
      </div>
      <div class="text-sm text-gray-500">
        {{ row.bank.name }}
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ row.user_id }}
      </div>
      <div class="text-sm text-gray-500">Optimization</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ row.balance }} {{ row.currency }}
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ row.credit_cards.length > 0 ? row.credit_cards[0].type : null }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a class="mx-4 text-indigo-600 hover:text-indigo-900">Edit</a>
      <a
        @click.prevent="$emit('delete', row.id)"
        class="mx-4 text-red-600 hover:text-red-900"
        >Remove</a
      >
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
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
});
</script>

<style></style>
