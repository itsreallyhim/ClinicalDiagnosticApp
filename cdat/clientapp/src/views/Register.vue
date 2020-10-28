<template>
  <div>
    <div id="fbuiauth"></div>
  </div>
</template>

<script>
import firebase from "@/firebase";
import firebaseui from "@/firebaseui";
export default {
  name: "Register",
  mounted() {
    firebaseui.start("#fbuiauth", {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(authResult, redirectUrl);
          this.$route.push({ name: "Home" });
          return false;
        },
      },
    });
  },
};
</script>

<style></style>
