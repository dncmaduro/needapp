<template>
  <UContainer class="mb-8 mt-4 flex flex-col">
    <div
      class="mx-auto flex w-full max-w-[300px] flex-col items-center md:max-w-[500px] lg:mx-0 lg:max-w-[800px] lg:items-start"
    >
      <h1 class="text-2xl font-medium">{{ name }}</h1>
      <span class="text-xs text-gray-700">{{ format(createdAt, 'd MMM, yyyy') }}</span>
      <span class="mt-4 text-gray-800">{{ description }}</span>
      <UCarousel
        :items="images"
        class="relative mt-4 w-full overflow-hidden rounded-2xl border border-gray-300"
        indicators
        arrows
      >
        <template #default="{ item }">
          <div class="my-auto h-fit w-[300px] md:w-[500px] lg:w-[800px]">
            <NuxtImg :src="item" fit="contain" />
          </div>
        </template>

        <template #prev="{ onClick, disabled }">
          <UButton
            :disabled="disabled"
            @click="onClick"
            icon="i-heroicons-arrow-left"
            class="absolute top-1/2 hidden lg:flex"
            color="white"
            :ui="{ rounded: 'rounded-full' }"
            size="xs"
            :class="disabled && 'hidden'"
          />
        </template>

        <template #next="{ onClick, disabled }">
          <UButton
            :disabled="disabled"
            @click="onClick"
            icon="i-heroicons-arrow-right"
            class="absolute right-0 top-1/2 hidden lg:flex"
            color="white"
            :ui="{ rounded: 'rounded-full' }"
            size="xs"
            :class="disabled && 'hidden'"
          />
        </template>
      </UCarousel>

      <hr class="mb-4 mt-12" />

      <span class="text-lg font-medium">Talk about this idea</span>
      <div class="mt-4 flex w-full flex-col gap-2">
        <NewIdeasDetailComment
          v-for="comment in comments"
          :key="comment.id"
          :id="comment.id"
          :created-at="comment.createdAt"
          :content="comment.content"
          :profile-id="comment.profileId"
        />
      </div>

      <UForm :state="formState" class="mt-8 flex w-full gap-4">
        <UFormGroup name="content" class="w-full">
          <UInput placeholder="Let everyone know what you think" size="md" />
        </UFormGroup>

        <UButton type="submit" label="Send" icon="i-heroicons-paper-airplane" variant="outline" />
      </UForm>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { NewIdeasDetailComment, NewIdeasDetail, NewIdeasCommentForm } from '~/types/newideas'
import { format } from 'date-fns'

defineProps<NewIdeasDetail>()

const comments = ref<NewIdeasDetailComment[]>([
  {
    id: 1,
    createdAt: new Date(),
    profileId: 1,
    content: "That's good"
  },
  {
    id: 2,
    createdAt: new Date(),
    profileId: 1,
    content: "That's good"
  }
])

const formState = reactive<NewIdeasCommentForm>({
  content: ''
})
</script>
