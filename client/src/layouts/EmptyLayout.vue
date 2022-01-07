<template>
  <v-app>
    <v-card flat class="py-12">
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <div class="transition-swing text-h2 pt-4 pb-5" style="text-align:center!important">Gymer v2 Lite</div>
          </v-col>
          <v-btn-toggle rounded>
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