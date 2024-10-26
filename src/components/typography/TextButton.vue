<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="text-left p-[10px] w-full">
    <span class="text-blue text-[20px] leading-[20px]">{{ text }}</span>
  </div>
</template>
