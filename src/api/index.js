import axios from 'axios'

const instance=axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

function registerUser(userData){  
  return instance.post('signup', userData)
}

function loginUser(userData){  
  return instance.post('login',userData);
}

export {registerUser,loginUser}