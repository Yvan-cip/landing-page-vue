<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="p-[10px] w-full">
    <h4 class="text-[28px] leading-[40px]">
      {{ title }}
    </h4>
  </div>
</template>
