interface Profile {
  account_id: string
  avatar: string
  created_at: string
  dob: string | Date
  facebook: string
  gender: string
  id: number
  name: string
  phone: string
}

export const useProfile = () => {
  const supabase: any = useSupabaseClient()
  const toast = useToast()

  const getProfile = async (account_id: string) => {
    try {
      const { data, error } = await supabase
        .from('profile')
        .select('*')
        .eq('account_id', account_id)
      if (data) {
        const profile = data[0] as Profile
        return profile
      } else {
        toast.add({
          id: 'Fetch profile failed!',
          title: 'Fetch profile failed!',
          description: error?.message || 'Something happen! Please try again!',
          color: 'red'
        })
      }
    } catch (error) {
      toast.add({
        id: 'Fetch profile failed!',
        title: 'Fetch profile failed!',
        description: 'Something happen! Please try again!',
        color: 'red'
      })
    }
  }

  const createProfile = async (account_id: string) => {
    try {
      const { data, error } = await supabase
        .from('profile')
        .insert({ account_id: account_id })
        .select()
      if (error) {
        toast.add({
          id: 'Create profile failed!',
          title: 'Create profile failed!',
          description: error?.message || 'Something happen! Please try again!',
          color: 'red'
        })
      } else {
        const profile = data[0] as Profile
        return profile
      }
    } catch (error) {
      toast.add({
        id: 'Create profile failed!',
        title: 'Create profile failed!',
        description: 'Something happen! Please try again!',
        color: 'red'
      })
    }
  }

  const updateProfile = async (
    account_id: string,
    avatar: string,
    facebook: string,
    dob: Date,
    gender: string,
    phone: string,
    name: string
  ) => {
    try {
      const { data, error } = await supabase
        .from('profile')
        .update({ avatar, facebook, dob, gender, phone, name })
        .eq('account_id', account_id)
        .select()
      if (error) {
        toast.add({
          id: 'Update profile failed!',
          title: 'Update profile failed!',
          description: error?.message || 'Something happen! Please try again 2!',
          color: 'red'
        })
      } else {
        const profile = data[0] as Profile
        if (profile && profile.dob) {
          profile.dob = new Date(profile.dob).toISOString()
        }
        toast.add({
          id: 'Update profile successfully!',
          title: 'Update profile successfully!',
          color: 'green'
        })
        return profile
      }
    } catch (error) {
      console.log(error)
      toast.add({
        id: 'Update profile failed!',
        title: 'Update profile failed!',
        description: 'Something happen! Please try again!',
        color: 'red'
      })
    }
  }

  return { getProfile, createProfile, updateProfile }
}
