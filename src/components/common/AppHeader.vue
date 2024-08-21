<template>
  <header>
    <h1><router-link to="/">LOGO</router-link></h1>    
    <template v-if="isUserLogin">
      <div>
        <span>{{ $store.state.username }}</span>
        <button type="button" @click="logoutUser">로그아웃</button>
      </div>
    </template>
    <template v-else>
      <div>
        <router-link to="/login">{{ $store.state.username }}로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </div>
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
<style scoped>
header{display:flex;justify-content:space-between;border-bottom:1px solid #ccc;padding:10px;}
</style>