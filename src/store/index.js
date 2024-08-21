
import { createStore } from 'vuex'
export const store = createStore({
  state () {
    return {
      username:'',
      token:'',
    }
  },
  getters:{
    isLogin(state){
      return state.username!=='';
    }
  },
  mutations: {
    setUsername (state, username) {
      state.username=username;
    },
    clearUsername(state){
      state.username='';
    },
    setToken(state,token){
      state.token=token
    }
  }
})
