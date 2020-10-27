<template>
  <div id="profile">
    <div class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="font-medium leading-6 text-gray-900 ">
            Personal Information
          </h3>
          <p class="mt-1 text-xs leading-5 text-gray-500">
            Your personal information
          </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="setProfile(userProfile)">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first_name"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Name</label
                >
                <span
                  id="email_address"
                  class="block w-full px-3 py-2 mt-1 sm:text-xs sm:leading-5"
                  >{{ user.displayName }}</span
                >
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="email_address"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Email address</label
                >
                <span
                  id="email_address"
                  class="block w-full px-3 py-2 mt-1 sm:text-xs sm:leading-5"
                  >{{ user.email }}</span
                >
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Role</label
                >
                <select
                  v-model="userProfile.role"
                  id="role"
                  class="block w-full px-3 py-2 mt-1 text-sm transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-xs sm:leading-5"
                >
                  <option value="patient">Patient</option>
                  <option value="practitioner">Practitioner</option>
                </select>
              </div>

              <div class="col-span-6">
                <label
                  for="street_address"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Date of Birth</label
                >
                <input
                  v-model="userProfile.dateOfBirth"
                  id="dob"
                  type="date"
                  class="block w-full px-3 py-2 mt-1 text-sm transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-xs sm:leading-5"
                />
              </div>
            </div>
            <button
              type="submit"
              class="justify-center max-w-sm px-4 py-2 mt-8 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue hover:bg-blue focus:outline-none focus:border-blue focus:shadow-outline-blue active:bg-blue"
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "update-profile",
  data: () => ({
    userProfile: {
      role: "patient",
      dateOfBirth: null,
    },
  }),
  methods: {
    ...mapActions("user", ["setProfile"]),
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>

<style></style>
