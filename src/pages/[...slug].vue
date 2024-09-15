<template>
  <UContainer class="my-8 flex flex-col items-center gap-8">
    <div class="w-full max-w-[400px]">
      <NuxtImg src="/not-found.png" class="mx-2" alt="Not found" />
    </div>
    <div class="flex flex-col items-center gap-2">
      <span class="text-xl font-medium">Page not found</span>
      <nuxt-link to="/" class="text-primary">Back to homepage</nuxt-link>
    </div>
  </UContainer>
</template>
