<template>
  <v-form ref="form" v-model="valid" lazy-validation autocomplete="on">
    <v-container>
      <v-card class="mx-auto" max-width="400" outlined elevation="8">
        <v-card-text>
          <v-text-field
            v-model="login"
            autocapitalize="off"
            autocorrect="off"
            autocomplete="username"
            label="Укажите Логин"
            placeholder="Укажите Логин"
            type="text"
            :rules="loginRules"
            solo
            dense
            elebation="5"
          ></v-text-field>

          <v-text-field
            v-model="password"
            autocomplete="current-password"
            label="Введите пароль"
            placeholder="Введите пароль"
            type="password"
            :rules="passRules"
            solo
            dense
          ></v-text-field>
          <v-btn block large color="success" @click="loginUser">Войти</v-btn>
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
      (value) => !!value || "Обязательное поле",
      (value) => (value || "").length >= 5 || "Минимум 5 символов",
      (value) => (value || "").length <= 20 || "Максимум 20 символов",
    ],
    passRules: [
      (value) => !!value || "Обязательное поле.",
      (value) => (value || "").length >= 5 || "Минимум 5 символов",
      (value) => (value || "").length <= 20 || "Максимум 20 символов",
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
<style lang="css" scoped>
.v-input__slot {
  background-color: #0f3b68 !important;
}
.v-card__text {
  height: 200px;
  background: linear-gradient(90deg, #ebeaea, #ffffff);
}
</style>
