<template>
  <UContainer class="mt-4 flex flex-col">
    <h1 class="mx-auto text-center text-2xl font-medium md:text-4xl">Brainstorm your ideas here</h1>
    <div class="mt-8 w-full max-w-[600px]">
      <CommonSearch />
    </div>
    <div class="mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <NewIdeasItem
        v-for="idea in ideas"
        :key="idea.id"
        :id="idea.id"
        :name="idea.name"
        :description="idea.description"
        :access="idea.access"
        :profile-id="idea.profileId"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { NewIdeasItem } from '~/types/newideas'

const ideas = ref<NewIdeasItem[]>([
  {
    id: 1,
    name: 'NewIdeas',
    description:
      'An app where you can list the apps or websites you want to have to enhance your convenience in daily life',
    access: 0,
    profileId: 1
  },
  {
    id: 2,
    name: 'NewIdeas',
    description:
      'An app where you can list the apps or websites you want to have to enhance your convenience in daily life',
    access: 0,
    profileId: 1
  },
  {
    id: 3,
    name: 'NewIdeas',
    description:
      'An app where you can list the apps or websites you want to have to enhance your convenience in daily life',
    access: 0,
    profileId: 1
  }
])
</script>
