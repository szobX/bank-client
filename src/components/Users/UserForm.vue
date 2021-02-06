<template>
  <div
    v-if="user"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
  >
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-first-name"
        >
          First Name
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          id="grid-first-name"
          type="text"
          placeholder="First Name"
          v-model="user.firstName"
        />
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Last Name
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-last-name"
          type="text"
          placeholder="Last Name"
          v-model="user.lastName"
        />
      </div>
    </div>
    <div class="mb-6">
      <label for="man" class="inline-flex items-center mt-3 mr-2">
        <input
          id="man"
          type="radio"
          value="1"
          v-model="user.sex"
          class="form-radio h-5 w-5 text-gray-600"
        /><span class="ml-2 text-gray-700">Man</span>
      </label>
      <label for="woman" class="inline-flex items-center mt-3">
        <input
          id="woman"
          type="radio"
          value="0"
          v-model="user.sex"
          class="form-radio h-5 w-5 text-gray-600"
        /><span class="ml-2 text-gray-700">Woman</span>
      </label>
    </div>
    <div class="mb-6">
      <label for="date" class="inline-flex items-center mt-3 mr-2">
        Birthday
      </label>
      <input
        id="date"
        type="date"
        v-model="user.birthday"
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
      />
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          id="email"
          type="text"
          placeholder="Email"
          v-model="user.email"
        />
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="phone"
        >
          Phone
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="phone"
          type="text"
          placeholder="Phone"
          v-model="user.phone"
        />
      </div>
    </div>
    <h3
      class="text-2xl font-bold leading-tight text-gray-900 pb-2 mb-4 border-b-2"
    >
      Address
    </h3>

    <div class="-mx-3 md:w-100 px-3 mb-6 md:mb-6">
      <label
        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-city"
      >
        Street and Number
      </label>
      <input
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        id="grid-city"
        type="text"
        placeholder="Street and number"
        v-model="user.address.street_and_number"
      />
    </div>

    <div class="-mx-3 md:flex mb-2">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-city"
        >
          City
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-city"
          type="text"
          placeholder="City"
          v-model="user.address.city"
        />
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-state"
        >
          Country
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
            id="grid-state"
            v-model="user.address.country"
          >
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
            <option value="Franch">Franch</option>
          </select>
          <div
            class=" arrow pointer-events-none absolute pin-y pin-r flex items-center px-2 text-gray-darker"
          >
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-post"
        >
          Post Code
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-post"
          type="text"
          placeholder="Post Code"
          v-model="user.address.post_code"
        />
      </div>
    </div>

    <div
      class="col-span-2 text-right border-t-2 border-gray-200 mt-6 pt-6 flex justify-between items-baseline"
    >
      <a
        class="text-purple-600 border-2 border-purple-600 py-2 font-bold px-2"
        href="/users"
        >back</a
      >
      <button
        @click.prevent="onSave"
        type="button"
        class="py-3 px-6 bg-purple-600 rounded-sm text-white font-bold w-full sm:w-32"
      >
        {{ type === "add" ? "ADD" : "UPDATE" }}
      </button>
    </div>
  </div>
</template>

<script>
import useUsers from "@/modules/users";
import { defineComponent } from "vue";
export default defineComponent({
  name: "UserForm",
  props: {
    type: {
      type: String,
      required: true,
      default: () => "add",
    },
    id: {
      Type: String,
      default: () => null,
    },
  },
  setup(props) {
    const { user, loadUser, loading, updateUser, addUser } = useUsers();

    loadUser(props.id);

    const onSave = () => {
      console.log(props.type);
      if (props.type === "edit") {
        updateUser(props.id);
      } else if (props.type === "add") {
        addUser();
      }
    };

    return {
      loading,
      user,
      onSave,
    };
  },
});
</script>
<style>
.arrow {
  top: 36%;
  right: 10px;
}
</style>
