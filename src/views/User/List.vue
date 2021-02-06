<template>
  <div>
    <header class="bg-white shadow">
      <div
        class="max-w-7xl flex justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8"
      >
        <h1
          class="text-3xl align-baseline font-bold leading-tight text-gray-900"
        >
          Users list
        </h1>
        <a
          href="/users/add"
          class=" block text-base py-2 px-4 rounded-sm mx-4 bg-green-600 hover:bg-green-900 text-white "
        >
          ADD NEW USER
        </a>
      </div>
    </header>
    <main>
      <div class="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
        <data-table v-if="users" :headers="headers" :data="users.data">
          <template #filter>
            <div class="flex items-baseline">
              <div class="block w-max-1/2 ">
                <div class="relative">
                  <span
                    class="h-full absolute inset-y-0 left-0 flex items-center pl-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="h-4 w-4 fill-current text-gray-500"
                    >
                      <path
                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    placeholder="Search"
                    v-model="search"
                    class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>

                <small class="text-green-700  bottom-0"
                  >search first name or last name ( min 3 letter)</small
                >
              </div>
              <div class="ml-8 relative">
                <select
                  v-model="sex"
                  class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option :value="null">All</option>
                  <option value="0">Man</option>
                  <option value="1">Woman</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
              <button
                @click.prevent="setFilters"
                class=" ml-auto block text-base py-2 px-4 rounded-sm mx-4 bg-blue-600 hover:bg-blue-800 text-white "
              >
                FILTERS
              </button>
            </div>
          </template>
          <template #body>
            <DataRowUser
              :key="row.id"
              v-for="row in users.data"
              :row="row"
              @delete="deleteUser($event)"
            />
          </template>
        </data-table>
        <div class="flex justify-center" v-if="loading">
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import useUsers from "@/modules/users";
import { onMounted, defineComponent, ref } from "vue";
import FilterType from "@/types/FIlterType";
import DataRowUser from "@/components/DataRowUser.vue";
export default defineComponent({
  components: { DataTable, DataRowUser },
  name: "UserList",
  setup() {
    const search = ref("");
    const sex = ref(null);
    const { users, load, loading, deleteUser, headers } = useUsers();

    const setFilters = () => {
      console.log("filters");
      const filter: FilterType = { sex: null, search: "" };
      filter.sex = sex.value;
      if (search.value.length < 3) {
        delete filter.search;
      } else {
        filter.search = search.value;
      }
      console.log(filter);
      load(filter);
    };

    load(null);

    return {
      setFilters,
      sex,
      search,
      users,
      load,
      loading,
      deleteUser,
      headers,
    };
  },
});
</script>

<style>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgb(31, 41, 55);
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
