<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="p-[10px] w-full">
    <h2 class="font-normal text-[48px] leading-[55px]">
      {{ title }}
    </h2>
  </div>
</template>
