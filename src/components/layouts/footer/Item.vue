<template>
  <nuxt-link :to="to">
    <UButton :icon="icon" size="lg" color="gray" class="rounded-full" />
  </nuxt-link>
</template>

<script setup lang="ts">
import type { LayoutsFooterItem } from '~/types/layouts/footer'

defineProps<LayoutsFooterItem>()
</script>
