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
      signInSuccessUrl: "/",
    });
  },
};
</script>

<style></style>
