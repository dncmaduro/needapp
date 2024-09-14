<template>
  <div class="flex min-h-screen flex-col">
    <LayoutsHeader />
    <div class="flex-grow">
      <slot />
    </div>
    <LayoutsFooter />
  </div>
</template>
