<template>
  <div
    class="flex w-fit items-center rounded-md border border-gray-300 py-1 pl-3 pr-1 hover:border-blue-500"
  >
    <span class="cursor-pointer" @click="open()">{{ name }}</span>
    <UButton
      icon="i-heroicons-x-mark"
      size="xs"
      color="white"
      variant="soft"
      class="ml-2"
      @click="remove()"
    />
  </div>
</template>

<script setup lang="ts">
import type { FileItem } from '~/types/common/file-item'

defineProps<FileItem>()

const emit = defineEmits<{
  (e: 'remove'): void
  (e: 'open'): void
}>()

const remove = () => {
  emit('remove')
}

const open = () => {
  emit('open')
}
</script>
