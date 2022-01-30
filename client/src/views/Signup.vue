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

          <v-text-field
            v-model="checkpass"
            autocomplete="check-pass"
            label="Повторите пароль"
            placeholder="Повторите пароль"
            type="password"
            :rules="passSecRules"
            solo
            dense
          ></v-text-field>
          <v-btn block large color="success" @click="registerUser"
            >Продолжить</v-btn
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
      (value) => !!value || "Обязательное поле",
      (value) => (value || "").length >= 5 || "Минимум 5 символов",
      (value) => (value || "").length <= 40 || "Максимум 40 символов",
    ],
    passRules: [
      (value) => !!value || "Обязательное поле",
      (value) => (value || "").length <= 40 || "Максимум 40 символов",
      (value) => (value || "").length >= 5 || "Минимум 5 символов",
    ],
    passSecRules: [
      (value) => !!value || "Обязательное поле",
      (value) => (value || "").length <= 40 || "Максимум 40 символов",
      (value) => (value || "").length >= 5 || "Минимум 5 символов",
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
<style lang="css" scoped>
.v-input__slot {
  background-color: #fafbfc !important;
}
.v-card {
  background: linear-gradient(90deg, #ebeaea, #ffffff);
}
</style>
