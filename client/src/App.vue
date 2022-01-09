<template>
  <v-app>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>



<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
export default {
  beforeCreate() {
    if (localStorage.getItem("jwt") != null) {
        this.$router.push('dashboard');
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    EmptyLayout,
    DashboardLayout,
  },
};
</script>



