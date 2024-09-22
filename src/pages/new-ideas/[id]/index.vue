<template>
  <NewIdeasDetail
    :id="idea.id"
    :name="idea.name"
    :description="idea.description"
    :access="idea.access"
    :images="idea.images"
    :created-at="idea.createdAt"
  />
</template>

<script setup lang="ts">
import type { NewIdeasDetail } from '~/types/newideas'

const idea = ref<NewIdeasDetail>({
  id: 1,
  name: 'NewIdeas',
  description:
    'An app where you can list the apps or websites you want to have to enhance your convenience in daily life',
  access: 0,
  images: [
    'https://rock-the-prototype.com/wp-content/uploads/2022/01/Nuxt_JavaScript_Framework.jpg',
    'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230313161021/NUXT.js-tutorial.png'
  ],
  createdAt: new Date()
})
</script>
