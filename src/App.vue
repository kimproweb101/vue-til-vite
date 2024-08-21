<template>
  <div>
    <div>{{ $store.state.count }}</div>
    <AppHeader></AppHeader>
    <RouterView />
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

<style scoped></style>
