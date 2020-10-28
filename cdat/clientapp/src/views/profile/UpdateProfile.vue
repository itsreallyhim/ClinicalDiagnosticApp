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
                  >Display Name</label
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

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="country"
                  class="block text-xs font-medium leading-5 text-gray-700"
                >
                  Role
                </label>
                <select
                  v-model="userProfile.role"
                  id="role"
                  :readonly="saved"
                  class="block w-full px-3 py-2 mt-1 text-sm transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-xs sm:leading-5"
                >
                  <option value="patient">Patient</option>
                  <option value="practitioner">Practitioner</option>
                </select>
                <small class="text-xs font-light">
                  Any role change needs to be approved by a Global Back Care
                  admin.
                </small>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="contactnumber"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Contact Number</label
                >
                <input
                  v-model="userProfile.contactNumber"
                  id="contactnumber"
                  type="text"
                  :readonly="saved"
                  placeholder="Contact Number"
                  class="block w-full px-3 py-2 mt-1 text-sm transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-xs sm:leading-5"
                />
              </div>
            </div>
            <button
              type="submit"
              :disabled="saved"
              :class="
                saved || saving
                  ? 'cursor-not-allowed bg-opacity-50 hover:bg-opacity-50'
                  : ''
              "
              class="justify-center max-w-sm px-4 py-2 mt-8 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue hover:bg-blue focus:outline-none focus:border-blue focus:shadow-outline-blue active:bg-blue"
            >
              <span>{{ saved ? "Saved" : "Save Profile" }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="font-medium leading-6 text-gray-900 ">
            Health Information
          </h3>
          <p class="mt-1 text-xs leading-5 text-gray-500">
            Your health information
          </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="saveProfile">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-4">
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

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="gender"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Gender</label
                >
                <input
                  v-model="userProfile.gender"
                  id="gender"
                  :readonly="saved"
                  type="text"
                  placeholder="Gender"
                  class="block w-full px-3 py-2 mt-1 text-sm transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-xs sm:leading-5"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="weight"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Weight</label
                >
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    class="block w-full pr-12 form-input pl-7 sm:text-sm sm:leading-5"
                    type="number"
                    name="weight"
                    id="weight"
                    min="0"
                    :readonly="saved"
                    v-model="userProfile.kilos"
                  />

                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <span class="text-gray-500 sm:text-sm sm:leading-5">
                      kgs
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="bpf"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Body Fat Percentage</label
                >
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    class="block w-full pr-12 form-input pl-7 sm:text-sm sm:leading-5"
                    type="number"
                    :readonly="saved"
                    name="bfp"
                    id="bfp"
                    min="0"
                    max="100"
                    v-model="userProfile.bfp"
                  />

                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <span class="text-gray-500 sm:text-sm sm:leading-5">
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="height"
                  class="block text-xs font-medium leading-5 text-gray-700"
                  >Height</label
                >
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    :readonly="saved"
                    class="block w-full pr-12 form-input pl-7 sm:text-sm sm:leading-5"
                    type="number"
                    name="height"
                    id="height"
                    min="0"
                    v-model="userProfile.height"
                  />

                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <span class="text-gray-500 sm:text-sm sm:leading-5">
                      cms
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              :disabled="saved"
              :class="
                saved || saving
                  ? 'cursor-not-allowed bg-opacity-50 hover:bg-opacity-50'
                  : ''
              "
              type="submit"
              class="justify-center max-w-sm px-4 py-2 mt-8 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue hover:bg-blue focus:outline-none focus:border-blue focus:shadow-outline-blue active:bg-blue"
              @click="saveProfile"
            >
              <span>{{ saved ? "Saved" : "Save Profile" }}</span>
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
  components: {},
  data: () => ({
    userProfile: {
      role: "patient",
      dateOfBirth: null,
      contactNumber: null,
      gender: null,
      kilos: null,
      bpf: null,
      height: null,
    },
    saved: false,
    saving: false,
  }),
  methods: {
    ...mapActions("user", ["setProfile"]),
    saveProfile() {
      this.saving = true;
      this.setProfile(this.userProfile);
      this.saving = false;
      this.saved = true;
    },
  },
  mounted() {
    if (this.profile != undefined) {
      if ("dateOfBirth" in this.profile)
        this.userProfile.dateOfBirth = this.profile.dateOfBirth;

      if ("role" in this.profile) this.userProfile.role = this.profile.role;
      if ("contactNumber" in this.profile)
        this.userProfile.contactNumber = this.profile.contactNumber;
      if ("gender" in this.profile)
        this.userProfile.gender = this.profile.gender;
      if ("kilos" in this.profile) this.userProfile.kilos = this.profile.kilos;
      if ("bfp" in this.profile) this.userProfile.bfp = this.profile.bfp;
      if ("height" in this.profile)
        this.userProfile.height = this.profile.height;
    }
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("user", ["profile"]),
  },
};
</script>

<style></style>
