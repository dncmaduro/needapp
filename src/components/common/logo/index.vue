<template>
  <nuxt-link to="/">
    <NuxtImg :src="variant === 'dark' ? '/logo/dark.png' : '/logo/light.png'" class="h-9" />
  </nuxt-link>
</template>

<script setup lang="ts">
import type { Logo } from '~/types/common/logo'

defineProps<Logo>()
</script>
