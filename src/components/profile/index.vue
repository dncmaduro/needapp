<template>
  <UContainer class="mt-4">
    <h1 class="text-center text-4xl font-medium">Your Profile</h1>
    <UForm
      :state="state"
      class="mx-auto mt-8 flex w-full max-w-[800px] flex-col items-center gap-6"
      @submit="handleSubmit"
    >
      <div class="flex w-full justify-between">
        <div class="flex w-[400px] flex-col gap-4">
          <UFormGroup label="Email" name="email" class="w-full">
            <UInput v-model="profileStore.email" disabled size="md" />
          </UFormGroup>

          <UFormGroup label="Name" name="name" class="w-full">
            <UInput v-model="state.name" placeholder="Enter your name..." size="md" />
          </UFormGroup>

          <UFormGroup label="Avatar" name="avatar" class="w-full">
            <UInput v-model="state.avatar" placeholder="Enter your avatar..." size="md" />
          </UFormGroup>

          <UFormGroup label="Phone" name="phone" class="w-full">
            <UInput v-model="state.phone" placeholder="Enter your phone..." size="md" />
          </UFormGroup>
        </div>

        <NuxtImg
          class="h-[200px] w-[200px] rounded-full border border-gray-300"
          :src="state.avatar"
        />
      </div>

      <div class="flex w-full justify-between gap-4">
        <UFormGroup label="Facebook" name="facebook" class="w-full">
          <UInput v-model="state.facebook" placeholder="Enter your facebook..." size="md" />
        </UFormGroup>

        <UFormGroup label="Date of Birth" class="w-full">
          <UPopover :popper="{ placement: 'bottom-start' }" class="w-full">
            <UButton
              icon="i-heroicons-calendar-days"
              :label="format(state.dob, 'MM/dd/yyyy')"
              color="white"
              class="w-full"
              size="md"
            />

            <template #panel="{ close }">
              <VDatePicker v-model="state.dob" @close="close" />
            </template>
          </UPopover>
        </UFormGroup>

        <UFormGroup label="Gender" name="gender" class="w-full">
          <USelect
            v-model="state.gender"
            :options="genderOptions"
            placeholder="Select your gender..."
            size="md"
          />
        </UFormGroup>
      </div>

      <div class="mt-12 flex gap-4">
        <UButton
          label="Save"
          class="w-[120px] justify-center"
          size="md"
          :disabled="!isFormChanged"
          type="submit"
        />
        <UButton label="Cancel" color="gray" class="w-[120px] justify-center" size="md" />
      </div>
    </UForm>
  </UContainer>
</template>

<script setup lang="ts">
import { genderOptions } from '~/constants/profile'
import type { ProfileForm } from '~/types/profile'
import { cloneDeep, isEqual } from 'lodash-es'
import { useUserStore } from '~/store/user'
import { format } from 'date-fns'
import { useProfileStore } from '~/store/profile'

const userStore = useUserStore()
const profileStore = useProfileStore()

const { getProfile, createProfile, updateProfile } = useProfile()

const state = reactive<ProfileForm>({
  id: 1,
  created_at: new Date('01/01/2024'),
  name: '',
  phone: '',
  gender: '',
  dob: new Date(),
  facebook: '',
  avatar: '',
  account_id: ''
})

let initialCopy = cloneDeep(state)

onMounted(async () => {
  const data = await getProfile(userStore.id)
  if (!data) {
    const newData = await createProfile(userStore.id)
    if (newData) {
      Object.assign(state, newData)
      initialCopy = cloneDeep(state)
    }
  } else {
    if (data) {
      Object.assign(state, data)
      initialCopy = cloneDeep(state)
    }
  }
})

const isFormChanged = computed(() => {
  return !isEqual(state, initialCopy)
})

const handleSubmit = async () => {
  if (isEqual(state, initialCopy)) {
    return
  }

  console.log(1)

  const data = await updateProfile(
    state.account_id,
    state.avatar,
    state.facebook,
    state.dob,
    state.gender,
    state.phone,
    state.name
  )

  if (data) {
    Object.assign(state, data)
    initialCopy = cloneDeep(state)
  }
}
</script>
