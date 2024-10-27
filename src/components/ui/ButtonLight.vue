<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button
    class="text-center py-[18px] px-[38px] w-full rounded-[35px] bg-light_background"
  >
    <span class="text-primary text-[20px] leading-[20px]">{{ text }}</span>
  </button>
</template>
