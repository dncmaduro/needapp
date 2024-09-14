<template>
  <div class="h-20 w-full border-b border-gray-300">
    <UContainer class="flex h-full items-center justify-between">
      <CommonLogo variant="light" />
      <div class="flex gap-4">
        <nuxt-link to="/signin">
          <UButton label="Sign in" class="rounded-full" size="md" />
        </nuxt-link>
        <nuxt-link to="/signup">
          <UButton label="Sign up" class="rounded-full" color="white" size="md" />
        </nuxt-link>
      </div>
    </UContainer>
  </div>
</template>
