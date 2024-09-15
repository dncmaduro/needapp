<template>
  <UContainer class="my-8 flex flex-col items-center gap-8">
    <h1 class="text-4xl font-medium">Sign in</h1>
    <div class="w-[600px]">
      <UForm :state="state" :validate="validate" class="flex w-full flex-col items-center gap-8">
        <UFormGroup label="Email" name="email" required class="w-full">
          <UInput placeholder="Enter your email..." size="md" v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required class="w-full">
          <CommonPasswordInput :model-value="state.password" placeholder="Enter your password..." />
        </UFormGroup>

        <div class="flex flex-col items-center gap-4">
          <UButton type="submit" class="w-[200px] justify-center" size="md" label="Sign up" />
          <nuxt-link to="/auth/signup">
            <span class="text-primary">Don't have account? Sign up now </span>
          </nuxt-link>
        </div>
      </UForm>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { FormError } from '#ui/types'
import type { SigninForm } from '~/types/auth/signin'

const state = reactive<SigninForm>({
  email: '',
  password: ''
})

const validate = (state: SigninForm): FormError[] => {
  const errors = []
  if (!state.email) {
    errors.push({ path: 'email', message: 'Required' })
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(state.email)) {
      errors.push({ path: 'email', message: 'Invalid email format' })
    }
  }
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}
</script>
