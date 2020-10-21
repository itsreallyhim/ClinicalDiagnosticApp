<template>
  <div id="profile">
    <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 text-sm leading-5 text-gray-500">
            Your personal information
          </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="setProfile(profile)">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first_name"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Name</label
                >
                <span
                  id="email_address"
                  class="mt-1  block w-full py-2 px-3   sm:text-sm sm:leading-5"
                  >{{ user.displayName }}</span
                >
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="email_address"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Email address</label
                >
                <span
                  id="email_address"
                  class="mt-1  block w-full py-2 px-3    sm:text-sm sm:leading-5"
                  >{{ user.email }}</span
                >
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Role</label
                >
                <select
                  v-model="profile.role"
                  id="role"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <option value="patient">Patient</option>
                  <option value="practitioner">Practitioner</option>
                </select>
              </div>

              <div class="col-span-6">
                <label
                  for="street_address"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Date of Birth</label
                >
                <input
                  v-model="profile.dateOfBirth"
                  id="dob"
                  type="date"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <button
              type="submit"
              class="max-w-sm mt-8 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Profile",
  data: () => ({
    profile: {
      role: "patient",
      dateOfBirth: new Date(),
    },
  }),
  methods: {
    ...mapMutations("user", ["setProfile"]),
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>

<style></style>
