<template>
  <nuxt-link :to="href">
    <div
      class="w-[320px] overflow-hidden rounded-3xl border border-gray-300 shadow-md hover:border-blue-300 hover:bg-blue-50"
    >
      <div class="relative h-[160px] w-full">
        <NuxtImg fit="contain" :src="image" />
        <UBadge size="md" :label="label" :color="color" class="absolute right-3 top-3" />
      </div>
      <div class="m-2 flex flex-col">
        <span class="text-xl font-medium">{{ name }}</span>
        <span>{{ description }}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { HomeProjectsItem } from '~/types/home/project'

const props = defineProps<HomeProjectsItem>()

const label = computed(() => {
  return !props.isAvailable
    ? 'Not Available'
    : props.version === '0.0.0'
      ? 'Coming soon'
      : `v${props.version}`
})

const color = computed(() => {
  return !props.isAvailable ? 'gray' : props.version === '0.0.0' ? 'yellow' : `blue`
})
</script>
