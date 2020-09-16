import { required, confirmed, email, alpha_num } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required.",
});

extend("email", {
  ...email,
  message: "This field must be a valid email.",
});

extend("confirmed", {
  ...confirmed,
  message: "This field confirmation does not match.",
});

extend("username", {
  ...alpha_num,
  message: "Your username cannot contain spaces.",
});

extend("password", (value) => {
  if (value.length > 8) return true;
else return "Your password is 8 characters minimum";
});
