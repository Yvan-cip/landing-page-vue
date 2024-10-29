<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button
    class="text-center py-[18px] px-[38px] w-full rounded-[35px] bg-primary"
  >
    <span class="text-light_text text-[20px] leading-[20px]">{{ text }}</span>
  </button>
</template>
