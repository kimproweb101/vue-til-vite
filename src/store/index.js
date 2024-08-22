
import { createStore } from 'vuex'
import {getAuthFromCookie, getUserFromCookie} from '@/utils/cookies.js';

export const store = createStore({
  state () {
    return {
      username:getUserFromCookie() || '',
      token:getAuthFromCookie() || '',
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
