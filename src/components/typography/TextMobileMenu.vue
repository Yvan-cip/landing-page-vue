<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="text-left w-full">
    <h1 class="text-black dark:text-light_text text-[30px] leading-[45px]">
      {{ title }}
    </h1>
  </div>
</template>
