<template>
  <div class="flex gap-4">
    <nuxt-link to="/auth/signin">
      <UButton label="Sign in" class="rounded-full" size="md" />
    </nuxt-link>
    <nuxt-link to="/auth/signup">
      <UButton label="Sign up" class="rounded-full" color="white" size="md" />
    </nuxt-link>
  </div>
</template>
