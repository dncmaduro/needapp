<template>
  <div class="flex gap-4">
    <LayoutsFooterItem
      v-for="item in socialLinks"
      :key="item.icon"
      :icon="item.icon"
      :to="item.to"
    />
  </div>
</template>

<script setup lang="ts">
import type { LayoutsFooterItem } from '~/types/layouts/footer'

const socialLinks = ref<LayoutsFooterItem[]>([
  {
    icon: 'i-mdi-facebook',
    to: 'https://facebook.com/maduro3992'
  },
  {
    icon: 'i-mdi-linkedin',
    to: 'https://linkedin.com/in/maduro3992/'
  },
  {
    icon: 'i-mdi-github',
    to: 'https://github.com/dncmaduro'
  },
  {
    icon: 'i-mdi-email-outline',
    to: 'mailto:manhdungtran.vnuuet@gmail.com'
  },
  {
    icon: 'i-mdi-instagram',
    to: 'https://instagram.com/madurc.29'
  }
])
</script>
