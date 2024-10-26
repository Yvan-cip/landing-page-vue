<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="text-left p-[10px] w-full">
    <h1 class="text-[28px] leading-[40px]">{{ title }}</h1>
  </div>
</template>
