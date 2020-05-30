import { signout } from './api-auth.js';

const auth = {
  isAuthenticated() {
    if (typeof window === "undefined")
      return false

    if (localStorage.getItem('jwt'))
      return localStorage.getItem('jwt')
    else
      return false
  },
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
    localStorage.setItem('jwt', jwt)
    cb();
  },
  signout(cb) {
    if (typeof window !== "undefined"){
      localStorage.clear();
    }
      
    cb()
    signout().then((data) => {
      localStorage.clear();
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  }
}

export default auth;