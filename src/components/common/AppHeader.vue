<template>
  <header>
    <template v-if="isUserLogin">
      <span>{{ $store.state.username }}</span>
      <button type="button" @click="logoutUser">로그아웃</button>
    </template>
    <template v-else>
      <router-link to="/login">{{ $store.state.username }}로그인</router-link>
      <router-link to="/signup">회원가입</router-link>
    </template>
  </header>
</template>
<script>
export default{
  computed:{
    isUserLogin(){
      return this.$store.getters.isLogin
    }
  },
  methods:{
    logoutUser(){
      console.log('logoutUser')
      this.$store.commit('clearUsername')
      this.$router.push('/login')
    }
  }
}
</script>