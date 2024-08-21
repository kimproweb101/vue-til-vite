<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">username:</label>
      <input type="text" id="username" placeholder="username" v-model="username">
    </div>
    <div>
      <label for="password">password:</label>
      <input type="text" id="password" placeholder="password" v-model="password">
    </div>
    <button type="submit" :disabled="!isUsernameValid || !password">로그인</button>
    <div>{{ logMessage }}</div>
  </form>
</template>

<script>
import { loginUser } from '@/api/index.js';
import {validateEmail} from '@/utils/validation'
export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  computed:{
    isUsernameValid(){
      return validateEmail(this.username)
    }
  },
  methods: {
    async submitForm() {            
      try{
        const userData = {
          username: this.username,
          password: this.password,
        } 
        const { data } = await loginUser(userData)
        this.logMessage = `${data.user.nickname}님이 로그인 되었습니다`        
      }catch(error){
        this.logmessage=error.response.data
      }finally{
        this.initForm()
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style lang="scss" scoped></style>