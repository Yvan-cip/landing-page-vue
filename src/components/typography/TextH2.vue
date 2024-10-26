<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="text-left p-[10px] w-full">
    <h2 class="font-medium text-[48px] leading-[55px]">
      {{ title }}
    </h2>
  </div>
</template>
