<template>
    <section class="section">
        <h1 class="title is-2">Register</h1>
        <form>
            <b-field label="Email">
                <b-input placeholder="Enter your email"
                         v-model="email" />
            </b-field>
            <b-field label="Password">
                <b-input type="password"
                         placeholder="Enter a password"
                         v-model="password" />
            </b-field>
            <b-button tag="input"
                      native-type="submit"
                      value="Register" />
        </form>
    </section>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: ''
            }
        },
    }
</script>