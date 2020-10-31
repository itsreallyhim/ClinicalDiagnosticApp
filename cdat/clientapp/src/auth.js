import firebase from "@/firebase";
import store from "@/store";
import db from "@/db";
import router from "@/router";
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.user) user = user.user;

    //let adminEmails = ["john.miller.canberra@gmail.com", "u3160264@gmail.com"]
    let role = null;
    db.collection('users').doc(user.uid).get().then(x => x.data()).then(
      x => {
        console.log(x.role); role = x.role.id || null;





        console.log(role);
        const dbProfile = {
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL,
          role:
            role != null
              ? db.collection("roles").doc(role)
              : db.collection("roles").doc("onboarding"),
        };

        db.collection("users")
          .doc(dbProfile.id)
          .set(dbProfile, { merge: true });

        store.commit("auth/setUser", dbProfile);
        store.dispatch("user/linkProfile");
        if (router.currentRoute.name == "Login") {
          router.push("/");
        } else if ("formID" in router.currentRoute.params) {
          store.dispatch(
            "responses/createResponse",
            router.currentRoute.params.formID
          );
        }


      });
  } else {
    store.commit("auth/setUser", null);
    router.push({ name: "Home" });
  }

});
