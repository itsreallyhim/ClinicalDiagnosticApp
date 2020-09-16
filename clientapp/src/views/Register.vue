<template>
  <section class="section">
    <h1 class="title is-2">Register</h1>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <ValidationProvider
        rules="required"
        name="First Name"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="First Name"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input v-model="firstname" />
        </b-field>
      </ValidationProvider>
      <ValidationProvider name="Middle Name" v-slot="{ errors, valid }">
        <b-field label="Middle Name">
          <b-input v-model="middlename" />
        </b-field>
      </ValidationProvider>
      <ValidationProvider
        rules="required"
        name="Last Name"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="Last Name"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input v-model="lastname" />
        </b-field>
      </ValidationProvider>
      <ValidationProvider
        rules="required|email"
        name="Email"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="Email"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input type="email" v-model="email" />
        </b-field>
      </ValidationProvider>
      <ValidationProvider
        rules="required"
        vid="password"
        name="Password"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="Password"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input type="password" v-model="password" />
        </b-field>
      </ValidationProvider>
      <b-button
        tag="input"
        native-type="submit"
        value="Register"
        v-on:click="handleSubmit(submit)"
      />
    </ValidationObserver>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {},
  },
};
</script>
