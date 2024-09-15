<template>
  <div class="flex min-h-screen flex-col">
    <LayoutsHeader />
    <div class="relative flex-grow">
      <slot />
      <UNotifications />
    </div>
    <LayoutsFooter />
  </div>
</template>
