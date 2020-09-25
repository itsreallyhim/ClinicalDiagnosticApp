<template>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit, invalid }">

        <div class="my-4">
            <ValidationProvider rules="required|email" name="Email" v-slot="{ errors, valid }" vid="EmailAddress">
                <b-field label="Email"
                         :type="{ 'is-danger': errors[0], 'is-success': valid }"
                         :message="errors">
                    <b-input type="email" v-model="user.emailaddress" />
                </b-field>
            </ValidationProvider>
        </div>

        <div class="my-4">
            <ValidationProvider rules="required|password"
                                name="Password"
                                v-slot="{ errors, valid }">
                <b-field label="Password"
                         :type="{ 'is-danger': errors[0], 'is-success': valid }"
                         :message="errors">
                    <b-input v-model="user.password"
                             aria-autocomplete="password"
                             type="password"
                             :password-reveal="true"></b-input>
                </b-field>
            </ValidationProvider>
        </div>

        <b-button tag="input"
                  type="is-link"
                  native-type="submit"
                  value="Login"
                  v-on:click="handleSubmit(submit)" />
    </ValidationObserver>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: "Login",
        data() {
            return {
                user: {
                    username: null,
                    password: null
                },
            };
        },
        computed: {
            ...mapState('authentication', ['status'])
        },
        methods: {
            ...mapActions('authentication', ['login']),
            submit() {
                this.login(this.user);
            },
        },
    };
</script>

<style></style>
