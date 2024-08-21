<template>
  <div class="wrapper">
    <div>{{ $store.state.count }}</div>
    <AppHeader></AppHeader>
    <main>
      <RouterView />
    </main>
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
.wrapper{width:500px;margin:0 auto;}
main{padding:10px;}

</style>
