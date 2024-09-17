<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" class="z-60">
    <UButton :label="profileStore.email" color="white" trailing-icon="i-heroicons-chevron-down" />
  </UDropdown>
</template>

<script setup lang="ts">
import { useProfileStore } from '~/store/profile'

const profileStore = useProfileStore()

const { signOut } = useAuth()

const items = [
  [
    {
      label: 'Profile',
      icon: 'i-mdi-account-circle',
      to: '/profile'
    }
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-mdi-logout',
      click: () => signOut()
    }
  ]
]
</script>
