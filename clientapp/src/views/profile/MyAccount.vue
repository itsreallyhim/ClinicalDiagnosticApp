<template>
  <div>
    <h1 class="title">
      Edit your account
    </h1>
    <section>
      <b-field label="Name">
        <b-input
          :lazy="true"
          type="text"
          v-model="profile.name"
          placeholder="Name"
        ></b-input>
      </b-field>
      <b-field label="Email">
        <b-input
          :lazy="true"
          type="text"
          v-model="profile.email"
          placeholder="Email"
        ></b-input>
      </b-field>
      <b-field label="Password">
        <b-input
          :lazy="true"
          type="password"
          password-reveal
          v-model="profile.password"
          placeholder="Password"
        ></b-input>
      </b-field>
      <b-field label="Date of Birth">
        <b-datepicker
          :lazy="true"
          v-model="profile.dateOfBirth"
          icon="calendar-today"
          placeholder="Click to select"
          locale="en-au"
        >
        </b-datepicker>
      </b-field>
      <b-button>
        Save Changes
      </b-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
  },
};
</script>

<style></style>
