<template>
  <UContainer class="my-8 flex flex-col items-center gap-8">
    <h1 class="text-4xl font-medium">Sign up</h1>
    <div class="w-full max-w-[600px]">
      <UForm :state="state" :validate="validate" class="mx-4 flex flex-col items-center gap-8">
        <UFormGroup label="Email" name="email" required class="w-full">
          <UInput placeholder="Enter your email..." size="md" v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required class="w-full">
          <CommonPasswordInput :model-value="state.password" placeholder="Enter your password..." />
        </UFormGroup>

        <UFormGroup label="Confirm your password" name="confirmation" required class="w-full">
          <UInput placeholder="Enter your confirmation..." size="md" v-model="state.confirmation" />
        </UFormGroup>

        <div class="flex flex-col items-center gap-4">
          <UButton type="submit" class="w-[200px] justify-center" size="md" label="Sign up" />
          <nuxt-link to="/auth/signin">
            <span class="text-primary">Have account? Sign in now </span>
          </nuxt-link>
        </div>
      </UForm>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { FormError } from '#ui/types'
import type { SignupForm } from '~/types/auth/signup'

const state = reactive<SignupForm>({
  email: '',
  password: '',
  confirmation: ''
})

const validate = (state: SignupForm): FormError[] => {
  const errors = []
  if (!state.email) {
    errors.push({ path: 'email', message: 'Required' })
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Simple email regex pattern
    if (!emailRegex.test(state.email)) {
      errors.push({ path: 'email', message: 'Invalid email format' })
    }
  }
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  if (state.confirmation !== state.password)
    errors.push({
      path: 'confirmation',
      message: 'Confirmation password is not match with password!'
    })
  return errors
}
</script>
