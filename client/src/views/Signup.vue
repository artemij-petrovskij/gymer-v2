<template>
  <v-form ref="form" v-model="valid" lazy-validation autocomplete="on">
    <v-container>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-card-text>
          <v-text-field
            v-model="login"
            autocapitalize="off"
            autocorrect="off"
            autocomplete="username"
            label="Login"
            placeholder="Login"
            :rules="loginRules"
            solo
            dense
            elebation="5"
          ></v-text-field>

          <v-text-field
            v-model="password"
            autocomplete="current-password"
            label="password"
            placeholder="password"
            type="password"
            :rules="passRules"
            solo
            dense
          ></v-text-field>

          <v-text-field
            v-model="checkpass"
            label="password"
            placeholder="password"
            type="password"
            :rules="passSecRules"
            solo
            dense
          ></v-text-field>
          <v-btn block large color="success" @click="registerUser"
            >Continue</v-btn
          >
        </v-card-text>
      </v-card>
    </v-container>

    <v-snackbar v-model="snackbar"> {{ snackbarMessage }}</v-snackbar>
  </v-form>
</template>
<script>
import { User } from "../services/auth.service.js";

export default {
  data: () => ({
    valid: true,
    login: "",
    password: "",
    checkpass: "",
    snackbar: false,
    snackbarMessage: "",

    loginRules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length >= 5 || "Min 5 characters",
      (value) => (value || "").length <= 40 || "Max 40 characters",
    ],
    passRules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
      (value) => (value || "").length >= 5 || "Min 5 characters",
    ],
    passSecRules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
      (value) => (value || "").length >= 5 || "Min 5 characters",
    ],
  }),
  methods: {
    async registerUser() {
      if (this.password === this.checkpass) {
        console.log(true);
      } else {
        this.snackbar = true;
        this.snackbarMessage = "Пароли не совпадают";
        return false;
      }
   
      if (this.$refs.form.validate()) {
        let data = {
          login: this.login,
          password: this.password,
        };

        let response = await User.signup(data);
        if (response.err) {
          this.snackbar = true;
          this.snackbarMessage = response.err;
        } else {
          if (localStorage.getItem("jwt") != null) {
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              this.$router.push("/dashboard");
            }
          }
        }
      }
    },
  },
};
</script>
<style lang="scss">
.v-text-field {
  margin-bottom: 30px;
}
.v-input__slot {
  background-color: #fafbfc !important;
}
</style>
