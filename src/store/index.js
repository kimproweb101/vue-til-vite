
import { createStore } from 'vuex'
export const store = createStore({
  state () {
    return {
      username:''
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
    }
  }
})
