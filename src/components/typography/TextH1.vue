<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full">
    <h1 class="font-bold text-[74px] leading-[84px]">
      {{ title }}
    </h1>
  </div>
</template>
