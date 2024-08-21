<template>
  <div>
    <AppHeader></AppHeader>
    <RouterView />
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  }
}
</script>

<style scoped></style>
