<template>
  <div class="container">
    <v-btn color="error" dark @click.stop="dialog = true"> Выход </v-btn>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6">
          Действительно хотите выйти?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="logout">
            Да
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            Нет
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  methods: {
    logout() {
      localStorage.removeItem('jwt');
      localStorage.removeItem('login');
      this.$router.push('/login');
    },
  },
};
</script>