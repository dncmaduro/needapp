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
        v-if="canShowPassword"
        color="white"
        variant="soft"
        @click="togglePassword"
      />
    </template>
  </UInput>
</template>

<script setup lang="ts">
import type { PasswordInput } from '~/types/common/password-input'

const props = withDefaults(defineProps<PasswordInput>(), {
  canShowPassword: false
})

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

const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

watch(localValue, (newVal) => {
  emit('update', newVal)
})
</script>
