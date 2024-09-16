<template>
  <UContainer class="mt-4">
    <h1 class="text-center text-4xl font-medium">Your Profile</h1>
    <UForm
      :state="state"
      class="mx-auto mt-8 flex w-full max-w-[800px] flex-col items-center gap-6"
    >
      <div class="flex w-full justify-between">
        <div class="flex w-[400px] flex-col gap-4">
          <UFormGroup label="Email" name="email" class="w-full">
            <UInput v-model="email" disabled size="md" />
          </UFormGroup>

          <UFormGroup label="Name" name="name" class="w-full">
            <UInput v-model="state.name" placeholder="Enter your name..." size="md" />
          </UFormGroup>

          <UFormGroup label="Avatar" name="avatar" class="w-full">
            <UInput v-model="state.avatar" placeholder="Enter your avatar..." size="md" />
          </UFormGroup>
        </div>

        <NuxtImg class="h-[200px] rounded-full border border-gray-300" :src="state.avatar" />
      </div>

      <div class="flex w-full justify-between gap-4">
        <UFormGroup label="Phone" name="phone" class="w-full">
          <UInput v-model="state.phone" placeholder="Enter your phone..." size="md" />
        </UFormGroup>

        <UFormGroup label="Facebook" name="facebook" class="w-full">
          <UInput v-model="state.facebook" placeholder="Enter your facebook..." size="md" />
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

const email = ref('a@gmail.com')

const initialState = reactive<ProfileForm>({
  id: 1,
  created_at: new Date('01/01/2024'),
  name: 'Tran Manh Dung',
  phone: '0234567891',
  gender: 'male',
  dob: new Date('01/01/2024'),
  facebook: 'https://facebook.com/maduro3992',
  avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
  account_id: '111'
})

const state = reactive(cloneDeep(initialState))

const initialCopy = cloneDeep(state)

const isFormChanged = computed(() => {
  return !isEqual(state, initialCopy)
})
</script>
