<template>
  <UInput
    :type="isPasswordShow ? 'text' : 'password'"
    :placeholder="placeholder"
    size="md"
    v-model="localValue"
    :ui="{
      icon: { trailing: { pointer: '' } }
    }"
  >
    <template #trailing>
      <UButton
        :icon="isPasswordShow ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
        size="xs"
        class="z-10"
        color="white"
        variant="soft"
        @click="togglePassword"
      />
    </template>
  </UInput>
</template>

<script setup lang="ts">
import type { PasswordInput } from '~/types/common/password-input'

const props = defineProps<PasswordInput>()

const isPasswordShow = ref(false)

const togglePassword = () => {
  isPasswordShow.value = !isPasswordShow.value
}

const localValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal
  }
)
</script>
