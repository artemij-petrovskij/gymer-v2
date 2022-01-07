<template>
  <v-app>
    <v-card flat class="py-12">
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <div class="transition-swing text-h2 pt-4 pb-5">Gymer v2 Lite</div>
          </v-col>
          <v-btn-toggle v-model="toggle_exclusive" rounded>
            <v-btn class="auth" to="/"> Main </v-btn>
            <v-btn class="auth" to="/login"> Login </v-btn>
            <v-btn class="auth" to="/signup"> SignUp </v-btn>
          </v-btn-toggle>
        </v-row>
      </v-card-text>
    </v-card>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>









<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.auth {
  width: 100px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
