<template>
  <v-app>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>



<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import DashboardLayout from '@/layouts/DashboardLayout'
export default {
  computed: {
    layout() {
   
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
  components:{
    EmptyLayout,DashboardLayout
  }
};
</script>





<style lang="scss">
</style>
