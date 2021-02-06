<template>
  <templete v-if="!loading">
    <div class="container mx-auto">
      <data-table :headers="headers" :data="accounts" :actions="deleteAccount">
        <template #filter>
          <h5>Filters</h5>
          <input type="text" />
        </template>
        <template #body>
          <DataRow
            :action="{ deleteAccount }"
            :key="row.id"
            v-for="row in accounts.data"
            :row="row"
            @delete="deleteAccount($event)"
          />
        </template>
      </data-table>
    </div>
  </templete>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import useAccounts from "@/modules/accounts";
import { onMounted } from "vue";
import DataRow from "@/components/DataRow.vue";
export default {
  components: { DataTable, DataRow },
  setup() {
    const {
      error,
      accounts,
      load,
      loading,
      deleteAccount,
      headers,
    } = useAccounts();
    load();
    onMounted(() => {
      console.log("mounted");
    });
    return {
      accounts,
      load,
      loading,
      deleteAccount,
      headers,
    };
  },
};
</script>

<style></style>
