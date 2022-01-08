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
            type="text"
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
          <v-btn block large color="success" @click="loginUser">Login</v-btn>
        </v-card-text>
        <v-snackbar v-model="snackbar">
          {{ snackbarMessage }}
        </v-snackbar>
      </v-card>
    </v-container>
  </v-form>
</template>
<script>
import { User } from "../services/auth.service.js";

export default {
  data: () => ({
    snackbar: false,
    snackbarMessage: "",
    valid: true,
    login: "",
    password: "",
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
  }),
  methods: {
    async loginUser() {
      if (this.$refs.form.validate()) {
        let data = {
          login: this.login,
          password: this.password,
        };

        let response = await User.login(data);
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
