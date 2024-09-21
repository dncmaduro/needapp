<template>
  <UInput
    size="lg"
    :ui="{
      rounded: 'rounded-full',
      color: { black: { outline: 'border border-gray-300' } },
      icon: { trailing: { pointer: '' } }
    }"
    :placeholder="placeholder"
    variant="outline"
    icon="i-heroicons-magnifying-glass"
    v-model="searchInput"
  >
    <template #trailing>
      <UButton size="xs" label="Search" class="rounded-full" @click="handleSearch" />
    </template>
  </UInput>
</template>

<script setup lang="ts">
import type { CommonSearch } from '~/types/common/search'

withDefaults(defineProps<CommonSearch>(), {
  placeholder: 'Search something...',
  loading: true
})

const searchInput = ref('')

const emit = defineEmits<{
  (e: 'search', searchInput: string): void
}>()

const handleSearch = () => {
  emit('search', searchInput.value)
}
</script>
