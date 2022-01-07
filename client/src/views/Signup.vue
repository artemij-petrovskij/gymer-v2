<template>
  <v-form>
    <v-container>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-card-text>
          <v-text-field
            v-model="login"
            label="Login"
            placeholder="Login"
            :rules="rules"
            solo
            dense
            elebation="5"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="password"
            placeholder="password"
            type="password"
            :rules="passrules"
            solo
            dense
          ></v-text-field>

          <v-text-field
            v-model="checkpass"
            label="password"
            placeholder="password"
            type="password"
            
            solo
            dense
          ></v-text-field>
          <v-btn block large color="success" @click="checkPass">Continue</v-btn>
        </v-card-text>
      </v-card>
    </v-container>

    <v-snackbar v-model="snackbar"> Пароли не совпадают </v-snackbar>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    login: "",
    password: "",
    checkpass: "",
    snackbar: false,

    rules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
      (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    ],
    passrules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
      (value) => (value || "").length > 5 || "Min 5 characters",
    ],

  }),
  methods: {
    checkPass() {
      this.password === this.checkpass
        ? console.log(true)
        : (this.snackbar = true);
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
