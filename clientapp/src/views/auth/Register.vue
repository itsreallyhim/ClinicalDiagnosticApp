<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">

    <ValidationProvider rules="required" name="First Name" v-slot="{ errors, valid }">
      <b-field label="First Name"
               :type="{ 'is-danger': errors[0], 'is-success': valid }"
               :message="errors">
        <b-input v-model="user.firstName" />
      </b-field>
    </ValidationProvider>

    <ValidationProvider rules="required" name="Last Name" v-slot="{ errors, valid }">
      <b-field label="Last Name"
               :type="{ 'is-danger': errors[0], 'is-success': valid }"
               :message="errors">
        <b-input v-model="user.lastName" />
      </b-field>
    </ValidationProvider>

    <hr />

    <div class="my-4">
      <ValidationProvider rules="required|email" name="Email" v-slot="{ errors, valid }" vid="EmailAddress">
        <b-field label="Email"
                 :type="{ 'is-danger': errors[0], 'is-success': valid }"
                 :message="errors">
          <b-input type="email" v-model="user.emailaddress" placeholder="Your email will be used to login to this application" />
        </b-field>
      </ValidationProvider>
    </div>

    <div class="my-4">
      <ValidationProvider rules="required"
                          vid="password"
                          name="Password"
                          v-slot="{ errors, valid }">
        <b-field label="Password"
                 :type="{ 'is-danger': errors[0], 'is-success': valid }"
                 :message="errors">
          <b-input type="password"
                   v-model="user.password"
                   placeholder="Minimum 8 characters" :password-reveal="true" />
        </b-field>
      </ValidationProvider>
    </div>

    <div class="my-4">
      <ValidationProvider rules="required|confirmed:password"
                          name="Password Confirmation"
                          v-slot="{ errors, valid }">
        <b-field label="Confirm Password"
                 :type="{ 'is-danger': errors[0], 'is-success': valid }"
                 :message="errors">
          <b-input type="password" v-model="confirmation" placeholder="Please confirm your password" :password-reveal="true"></b-input>
        </b-field>
      </ValidationProvider>
    </div>
    <div class="buttons has-addons is-grouped">
      <b-button tag="input"
                type="is-link"
                native-type="submit"
                value="Register"
                v-on:click="handleSubmit(submit)" />

      <b-button tag="router-link"
                native-type="submit"
                :to="{ path: '/auth/login' }">
        Already Registered? Log in
      </b-button>
    </div>
  </ValidationObserver>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: "Register",
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          emailaddress: '',
          password: '',
        },
      };
    },
    methods: {
      ...mapActions('authentication', ['register']),
      submit() {
        this.register(this.user);
      },
    },
  };
</script>
