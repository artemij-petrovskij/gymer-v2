<template>
  <v-app id="inspire">
    <!-- <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="deep-purple lighten-5" class="pa-4">
        <v-avatar class="mb-4" color="deep-purple lighten-2" size="80">
          <span class="white--text text-h5">{{ login[0] + login[1] }}</span>
        </v-avatar>

        <div>{{ login }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item to="training">
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Тренировка</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item to="weight">
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Контроль веса</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item to="settings">
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Настройки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    login: localStorage.getItem("login"),
    tabs: null,
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
};
</script>