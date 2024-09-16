<template>
  <div class="h-20 w-full border-b border-gray-300">
    <UContainer class="flex h-full items-center justify-between">
      <CommonLogo variant="light" />
      <LayoutsHeaderAuth v-if="!userStore.access_token" />
      <LayoutsHeaderProfile v-else />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
</script>
