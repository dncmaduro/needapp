<template>
  <UContainer class="mt-4 flex flex-col items-center">
    <h1 class="mx-auto text-center text-2xl font-medium md:text-4xl">Create a new idea</h1>
    <div class="mt-8 w-full max-w-[800px]">
      <UForm :state="formState" class="mx-2 flex w-full flex-col gap-6" required>
        <UFormGroup label="Name" name="name" class="w-full">
          <UInput size="md" v-model="formState.name" placeholder="The idea's name" />
        </UFormGroup>

        <UFormGroup label="Description" name="description" class="w-full">
          <UTextarea size="md" v-model="formState.description" />
        </UFormGroup>

        <UFormGroup label="Images" name="images" class="w-full">
          <UButton
            label="Upload images"
            color="white"
            size="md"
            icon="i-heroicons-document-arrow-up"
            class="mb-2"
            @click="open()"
          />
          <div class="flex w-full flex-wrap items-center gap-2">
            <CommonFileItem
              v-for="(file, index) in formState.images"
              :key="file.name"
              :name="file.name"
              @remove="removeImage(index)"
              @open="openImage(index)"
            />
          </div>
        </UFormGroup>

        <UButton
          label="Create idea"
          class="mx-auto w-[150px] justify-center rounded-full"
          size="lg"
          type="submit"
        />
      </UForm>
    </div>
    <UModal v-model="isOpen">
      <NuxtImg :src="showUrl" class="p-4" />
    </UModal>
  </UContainer>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'
import type { NewIdeasForm } from '~/types/newideas'

const { files, open } = useFileDialog({
  accept: 'image/*',
  directory: false
})

const showUrl = ref<string>('')
const isOpen = ref<boolean>(false)

const formState = reactive<NewIdeasForm>({
  name: '',
  description: '',
  images: null
})

watch(files, (newValue) => {
  if (newValue) {
    formState.images = [...newValue]
  } else {
    formState.images = null
  }
})

const removeImage = (index: number) => {
  if (formState.images) {
    formState.images.splice(index, 1)
  }
}

const openImage = (index: number) => {
  if (formState.images) {
    showUrl.value = URL.createObjectURL(formState.images[index])
    isOpen.value = true
  }
}
</script>
