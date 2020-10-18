<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email Address</label>
        <input
          v-model="email"
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button type="submit">Login</button>
    </form>

    <router-link to="{name:'Login'}">Sign Up</router-link>
  </div>
</template>

<script>
import { db } from "@/db";
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
      db.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          this.$router.push("/assessments");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style></style>
