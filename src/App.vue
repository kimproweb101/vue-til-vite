<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <RouterView />
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    AppHeader,
    RouterView,
  }
}
</script>

<style scoped>

</style>
