<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="text-left p-[10px] w-full">
    <h2 class="text-texte text-[48px] leading-[55px] dark:text-light_text">
      {{ title }}
    </h2>
  </div>
</template>
