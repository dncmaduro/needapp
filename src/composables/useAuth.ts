import { useUserStore } from '~/store/user'
import { useProfileStore } from '~/store/profile'

export const useAuth = () => {
  const supabase = useSupabaseClient()
  const toast = useToast()
  const userStore = useUserStore()
  const profileStore = useProfileStore()

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (data.user) {
        toast.add({
          id: 'Sign up successfully!',
          title: 'Sign up successfully!',
          description: 'Please confirm your account in your email!',
          color: 'green'
        })
        navigateTo('/auth/login')
      } else {
        toast.add({
          id: 'Sign up failed!',
          title: 'Sign up failed!',
          description: error?.message || 'Something happen! Please try again!',
          color: 'red'
        })
      }
    } catch (error) {
      toast.add({
        id: 'Sign up failed!',
        title: 'Sign up failed!',
        description: 'Something happen! Please try again!',
        color: 'red'
      })
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (data.user) {
        toast.add({
          id: 'Sign in successfully!',
          title: 'Sign in successfully!',
          color: 'green'
        })
        userStore.setAccessToken(data.session.access_token)
        profileStore.setEmail(email)
        navigateTo('/')
      } else {
        toast.add({
          id: 'Sign in failed!',
          title: 'Sign in failed!',
          description: error?.message || 'Something happen! Please try again!',
          color: 'red'
        })
      }
    } catch (error) {
      toast.add({
        id: 'Sign up failed!',
        title: 'Sign up failed!',
        description: 'Something happen! Please try again!',
        color: 'red'
      })
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      userStore.clearAccessToken()
      profileStore.clearEmail()
      navigateTo('/')
      if (error) {
        toast.add({
          id: 'Sign out failed!',
          title: 'Sign out failed!',
          description: error.message,
          color: 'green'
        })
      } else {
        toast.add({
          id: 'Sign out successfully!',
          title: 'Sign out successfully!',
          color: 'green'
        })
      }
    } catch (error) {
      toast.add({
        id: 'Sign out failed!',
        title: 'Sign out failed!',
        description: 'Something happen! Please try again!',
        color: 'red'
      })
    }
  }

  return { signUp, signIn, signOut }
}
