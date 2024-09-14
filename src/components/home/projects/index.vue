<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <HomeProjectsItem
      v-for="item in projects"
      :key="item.id"
      :id="item.id"
      :image="item.image"
      :description="item.description"
      :name="item.name"
      :version="item.version"
      :is-available="item.isAvailable"
      :href="item.href"
    />
  </div>
</template>

<script setup lang="ts">
import type { HomeProjectsItem } from '~/types/home/project'

const projects = ref<HomeProjectsItem[]>([
  {
    id: 1,
    href: '/newideas',
    image: 'https://v2.nuxt.com/preview.png',
    name: 'NewIdeas',
    description:
      'This app is used to save, describe about every ideas that I got and I wanted to do in the future.',
    version: '0.0.1',
    isAvailable: true
  },
  {
    id: 2,
    href: '/newideas',
    image: 'https://v2.nuxt.com/preview.png',
    name: 'NewIdeas',
    description:
      'This app is used to save, describe about every ideas that I got and I wanted to do in the future.',
    version: '0.0.0',
    isAvailable: true
  },
  {
    id: 3,
    href: '/newideas',
    image: 'https://v2.nuxt.com/preview.png',
    name: 'NewIdeas',
    description:
      'This app is used to save, describe about every ideas that I got and I wanted to do in the future.',
    version: '0.0.0',
    isAvailable: true
  },
  {
    id: 4,
    href: '/newideas',
    image: 'https://v2.nuxt.com/preview.png',
    name: 'NewIdeas',
    description:
      'This app is used to save, describe about every ideas that I got and I wanted to do in the future.',
    version: '0.0.1',
    isAvailable: false
  }
])
</script>
