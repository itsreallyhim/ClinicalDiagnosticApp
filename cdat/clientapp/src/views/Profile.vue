<template>
  <div id="profile">
    <h1>Profile</h1>
    {{ user.displayName }}
    <form @submit.prevent="setProfile(profile)">
      <div>
        <label for="role">Role</label>
        <select name="role" id="role" v-model="profile.role">
          <option value="patient">Patient</option>
          <option value="practitioner">Practitioner</option>
        </select>
      </div>
      <div>
        <label for="dateofbirth">Date of Birth</label
        ><input
          type="date"
          name="dateofbirth"
          id="dateofbirth"
          v-model="profile.dateOfBirth"
        />
      </div>
      <button type="submit">Save Profile</button>
    </form>
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
