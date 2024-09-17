import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    access_token: '',
    id: ''
  }),
  actions: {
    isSignedIn() {
      return this.access_token !== ''
    },

    setUser(access_token: string, id: string) {
      this.access_token = access_token
      this.id = id
    },

    clearUser() {
      this.access_token = ''
      this.id = ''
    }
  },
  persist: true
})
