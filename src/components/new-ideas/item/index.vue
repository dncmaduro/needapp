<template>
  <nuxt-link :to="`/new-ideas/${id}`">
    <UCard
      class="hover:bg-primary-50"
      :ui="{
        header: { background: 'bg-gray-50' },
        footer: { padding: 'py-1.5' },
        body: { padding: 'py-2' }
      }"
    >
      <template #header>
        <span class="text-xl font-medium">{{ name }}</span>
      </template>

      <span class="text-gray-700">{{ description }}</span>

      <template #footer>
        <span class="text-sm">Access: {{ access }}</span>
      </template>
    </UCard>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { NewIdeasItem } from '~/types/newideas'

defineProps<NewIdeasItem>()
</script>
