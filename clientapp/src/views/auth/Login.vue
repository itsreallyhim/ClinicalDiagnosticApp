<template>
  <div>
      <!-- <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css"> -->

    <ValidationObserver ref="observer" v-slot="{ handleSubmit, invalid }">
      <form action="#" @submit.prevent="handleSubmit(login)">
        <ValidationProvider
          rules="username|required"
          name="Username"
          v-slot="{ errors, valid }"
        >
          <b-field
            label="Username"
            :type="valid ? 'is-success' : 'is-danger'"
            :message="errors"
          >
            <b-input v-model="user.username"></b-input>
          </b-field>
        </ValidationProvider>
        <ValidationProvider
          rules="required|password"
          name="Password"
          v-slot="{ errors, valid }"
        >
          <b-field
            label="Password"
            :type="valid ? 'is-success' : 'is-danger'"
            :message="errors"
          >
            <b-input
              v-model="user.password"
              aria-autocomplete="password"
              type="password"
              :password-reveal="true"
            ></b-input>
          </b-field>
        </ValidationProvider>

        <b-button :disabled="invalid" type="submit" native-type="submit">
          Login
        </b-button>
        {{ invalid }}
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: { username: null, password: null },
    };
  },
  methods: {
    login() {
      alert("Logging in");
      this.$store.commit("login", this.user);
    },
  },
};
</script>

<style></style>
