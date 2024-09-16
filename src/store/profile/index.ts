import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    email: ''
  }),
  actions: {
    setEmail(email: string) {
      this.email = email
    },

    clearEmail() {
      this.email = ''
    }
  },
  persist: true
})
