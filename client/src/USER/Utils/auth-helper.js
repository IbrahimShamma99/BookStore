import { signout } from './api-auth.js';

const auth = {
  isAuthenticated() {
    if (typeof window === "undefined")
      return false

    if (sessionStorage.getItem('jwt'))
      return sessionStorage.getItem('jwt')
    else
      return false
  },
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      sessionStorage.setItem('jwt', jwt)
    cb();
  },
  signout(cb) {
    if (typeof window !== "undefined"){
      sessionStorage.removeItem('jwt');
      localStorage.clear();
    }
      
    cb()
    signout().then((data) => {
      sessionStorage.removeItem('jwt');
      localStorage.clear();
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  }
}

export default auth;