<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">

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
      <ValidationProvider rules="required|password"
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

    <div class="my-4">
      <ValidationProvider rules='required'
                          name="Role"
                          v-slot="{ errors }">
        <b-field label="Role"
                 :type="{ 'is-danger': errors[0], 'is-success': valid }"
                 :message="errors">
          <b-select icon="account" placeholder="Select a role" v-model="user.role" expanded>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </b-select>
        </b-field>
      </ValidationProvider>
    </div>

    <div class="my-4">
      <ValidationProvider rules="required" name="Code" v-slot="{ errors, valid }">
        <b-field label="Code"
                 :type="{ 'is-danger': errors[0], 'is-success': valid }"
                 :message="errors">
          <b-input v-model="registrationCode" />
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
          role: null
        },
        registrationCode: ''
      };
    },
    methods: {
      ...mapActions('authentication', ['register']),
      submit() {
      /* eslint-disable no-console */
        this.$emit('clicked', true);
        this.register(this.user)
          .then(resp => {
            console.log(resp);
          })
          .catch(error => {
            this.$emit('clicked', false);
            console.log(error);
          });
      },
    },
  };
</script>
