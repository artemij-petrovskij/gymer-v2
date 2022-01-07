<template>
  <v-form>
    <v-container>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-card-text>
          <v-text-field
            v-model="login"
            label="Login"
            placeholder="Login"
            :rules="loginRules"
            solo
            dense
            elebation="5"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="password"
            placeholder="password"
            type="password"
            :rules="passRules"
            solo
            dense
          ></v-text-field>
          <v-btn block large color="success">Login</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    loginRules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
      (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    ],
    passRules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
      (value) => (value || "").length > 5 || "Min 5 characters",
    ],
  }),
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
