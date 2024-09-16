import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    access_token: ''
  }),
  actions: {
    isSignedIn() {
      return this.access_token !== ''
    },

    setAccessToken(access_token: string) {
      this.access_token = access_token
    },

    clearAccessToken() {
      this.access_token = ''
    }
  },
  persist: true
})
