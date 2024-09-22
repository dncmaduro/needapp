<template>
  <div class="rounded-lg border border-gray-300 p-2">
    <div class="flex items-center gap-2">
      <UAvatar size="xs" />
      <span class="text-sm"
        >{{ name }}
        <span class="ml-1 text-xs text-gray-700">{{ format(createdAt, 'd MMM, yyyy') }}</span></span
      >
    </div>
    <div class="mt-2">
      <span>{{ content }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewIdeasDetailComment } from '~/types/newideas'
import { format } from 'date-fns'

defineProps<NewIdeasDetailComment>()

const name = ref('Tran Manh Dung')
</script>
