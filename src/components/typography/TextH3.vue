<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="p-[10px] w-full">
    <h3 class="text-[20px] font-bold leading-[28px]">
      {{ title }}
    </h3>
  </div>
</template>
